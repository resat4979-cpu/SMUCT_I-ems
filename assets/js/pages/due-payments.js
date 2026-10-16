/* due-payments.js — 4টা ট্যাব। সব সংখ্যা data/payments.js (DATA.calc) থেকে নিজে হিসাব হয় */
(function(){
  const D=DATA,P=D.payments,K=D.calc,$=(i)=>document.getElementById(i);
  $('note').textContent=D.config.accountsNote;
  P.semesters.slice().reverse().forEach(s=>$('sem').add(new Option(s,s))); $('sem').value=D.config.currentSemester;
  const row=(a,b,due)=>`<div class="row"><span>${a}:</span><span>${due?`<span class="chip due">${b}</span>`:b}</span></div>`;
  const dueAdv=(label,v)=>row(label+(v<0?' Due':' Advance'),fmt(Math.abs(v)),v<0);
  const tmpl='<div class="alert danger" style="margin:8px 10px"><i class="fa-solid fa-triangle-exclamation"></i> <b>Attention Please!</b> {{ErrorMsg}}</div>';
  function summary(){
    const s=K.summary($('sem').value), t=K.totals();
    $('s1').innerHTML=row('Previous '+(s.prev<0?'Due':'Advance'),fmt(Math.abs(s.prev)))+row('This Semester Bill',fmt(s.bill))+dueAdv('Midterm',s.mid)+dueAdv('Final Term',s.end)+'<hr style="margin:4px 14px;border:0;border-top:1px solid #333">'+row('This Semester Paid',fmt(s.paid))+dueAdv('This Semester',s.end);
    $('s2').innerHTML=row('Total Bill (Debit)',fmt(t.bill))+row('Total Paid (Credit)',fmt(t.paid))+row('Over All Due on Bill',fmt(t.due),t.due>0);
  }
  function flash(){   // ভিডিওর মতো: পেজ খোলার মুহূর্তে raw {{template}} দেখা যায় (config.showTemplateFlash)
    $('s1').innerHTML=tmpl+'<div style="padding:4px 14px;font-size:12px"><b>Previous :</b><br><b>This Semester Bill:</b> <span style="float:right">{{SemesterBill.SemesterBill |number: 2}}</span><br><b>Midterm :</b><br><b>Final Term :</b></div>';
    $('s2').innerHTML=tmpl+'<div style="padding:4px 14px;font-size:12px"><b>Total Bill (Debit):</b><br><b>Total Paid (Credit):</b><br><b>Over All on Bill:</b></div>';
    setTimeout(summary,450);
  }
  D.config.showTemplateFlash?flash():summary(); $('ref').onclick=summary; $('sem').onchange=summary;
  const lines=(i)=>i.lines.map(l=>`<div class="sub ${l[1]?'red':''}">${l[0]}</div>`).join('');
  const foot=(cols)=>{const t=K.totals();return [['Current Bill',t.bill],['Total Paid',t.paid],['Current Due/Balance',t.due]].map(r=>`<tr class="tot"><td colspan="${cols-1}">${r[0]}</td><td class="num"><b>${fmt(r[1])}</b></td></tr>`).join('');};
  const gsum=(g)=>g.items.reduce((a,i)=>a+i.a,0);
  $('cr').innerHTML='<tr><th style="width:15%">Date</th><th style="width:25%">Payslip ID</th><th>Transaction</th><th style="width:10%">Amount</th></tr>'+
    P.credits.map(g=>`<tr class="grp"><td colspan="4">${g.sem} (${fmt(gsum(g))})</td></tr>`+g.items.map(i=>`<tr><td>${i.d}</td><td>${i.id}</td><td><b>${i.t}</b>${lines(i)}</td><td class="num">${fmt(i.a)}</td></tr>`).join('')).join('')+foot(4);
  $('db').innerHTML='<tr><th style="width:14%">Date</th><th>Transaction</th><th style="width:10%">Amount</th></tr>'+
    P.bills.map(g=>`<tr class="grp"><td colspan="3">${g.sem} (${fmt(gsum(g))})</td></tr>`+g.items.map(i=>`<tr><td>${i.d}</td><td><b>${i.t}</b>${lines(i)}</td><td class="num">${fmt(i.a)}</td></tr>`).join('')).join('')+foot(3);
  $('load').onclick=()=>{
    $('load').parentElement.style.padding='0';$('load').remove();
    $('ol').innerHTML='<div class="table-wrap"><table class="tbl pay"><tr><th>SN</th><th>Particular Name</th><th>Semester</th><th>Amount</th><th>Gateway Charge</th><th>Is Paid</th><th>Remark</th><th>Payment Gateway</th><th>Initiate Time</th><th>Trans Status</th><th>Action</th></tr>'+
      P.online.map((r,i)=>`<tr class="${r[8]==='Success'?'':'fail'}"><td class="c">${i+1}</td><td>${r[0]}</td><td>${r[1]}</td><td class="num">${r[2]}</td><td>${r[3]}</td><td class="c">${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td><td>${r[7]}</td><td>${r[8]}</td><td class="c">${r[8]==='Success'?'<a class="btn ps" href="#" data-noload><i class="fa-regular fa-eye"></i> Payslip</a>':'<a class="btn ps" href="#" data-noload><i class="fa-solid fa-rotate"></i></a>'}</td></tr>`).join('')+'</table></div>';
  };
  document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#tabs button,.tabpane').forEach(x=>x.classList.remove('on'));b.classList.add('on');$(b.dataset.t).classList.add('on');});
})();
