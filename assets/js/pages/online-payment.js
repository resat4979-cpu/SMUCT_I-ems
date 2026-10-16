/* online-payment.js — Step 1 (amount বাছাই) → Step 2 (summary + bKash demo) */
(function(){
  const D=DATA,$=(i)=>document.getElementById(i);
  const _s=D.calc.summary(D.config.currentSemester), P={midtermDue:Math.max(0,-_s.mid),finalDue:Math.max(0,-_s.end),advance:Math.max(0,_s.end)};
  const O=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const T=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  const u=(n)=>{let s=[];if(n>=100){s.push(O[Math.floor(n/100)]+' Hundred');n%=100;}if(n>=20)s.push(T[Math.floor(n/10)]+(n%10?'-'+O[n%10]:''));else if(n>0)s.push(O[n]);return s.join(' ');};
  function words(n){n=Math.floor(n);if(!n)return 'Zero';let o=[];[[10000000,'Crore'],[100000,'Lakh'],[1000,'Thousand']].forEach(([d,w])=>{if(n>=d){o.push(u(Math.floor(n/d))+' '+w);n%=d;}});if(n)o.push(u(n));return o.join(' ');}
  $('ph').src=D.student.photo; $('nm').textContent=D.student.name; $('sid').textContent='ID: '+D.student.id;
  const card=(c,ic,t,v,col,bg)=>`<div style="background:#fff;border:1px solid #e3e6f0;border-top:4px solid ${col};border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.08)">
    <div style="padding:14px 16px;display:flex;gap:12px;align-items:center;position:relative"><span style="width:40px;height:40px;border-radius:9px;background:${bg};color:${col};display:grid;place-items:center;font-size:18px"><i class="fa-solid ${ic}"></i></span>
    <div><div style="color:${col};font-weight:700">${t}</div><div style="font-size:21px;font-weight:700;color:${col}">${fmt(v)}</div></div><b style="position:absolute;right:18px;top:16px;color:${col};font-size:18px">&#2547;</b></div>
    <div style="background:${bg};padding:8px 14px;font-size:11px;color:#666">${words(v)} Taka Only.</div></div>`;
  $('stats').innerHTML=card(0,'fa-money-bill-1','Midterm Due',P.midtermDue,'#4457d4','#e8ebfb')+card(0,'fa-book','Final Term Due',P.finalDue,'#e0407e','#fdeaf1')+card(0,'fa-chart-line','Advance',P.advance,'#22b45e','#e5f6ea');
  D.payments.semesters.slice().reverse().forEach(s=>$('sem').add(new Option(s,s))); $('sem').value=D.config.currentSemester;
  const rows=[['mid','Pay Midterm Due <small>(+Previous)</small>',P.midtermDue],['fin','Pay Final Due <small>(+Previous+Midterm)</small>',P.finalDue],['oth','Pay Other Amount',null]];
  $('opts').innerHTML=rows.map(r=>`<tr><td style="width:60%"><label style="display:flex;gap:10px;align-items:center;font-weight:700"><input type="checkbox" value="${r[0]}" ${r[2]===0?'disabled':''}> ${r[1]}</label></td><td style="text-align:center;font-weight:700">${r[2]===null?'':fmt(r[2])+' &#2547;'}</td></tr>`).join('');
  const boxes=[...document.querySelectorAll('#opts input')];
  boxes.forEach(b=>b.onchange=()=>{boxes.forEach(x=>{if(x!==b)x.checked=false});$('next').disabled=!b.checked;$('next').style.background=b.checked?'#4aa832':'#8dc77b';});
  $('next').onclick=()=>{
    const k=boxes.find(b=>b.checked).value, amt=k==='fin'?P.finalDue:k==='mid'?P.midtermDue:0;
    $('step2').innerHTML=`<table class="kv"><tr><td>Semester</td><td>${$('sem').value}</td></tr><tr><td>Payment Type</td><td>${k==='fin'?'Final Due':k==='mid'?'Midterm Due':'Other Amount'}</td></tr>
     <tr><td>Payable Amount</td><td><input id="amt" type="number" min="1" value="${amt||''}" style="width:130px;padding:4px"> &#2547;</td></tr></table>
     <div style="padding:10px 0;text-align:center"><button class="btn" style="background:#d6126e;padding:8px 20px" id="pay">Pay with bKash</button></div>`;
    $('pay').onclick=()=>alert('Demo only — এখানে আসল bKash payment gateway যুক্ত করতে হবে ('+fmt($('amt').value||0)+' BDT).');
  };
})();
