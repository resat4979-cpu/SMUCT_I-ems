/* profile.js — Profile পেজ। তথ্য বদলাতে data/student.js এডিট করুন */
(function(){
  const S=DATA.student,$=(i)=>document.getElementById(i),c=S.contact;
  $('ph').src=S.photo; $('nm').textContent=S.name; $('id').textContent=S.id; $('pr').textContent=S.program; $('bt').textContent=S.batch;
  const kv=(rows)=>'<table class="kv">'+rows.map(r=>`<tr><td>${r[0]}:</td><td${r[2]?' style="color:#d0021b;font-weight:700"':''}>${r[1]}</td></tr>`).join('')+'</table>';
  $('p1').innerHTML=`<h3 style="margin:8px 0 4px;font-size:14px;font-weight:600">Contact Information</h3>
   <table class="kv" style="margin-bottom:10px"><tr><td style="width:150px">Mobile:</td><td>${c.mobile} <a class="btn green" href="#" data-noload>Change Mobile</a> <i style="font-size:10px">[*Used for Send Important Notification]</i></td></tr>
   <tr><td>Email:</td><td>${c.email} <a class="btn green" href="#" data-noload>Change Email</a> <i style="font-size:10px">[*Used for Recover EMS Password &amp; Send Important Notification/Alert]</i></td></tr>
   <tr><td>Present Address:</td><td>${c.presentAddress}</td></tr><tr><td>Permanent Address:</td><td>${c.permanentAddress}</td></tr></table>
   <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px"><div><h3 style="margin:6px 0 4px;font-size:14px;font-weight:600">Personal Information</h3>${kv(S.personal)}</div>
   <div><h3 style="margin:6px 0 4px;font-size:14px;font-weight:600">Parents Information</h3>${kv(S.parents)}</div></div>`;
  $('p2').innerHTML='<table class="tbl"><tr><th>Exam</th><th>Group</th><th>Board</th><th>Year</th><th>GPA</th></tr>'+S.previousEducation.map(e=>`<tr><td class="c">${e.exam}</td><td class="c">${e.group}</td><td class="c">${e.board}</td><td class="c">${e.year}</td><td class="c">${e.gpa}</td></tr>`).join('')+'</table>';
  $('p3').innerHTML=kv(S.academic);
  document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('#tabs button,.tabpane').forEach(x=>x.classList.remove('on'));
    b.classList.add('on'); $(b.dataset.t).classList.add('on');});
})();
