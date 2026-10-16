/* login.js — User ID = data/student.js এর id; password: data/config.js এ demoPassword (খালি থাকলে যেকোনো password) */
(function(){
  const C=DATA.config,S=DATA.student, $=(i)=>document.getElementById(i);
  $('uid').value=S.id;
  $('eye').onclick=()=>{const p=$('pw');p.type=p.type==='password'?'text':'password';};
  $('alx').onclick=()=>{$('al').hidden=true;};
  $('f').onsubmit=(e)=>{
    e.preventDefault();
    const okId=$('uid').value.trim()===S.id, okPw=C.demoPassword?$('pw').value===C.demoPassword:$('pw').value.length>0;
    if(!okId||!okPw){$('al').hidden=false;return;}
    sessionStorage.setItem('smuct_auth','1'); location.href='pages/dashboard.html';
  };
})();
