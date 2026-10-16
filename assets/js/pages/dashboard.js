/* dashboard.js — greeting, ৯টা কার্ড, Registered Courses গ্রিড */
(function(){
  const D=DATA,S=D.student,$=(i)=>document.getElementById(i);
  const h=new Date().getHours();
  $('hi').textContent='Good '+(h<12?'Morning':h<15?'Noon':h<18?'Afternoon':'Evening')+',';
  $('nm').textContent=S.name; $('sid').textContent='Student ID: '+S.id; $('av').src=S.photo;
  const bkash='<svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5l11 3 8-5-4 9 4 4-10 1-4 7-1-9z"/></svg>';
  $('cards').innerHTML=D.dashboardCards.map(c=>`
    <div class="dcard ${c.hot?'hot':''}" style="--c:${c.color}">${c.badge?`<span class="badge">${c.badge}</span>`:''}
      <div class="top"><div class="ico">${c.icon==='bkash'?bkash:`<i class="fa-solid ${c.icon}"></i>`}</div><div><h3>${c.title}</h3><p>${c.desc}</p></div></div>
      <a class="go" href="${c.href}">${c.btn} <i class="fa-solid fa-arrow-right"></i></a></div>`).join('');
  const sem=$('sem'); D.semesters.slice().reverse().forEach(s=>sem.add(new Option(s.name,s.name)));
  sem.value=D.config.currentSemester;
  function render(){
    const s=D.semesters.find(x=>x.name===sem.value);
    $('courses').innerHTML=!s.courses.length?'<p style="color:#888;margin:6px">No registered course found for this semester.</p>':s.courses.map((c,i)=>{
      const st=D.cardStyles[i%D.cardStyles.length], q=`course-pane.html?code=${c.code}&tab=`;
      const teach=c.teacher?`<div class="lb"><i class="fa-solid fa-user"></i>Course Teacher</div>`+c.teacher.map((t,k)=>`<div class="tx">${k+1}. ${t}.</div>`).join(''):'';
      const rt=c.routine?`<div class="lb"><i class="fa-regular fa-calendar"></i>Class Routine</div>`+c.routine.map(r=>`<div class="rt">${r.day} ${r.time}</div><div class="rm">${r.room}</div>`).join(''):'';
      return `<div class="ccard" style="--c:${st.c}"><div class="bd"><div class="ci"><i class="fa-solid ${st.i}"></i></div>
        <div class="code">${c.code}</div><h4>${c.title}</h4><div class="meta">${D.config.department} (${s.name})</div>
        <div class="st">STATUS: <span class="chip soft">Fresh Registration</span><span class="chip soft">Valid</span></div>${teach}${rt}</div>
        <div class="ft"><a href="${q}attendance"><i class="fa-regular fa-pen-to-square"></i>Attendances</a><a href="${q}materials"><i class="fa-regular fa-copy"></i>Materials</a><a href="${q}notices"><i class="fa-solid fa-bullhorn"></i>Notices</a></div></div>`;
    }).join('');
  }
  sem.onchange=render; render();
})();
