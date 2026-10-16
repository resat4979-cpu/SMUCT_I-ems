/* faculty-evaluation.js — Faculty Evaluation Start বাটনের আসল ফর্ম এখানে যুক্ত করুন */
(function(){
  const D=DATA,$=(i)=>document.getElementById(i);
  D.semesters.slice().reverse().forEach(s=>$('sem').add(new Option(s.name,s.name))); $('sem').value='Summer 2026 (4M)';
  function r(){const v=$('sem').value;$('h').textContent=v;$('a').innerHTML='Student ID: <b>'+D.student.id+'</b>';$('b').innerHTML='Name: '+D.student.name;$('c').innerHTML='Result Semester: '+v;}
  $('sem').onchange=r;$('rf').onclick=r;r();
  $('go').onclick=()=>alert('Demo — evaluation form এখানে খুলবে।');
})();
