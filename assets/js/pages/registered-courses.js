/* registered-courses.js — লেখা: data/registration.js, কোর্স: data/courses.js */
(function(){
  const D=DATA,R=D.registration,$=(i)=>document.getElementById(i),sem=D.semesters.find(s=>s.name===D.config.currentSemester);
  $('rules').innerHTML=R.rules.map(r=>`<div>${r}</div>`).join(''); $('proc').innerHTML=R.procedure.map(r=>`<div>${r}</div>`).join('');
  $('contacts').textContent=R.contacts; $('office').textContent='Registration Office: - '+R.office;
  $('t1').textContent='Course Registration for Semester: '+sem.name; $('t2').textContent='Registered Course for '+sem.name;
  $('tb').innerHTML='<thead><tr><th style="width:50px">SN</th><th>Course</th><th style="width:170px">Status</th></tr></thead><tbody>'+
    sem.courses.map((c,i)=>`<tr><td class="c" style="vertical-align:middle">${i+1}</td><td><b>${c.code}: ${c.title}</b><div style="font-size:11.5px">${sem.year} <i>Cr.Hr: ${c.credit.toFixed(2)} , ${c.type}, Core</i></div></td><td class="c" style="vertical-align:middle">Fresh Registration</td></tr>`).join('')+'</tbody>';
})();
