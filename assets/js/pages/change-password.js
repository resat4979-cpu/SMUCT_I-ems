/* change-password.js — rule check + strength bar (demo: password আসলে সেভ হয় না) */
(function(){
  const $=(i)=>document.getElementById(i);
  const rules=[/[A-Z]/,/[a-z]/,/[0-9]/,/[!@#$%^&*?_~]/,/^.{8,}$/];
  function check(){
    const v=$('np').value; let n=0;
    rules.forEach((r,i)=>{const ok=r.test(v);n+=ok;const e=$('r'+(i+1));e.className=ok?'ok':'bad';e.innerHTML=(ok?'&#10004;':'&#10006;')+e.innerHTML.slice(1);});
    $('bar').style.width=(n*20)+'%'; $('bar').style.background=n<3?'#e53935':n<5?'#f9a825':'#2e9e3f';
    const ready=n===5&&$('cur').value&&v===$('cp').value;
    $('save').disabled=!ready; $('save').classList.toggle('ready',ready);
    $('msg').textContent=$('cp').value&&v!==$('cp').value?'New password and confirm password do not match.':'';
  }
  ['cur','np','cp'].forEach(i=>$(i).oninput=check);
  $('f').onsubmit=(e)=>{e.preventDefault();$('msg').style.color='#16841f';$('msg').textContent='Password changed successfully (demo).';};
})();
