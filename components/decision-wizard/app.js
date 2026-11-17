"use strict";
(() => {
  const labels = ["Overview", "Decision scope", "Evidence quality", "Decision routing", "Brief & outcome"];
  let step = 0;
  let eli5 = false;
  const easy = window.RTR_ELI5;
  const $ = id => document.getElementById(id);
  const fields = ["unit","measure","question","owner","numerator","denominator","observed","source","scope","coverage","urgent","persistent","impact","authority","context","action","actionOwner","review","verify"];
  const val = id => $(id).value.trim();
  const escapeHTML = str => String(str).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const getData = () => Object.fromEntries(fields.map(f => [f, val(f)]));
  const n = x => x === "" ? null : Number(x);
  const validity = d => {
    const a = n(d.numerator), b = n(d.denominator);
    if (!d.unit || !d.question || !d.owner) return {state:"unready",reason:"Specify the Reporting Unit, decision question and measurement owner."};
    if (a === null || b === null || !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 1 || a > b) return {state:"unready",reason:"Provide whole-number numerator and denominator. Numerator must not exceed the eligible population."};
    if (!d.observed) return {state:"unready",reason:"Select a source observation date so findings are not mistaken for live conditions."};
    if (d.scope === "inapplicable") return {state:"inapplicable",reason:"This measure does not apply to the defined scope. Record its applicability rationale before publishing."};
    if (d.scope !== "verified") return {state:"limited",reason:"Reporting Unit scope and applicability are not yet validated."};
    if (d.coverage !== "adequate") return {state:"limited",reason:"Source coverage and/or evidence quality is insufficient for a confident outcome conclusion."};
    return {state:"reviewed",reason:"Basic user-entered evidence gates pass. This does not independently verify the source, control effectiveness, or risk."};
  };
  const route = d => {
    if(d.urgent === "yes") return {label:"Immediate operational escalation",detail:"Use the approved incident response process now. Validate the evidence in parallel.",code:"amber"};
    const v = validity(d);
    if (v.state === "inapplicable") return {label:"Do not score — not applicable",detail:v.reason,code:"amber"};
    if (v.state === "unready" || v.state === "limited") return {label:"Evidence clarification",detail:v.reason+" Assign a data/coverage verification owner. Urgent incidents still follow incident response.",code:"amber"};
    if (d.urgent === "yes") return {label:"Immediate operational escalation",detail:"Use the approved incident/emergency response process immediately, independent of routine program reporting.",code:"amber"};
    if (d.urgent === "unknown") return {label:"Urgency must be assessed",detail:"A qualified operational responder must determine whether emergency escalation is required.",code:"amber"};
    if (d.persistent !== "yes") return {label:d.persistent === "no"?"Continue monitoring":"Establish historical trend",detail:"Do not recommend an enduring investment solely on a transient or unverified change. Track it against the approved review cadence.",code:"blue"};
    if (d.impact === "unknown") return {label:"Request mission context",detail:"The Reporting Unit or service owner must validate whether the trend affects important services or operations.",code:"amber"};
    if (d.impact === "no") return {label:"Monitor with context",detail:"No material impact has been established at this time; revisit on new evidence or risk review.",code:"blue"};
    const l = {unit:"Reporting Unit action",enterprise:"Enterprise/shared-service decision",risk:"Risk governance assessment",unknown:"Identify authorized decision-maker"}[d.authority] || "Decision ownership review";
    return {label:l,detail:"Prepare an evidence-linked decision packet. The wizard does not authorize actions or risk acceptance.",code:d.authority==="unknown"?"amber":"green"};
  };
  const brief = d => {
    const v = validity(d), r = route(d);
    const a = n(d.numerator), b = n(d.denominator);
    const rate = a!==null && b>0 && a<=b ? (100*a/b).toFixed(1)+"%" : "not calculable";
    const scope = d.unit || "[Reporting Unit not specified]";
    const observed = d.observed || "[date not provided]";
    const action = d.action || "A specific action remains to be determined";
    const owner = d.actionOwner || "Owner unassigned";
    const review = d.review || "Review date not scheduled";
    const verification = d.verify || "Verification criteria not specified";
    return {
      technical: scope+": "+(a??"—")+" of "+(b??"—")+" eligible observations ("+rate+") for '"+d.measure+"', source category "+d.source+", observed "+observed+". Denominator and eligibility must be confirmed.",
      program: "Evidence gate: "+v.state.toUpperCase()+". "+v.reason+" Historical persistence: "+d.persistent+". Known limitations: "+(d.context || "Not documented")+". This is an interpretation draft, not a verified risk rating.",
      unit: "Decision question: "+(d.question || "Not yet supplied")+". Service impact: "+d.impact+". Route: "+r.label+". Next action: "+action+".",
      enterprise: "Decision pathway: "+r.label+". "+r.detail+" Proposed owner: "+owner+". Outcome review: "+review+". Confirm using: "+verification+"."
    };
  };
  const render = () => {
    easy.apply(eli5,val("measure"));
    const navLabels=eli5?easy.steps:labels;
    for (let i=0;i<labels.length;i++) $("step-"+i).hidden=i!==step;
    $("step-label").textContent=navLabels[step];
    $("page-title").textContent=eli5?easy.titles[step]:["A decision-ready measurement, step by step.","Start with the decision, not the dashboard.","Separate what is observed from what is known.","Choose a responsible response pathway.","Translate once, brief at every level."][step];
    $("page-intro").textContent=eli5?easy.intros[step]:["This optional prototype shows how the program moves from technical measurement to an accountable leadership decision and outcome.","Who is being assessed, what question are we answering, and who owns the measurement?","Record the applicable population and evidence limitations before interpreting results.","Only validated, mission-relevant conditions should enter the routine decision process.","Every view is drawn from the same information, with different detail and decision authority."][step];
    $("progress-fill").style.width=((step+1)*20)+"%";
    $("step-count").textContent="Step "+(step+1)+" of "+labels.length;
    $("previous").disabled=step===0;
    $("next").textContent=step===4?(eli5?"Start again ↺":"Back to start ↺"):(eli5?"Next step →":"Continue →");
    $("steps").innerHTML=navLabels.map((l,i)=>'<button class="nav-step" type="button" data-step="'+i+'" '+(i===step?'aria-current="step"':'')+'><span class="nav-num">'+String(i+1).padStart(2,"0")+'</span>'+escapeHTML(l)+'</button>').join("");
    if(step===2){const d=getData(),v=validity(d);$("evidence-visual").hidden=!eli5;if(eli5)$("evidence-visual").innerHTML=easy.visual(d);$("evidence-result").innerHTML='<strong>'+escapeHTML(eli5?"CAN WE TRUST THE INFORMATION?":"Evidence check: "+v.state.toUpperCase())+'</strong><div>'+escapeHTML(eli5?easy.validity(v):v.reason)+'</div>';}
    if(step===3){const r=route(getData());$("routing-result").innerHTML='<span class="pill '+r.code+'">'+escapeHTML(eli5?"SUGGESTED NEXT STEP":r.label)+'</span><p>'+escapeHTML(eli5?easy.route(r):r.detail)+'</p>';$("routing-explain").hidden=!eli5;if(eli5)$("routing-explain").textContent="WHY? Check for emergencies first. Then check the information, ask whether the problem keeps happening, and find the right person to act. Nothing is approved automatically.";}
    if(step===4){const d=getData(),b=eli5?easy.briefing(d,validity(d),route(d)):brief(d);for(const k of ["technical","program","unit","enterprise"]) $(k+"-brief").textContent=b[k];}
    window.scrollTo({top:0,behavior:"instant"});
  };
  $("steps").addEventListener("click", e=>{const b=e.target.closest("[data-step]");if(b){step=Number(b.dataset.step);render();}});
  $("previous").addEventListener("click",()=>{step=Math.max(0,step-1);render();});
  $("next").addEventListener("click",()=>{step=step===4?0:step+1;render();});
  document.querySelectorAll(".field input,.field select,.field textarea").forEach(el=>el.addEventListener("change",()=>{if(step>=2||el.id==="measure")render();}));
  $("eli5-toggle").addEventListener("change",e=>{eli5=e.target.checked;render();});
  $("load-demo").addEventListener("click",()=>{
    const demo=eli5?easy.demo:{unit:"Service Delivery Unit (fictional)",measure:"Vulnerability remediation",question:"Do repeated remediation delays justify a local process improvement or enterprise support?",owner:"Measurement Program Lead",numerator:"37",denominator:"100",observed:"2026-11-15",source:"Assessment platform",scope:"verified",coverage:"limited",urgent:"no",persistent:"yes",impact:"unknown",authority:"unknown",context:"Example only. Twelve priority-system findings need validation and coverage is incomplete; cause and impact not yet confirmed.",action:"Validate asset scope and remediation bottlenecks with the Reporting Unit.",actionOwner:"Reporting Unit service owner",review:"2026-12-15",verify:"Recheck eligible coverage and overdue trend after scope reconciliation."};
    fields.forEach(id=>{if(id in demo) $(id).value=demo[id];});
    $("demo-banner").hidden=false;
    $("demo-banner").textContent=eli5?"MADE-UP EXAMPLE: 10 computers were checked. Protection works on 7. Let’s find out what to do about the other 3.":"FICTIONAL EXAMPLE LOADED: These are not live measurements.";
    step=2;render();
  });
  $("reset").addEventListener("click",()=>{if(!confirm("Clear the current unsaved example?"))return; fields.forEach(id=>{const el=$(id);el.selectedIndex!==undefined && el.tagName==="SELECT"?el.selectedIndex=0:el.value="";});$("demo-banner").hidden=true;step=0;render();});
  $("export").addEventListener("click",()=>{
    const d=getData();const packet={notice:"PROTOTYPE ONLY — user-entered, not independently verified or approved",schema:"report-the-reporter-demo-v1",exported_at:new Date().toISOString(),evidence_check:validity(d),suggested_route:route(d),inputs:d,briefing:eli5?easy.briefing(d,validity(d),route(d)):brief(d),presentation_mode:eli5?"plain_language":"standard"};
    const blob=new Blob([JSON.stringify(packet,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="decision-packet-demo.json";document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
  });
  $("print").addEventListener("click",()=>window.print());
  render();
})();