"use strict";
// Optional presentation layer. Keep source inputs, evidence gates and authority rules unchanged.
window.RTR_ELI5=(()=>{
  const $=id=>document.getElementById(id);
  const raw=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const steps=["See the big picture","What are we checking?","Do the numbers make sense?","Who should help?","Explain it clearly"];
  const titles=["From a problem to a helpful decision","Start with one simple question","Check what the numbers REALLY mean","Should someone act, or do we need more information?","Tell the same story in everyday words"];
  const intros=[
    "Imagine a team with 10 computers. Protection works on 7. Before anyone panics or spends money, we check what happened to the other 3.",
    "Which team are we talking about? What do we want to know? Who checks the facts?",
    "A number is only useful when we know exactly what we counted, when it was checked, and what might be missing.",
    "Some things need emergency help. Some can be fixed by a team. Others just need better information.",
    "Show people the details they need for THEIR decision. Never change the facts."
  ];
  const labels={
    unit:["Which team are we talking about?","A Reporting Unit is just a team, department or division.","e.g. Example Office Team"],
    measure:["What kind of thing are we checking?","Choose what you want to find out."],
    question:["What question do we want to answer?","What should we know before deciding?","Are all our computers protected?"],
    owner:["Who double-checks the numbers?","This person checks the facts. They may not be the one who fixes things.","e.g. Security Review Team"],
    numerator:["How many passed the check?","This means the number that meets our rule.","e.g. 7"],
    denominator:["How many should be checked?","Count the whole group, even if some were missed by a tool.","e.g. 10"],
    observed:["When did we last check?","A report from yesterday isn't necessarily today's status."],
    source:["Where did this information come from?","For example, a tool that checks your computers."],
    scope:["Are we checking the right group?","We should know which team and computers belong in this check."],
    coverage:["Is the information good enough to use?","This is about the QUALITY of our data, not how safe the team is."],
    urgent:["Is there an emergency right now?","An emergency needs the normal response team right away."],
    persistent:["Has this kept happening?","One bad day is different from an ongoing problem."],
    impact:["Could this hurt important work?","The people who run that work should help answer."],
    authority:["Who can make the decision?","Pick whoever has permission to approve a next step."],
    context:["Anything else we should know?","Explain anything missing, old or uncertain.","The 3 computers need a closer look."],
    action:["What should someone do next?","Name an actual task.","Have IT check the 3 computers."],
    actionOwner:["Who will do it?","Choose a person or team responsible.","e.g. IT Manager"],
    review:["When will we check again?","Follow-up matters: otherwise this is just another dashboard."],
    verify:["How will we tell whether it worked?","Check the result again after the task is done.","Check the same 10 computers again."]
  };
  const dynamic={
    "Protective control coverage":["How many computers have confirmed working protection?","How many computers should have it?"],
    "Vulnerability remediation":["How many security problems are overdue?","How many problems have a deadline?"],
    "Security telemetry coverage":["How many systems send useful security logs?","How many should send them?"],
    "Other":["How many items meet the rule?","How many items are in the whole group?"]
  };
  const optionLabels={
    measure:["Fixing security problems","Working computer protection","Getting useful security logs","Something else"],
    source:["Tool that checks problems","Tool that watches for trouble","List of equipment","Tool that checks security settings","A person checked it"],
    scope:["Haven't checked yet","Yes, right group","This check doesn't apply"],
    coverage:["We don't know yet","Some information is missing","We have enough reliable information"],
    urgent:["Not sure","Yes, get emergency help","No emergency known"],
    persistent:["Not sure","Yes, it keeps happening","No, it was a one-time thing"],
    impact:["Haven't asked","Yes, important work could be affected","No important impact found"],
    authority:["Don't know yet","The team's manager","Big-picture leadership","The risk team"]
  };
  const selectors={
    ".brand small":"OPTIONAL PRACTICE TOOL",
    ".nav-caption":"THE FIVE EASY STEPS",
    ".side-foot p":"This is a practice page that helps you understand the program, one step at a time.",
    "#load-demo":"Load easy 10-computer example",
    "#reset":"Start over",
    "#step-0 .flow-cell:nth-child(1) .pill":"1 · COUNT",
    "#step-0 .flow-cell:nth-child(1) strong":"See the problem",
    "#step-0 .flow-cell:nth-child(1) p":"What did we find?",
    "#step-0 .flow-cell:nth-child(3) .pill":"2 · CHECK",
    "#step-0 .flow-cell:nth-child(3) strong":"Make sure it's true",
    "#step-0 .flow-cell:nth-child(3) p":"Is anything missing or old?",
    "#step-0 .flow-cell:nth-child(5) .pill":"3 · DECIDE",
    "#step-0 .flow-cell:nth-child(5) strong":"Find who can help",
    "#step-0 .flow-cell:nth-child(5) p":"Who can act?",
    "#step-0 .flow-cell:nth-child(7) .pill":"4 · RECHECK",
    "#step-0 .flow-cell:nth-child(7) strong":"Did it get better?",
    "#step-0 .flow-cell:nth-child(7) p":"Check again after the fix.",
    "#step-0 .card:nth-child(1) .card-label":"WHY USE IT?",
    "#step-0 .card:nth-child(1) h2":"Turns numbers into next steps",
    "#step-0 .card:nth-child(1) p":"A number by itself doesn't tell the boss what to do. This helps us explain what happened and what can be done.",
    "#step-0 .card:nth-child(2) .card-label":"WHAT IT CAN'T DO",
    "#step-0 .card:nth-child(2) h2":"It doesn't approve anything",
    "#step-0 .card:nth-child(2) p":"This doesn't check real computers or decide whether people are safe. A real person must verify the facts.",
    "#step-0 .notice":"PRIVACY: Use pretend data here. This page doesn't send your answers to a server. You can choose to save a copy.",
    "#step-1 .section-top .pill":"01 · ASK",
    "#step-1 .section-top h2":"What do we want to know?",
    "#step-1 .section-top p":"Pick the team, the question, and the person who will check the answer.",
    "#step-1 .notice":"Reporting Unit = a team or department. Organization = the bigger group it's part of.",
    "#step-2 .section-top .pill":"02 · CHECK",
    "#step-2 .section-top h2":"Can we trust what we counted?",
    "#step-2 .section-top p":"Example: 7 out of 10 computers have working protection. What about the other 3? Are they broken, or do we still need to check?",
    "#step-3 .section-top .pill":"03 · ROUTE",
    "#step-3 .section-top h2":"Who should do something?",
    "#step-3 .section-top p":"Check for emergencies, see whether it keeps happening, then find the right decision-maker.",
    "#step-4 .section-top .pill":"04 · EXPLAIN",
    "#step-4 .section-top h2":"Explain the same facts to different people.",
    "#step-4 .section-top p":"Technical staff need details. Team managers need next steps. Big-picture leaders need to know what they must decide.",
    "#step-4 .outputs .card:nth-child(1) .pill":"TECH STAFF",
    "#step-4 .outputs .card:nth-child(1) h3":"What did we count?",
    "#step-4 .outputs .card:nth-child(2) .pill":"PROGRAM",
    "#step-4 .outputs .card:nth-child(2) h3":"What do we really know?",
    "#step-4 .outputs .card:nth-child(3) .pill":"TEAM MANAGER",
    "#step-4 .outputs .card:nth-child(3) h3":"What can the team do?",
    "#step-4 .outputs .card:nth-child(4) .pill":"ORGANIZATION LEADERS",
    "#step-4 .outputs .card:nth-child(4) h3":"Do we need a bigger decision?",
    "#step-4 .notice":"This is practice, not an official decision. Someone still needs to verify the information and approve any action.",
    "#export":"Save practice answers",
    "#print":"Print easy explanation"
  };
  let original=null;
  const init=()=>{
    original={
      fields:Object.fromEntries(Object.keys(labels).map(id=>{
        const el=$(id),l=el.closest("label.field");
        return [id,{name:l.firstChild.nodeValue,help:l.querySelector("small")?.textContent??"",placeholder:el.getAttribute("placeholder"),options:el.tagName==="SELECT"?Array.from(el.options,o=>o.textContent):null}];
      })),
      static:Object.fromEntries(Object.keys(selectors).map(sel=>[sel,document.querySelector(sel)?.innerHTML??null]))
    };
  };
  const apply=(on,measure)=>{
    if(!original)init();
    Object.entries(selectors).forEach(([sel,plain])=>{
      const el=document.querySelector(sel),saved=original.static[sel];
      if(!el || saved===null)return;
      if(on)el.textContent=plain;else el.innerHTML=saved;
    });
    Object.entries(labels).forEach(([id,plain])=>{
      const el=$(id),l=el.closest("label.field"),old=original.fields[id];
      l.firstChild.nodeValue=on?plain[0]:old.name;
      const help=l.querySelector("small");if(help)help.textContent=on?plain[1]:old.help;
      const ph=on?plain[2]:old.placeholder;
      if(ph)el.setAttribute("placeholder",ph);else el.removeAttribute("placeholder");
      if(el.tagName==="SELECT") Array.from(el.options).forEach((o,i)=>o.textContent=on?(optionLabels[id]?.[i]??old.options[i]):old.options[i]);
    });
    if(on){
      const [a,b]=dynamic[measure]||dynamic.Other;
      $("numerator").closest("label").firstChild.nodeValue=a;
      $("denominator").closest("label").firstChild.nodeValue=b;
    }
    $("eli5-help").hidden=!on;
    $("eli5-toggle-state").textContent=on?"On":"Off";
    $("eli5-toggle").checked=on;
    document.body.classList.toggle("eli5",on);
  };
  const count=d=>{
    const a=Number(d.numerator),b=Number(d.denominator);
    if(d.numerator===""||d.denominator===""||!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<1||a>b)return "Fill in both count boxes to see the picture.";
    const thing=d.measure==="Protective control coverage"?"computers":d.measure==="Security telemetry coverage"?"systems":d.measure==="Vulnerability remediation"?"security problems":"items";
    const result=d.measure==="Protective control coverage"?"have confirmed working protection":d.measure==="Security telemetry coverage"?"send usable security logs":d.measure==="Vulnerability remediation"?"are overdue":"meet the check";
    return a+" of "+b+" "+thing+" "+result+". "+(b-a)+" did not show as meeting the check. That does NOT automatically mean they are unsafe.";
  };
  const visual=d=>{
    const a=Number(d.numerator),b=Number(d.denominator);
    if(d.numerator===""||d.denominator===""||!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<1||a>b)return raw(count(d));
    const bar=b<=20?'<div class="count-chips" aria-hidden="true">'+Array.from({length:b},(_,i)=>'<span class="count-chip '+(i<a?"met":"unknown")+'"></span>').join("")+'</div>':'<div class="count-track"><span style="width:'+(100*a/b).toFixed(1)+'%"></span></div>';
    return '<strong>SEE THE COUNT: '+a+' OUT OF '+b+'</strong>'+bar+'<p>'+raw(count(d))+'</p><small>Green = confirmed meeting the check. Amber = needs checking or fixing. This is <b>not</b> an overall security score.</small>';
  };
  const validity=v=>({
    unready:"We don't have the basics yet. Fill in the team, question, person responsible, counts and date.",
    inapplicable:"This check does not apply to this team. Don't count it against them.",
    limited:"Some facts are missing or uncertain. Someone needs to double-check before we tell leaders this is a sure thing.",
    reviewed:"The answers look complete enough to discuss. This practice page has NOT verified the real-world facts."
  }[v.state]||"Please double-check this information.");
  const route=r=>({
    "Do not score — not applicable":"This check doesn't apply here. Don't give this team a bad score.",
    "Evidence clarification":"We need to check the facts before making a big claim.",
    "Immediate operational escalation":"You marked this urgent. Get the normal emergency response team involved now.",
    "Urgency must be assessed":"Ask someone qualified whether this is an emergency first.",
    "Continue monitoring":"Keep watching. A one-time problem isn't automatically a reason to buy something.",
    "Establish historical trend":"See whether the problem keeps happening.",
    "Request mission context":"Ask the team what important work this could affect.",
    "Monitor with context":"No big impact has been confirmed yet. Keep an eye on it.",
    "Reporting Unit action":"The team manager can likely decide the next step.",
    "Enterprise/shared-service decision":"Someone in the bigger organization may need to make a shared decision.",
    "Risk governance assessment":"The risk team needs to review this.",
    "Identify authorized decision-maker":"First find out who's allowed to make the decision."
  }[r.label]||"Ask the right owner to review.");
  const briefing=(d,v,r)=>{
    const team=d.unit||"the team",what=count(d),task=d.action||"choose the next step",owner=d.actionOwner||"someone to be named";
    return {
      technical:team+": "+what+" Date checked: "+(d.observed||"not provided")+". These are not live numbers.",
      program:"Do we trust this? "+validity(v)+" Has it happened before? "+({yes:"Yes.",no:"No.",unknown:"Not sure yet."}[d.persistent]||"Not sure.")+" Notes: "+(d.context||"None yet."),
      unit:"The question: "+(d.question||"What needs attention?")+" Suggested next step: "+route(r)+" Action to consider: "+task+".",
      enterprise:"Does top leadership need to step in? "+route(r)+" Proposed action owner: "+owner+". Check again on "+(d.review||"a date not set yet")+". We will know it worked by: "+(d.verify||"checking the result again")+". This is a draft, not an approved decision."
    };
  };
  const demo={
    unit:"Example Office Team (made up)",measure:"Protective control coverage",
    question:"Are all 10 work computers running working security protection?",owner:"Security Review Team",
    numerator:"7",denominator:"10",observed:"2026-11-15",
    source:"Control management platform",scope:"verified",coverage:"adequate",
    urgent:"no",persistent:"yes",impact:"confirmed",authority:"unit",
    context:"Made-up story: all 10 computers were checked. Protection was confirmed working on 7. The other 3 did not pass. This also happened in two earlier weekly checks. The team uses these computers for everyday work.",
    action:"Have IT check and fix protection on the 3 computers.",actionOwner:"Local IT Manager",
    review:"2026-12-01",verify:"Check those same 10 computers again. All 10 should show working protection."
  };
  return {steps,titles,intros,apply,visual,validity,route,briefing,demo};
})();
