/* course-report.js — সব সেমিস্টারের কোর্স + credit যোগফল (data/courses.js থেকে নিজে হিসাব করে) */
(function(){
  const D=DATA,S=D.student,$=(i)=>document.getElementById(i),sems=D.semesters.filter(s=>s.courses.length);
  const total=sems.reduce((a,s)=>a+s.courses.reduce((x,c)=>x+c.credit,0),0);
  const cell=(a,b)=>`<td style="width:22%;font-weight:400;background:#fff">${a}</td><td style="width:2%">:</td><td style="width:26%">${b}</td>`;
  $('info').innerHTML=`<tr>${cell('Student ID',S.id)}${cell('Required Credit / Semester',D.config.requiredCredit)}</tr><tr>${cell('Name',S.name)}${cell('Valid Registration (Payable) Cr.',total.toFixed(2))}</tr>
   <tr>${cell('Class Roll No',S.id)}${cell('Dropped Registration (Payable) Cr.','0.00')}</tr><tr>${cell('Date of Birth',S.personal[1][1])}${cell('Total Registered (Valid+Drop) Cr.',total.toFixed(2))}</tr>
   <tr>${cell('Program',S.program)}${cell('Total Registered Semester',sems.length+' / 12')}</tr>`;
  $('rep').innerHTML=sems.map(s=>{const cr=s.courses.reduce((a,c)=>a+c.credit,0);
    return `<div style="text-align:center;font-weight:700;font-size:13px;margin-top:12px;border:1px solid #e7e9f2;border-bottom:0;padding:4px">${s.name}</div>
    <table class="tbl" style="font-size:10.5px"><tr><th style="width:12%">Course Code</th><th>Course Title</th><th style="width:16%">Credit Hours</th><th style="width:16%">Status</th></tr>`+
    s.courses.map(c=>`<tr><td class="c">${c.code}</td><td>${c.title}</td><td class="c">${c.credit}</td><td class="c">Fresh Registration</td></tr>`).join('')+
    `<tr><td colspan="4" class="num"><b>${s.name} : Registered Credit: ${cr.toFixed(2)} | Valid Credit: ${cr.toFixed(2)}</b></td></tr></table>`;}).join('');
})();
