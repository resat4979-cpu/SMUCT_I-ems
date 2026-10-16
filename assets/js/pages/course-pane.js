/* course-pane.js — ?code=ENG-2301&tab=attendance। ডেটা: data/courses.js → DATA.attendance (rows খালি = "Not Found!") */
(function(){
  const D=DATA,$=(i)=>document.getElementById(i),q=new URLSearchParams(location.search);
  const sem=D.semesters.find(s=>s.name===D.config.currentSemester), code=q.get('code')||sem.courses[0].code;
  const c=sem.courses.find(x=>x.code===code)||sem.courses[0], at=D.attendance[c.code]||{classNo:'—',section:'A',syllabus:'',rows:[]};
  $('ct').textContent=c.code+' '+c.title; $('sm').textContent=sem.name;
  $('l').textContent='Class No: '+at.classNo+', Class Section: '+at.section+', Status: Open';
  $('r').textContent='Cr.Hr:'+c.credit.toFixed(2)+', Co.Hr:'+c.credit.toFixed(2)+', '+c.type+', Core, '+at.syllabus;
  const rows=at.rows, pr=rows.filter(r=>r[5]==='Present').length, chip=(t,k)=>`<span class="chip ${k}">${t}</span>`;
  $('attendance').innerHTML=!rows.length?'<div class="alert danger" style="border-radius:0"><i class="fa-solid fa-circle-xmark"></i> <b>Not Found!</b> There is no class Attendance in this Course.</div>':
   '<div class="table-wrap"><table class="tbl"><tr><th>Date</th><th>Day</th><th>Class Time</th><th>Exam<br>Term</th><th>Type</th><th>Status</th><th>Absent Reason</th><th>Late</th><th>Early<br>Left</th><th>Faculty Name</th></tr>'+
    rows.map(r=>`<tr><td class="c">${r[0]}</td><td class="c">${r[1]}</td><td class="c">${r[2]}</td><td class="c">${r[3]}</td><td class="c">${r[4]}</td><td class="c">${chip(r[5],r[5]==='Present'?'ok':'abs')}</td><td class="c">${r[6]}</td><td class="c">${chip(r[7],'ok')}</td><td class="c">${chip(r[8],'ok')}</td><td>${r[9]}</td></tr>`).join('')+
    `<tr><td colspan="2" class="c"><b>Total Class: ${rows.length}</b></td><td colspan="2" class="c"><b>Total Present: ${pr}</b></td><td colspan="3" class="c"><b>Total Absent: ${rows.length-pr}</b></td><td colspan="2" class="c"><b>Total Percentage: ${(pr/rows.length*100).toFixed(2)}</b></td><td><b>Mid Term: ${pr}/${rows.length} (${(pr/rows.length*100).toFixed(2)}%)</b><br><b>Final Term: 0%</b></td></tr></table></div>`;
  function show(t){document.querySelectorAll('#tabs button,.tabpane').forEach(x=>x.classList.remove('on'));document.querySelector(`#tabs [data-t=${t}]`).classList.add('on');$(t).classList.add('on');}
  document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>show(b.dataset.t)); show(q.get('tab')||'attendance');
})();
