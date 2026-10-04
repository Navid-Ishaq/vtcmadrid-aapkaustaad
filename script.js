const buttons=[...document.querySelectorAll('[data-lang]')];
const navigation=document.querySelector('#navigation');
const toggle=document.querySelector('.menu-toggle');
function selectLanguage(lang){
 const label=labels[lang];
 document.documentElement.lang=lang;
 document.documentElement.dir=lang==='ur'?'rtl':'ltr';
 document.querySelectorAll('[data-page]').forEach(p=>p.hidden=p.dataset.page!==lang);
 buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 navigation.replaceChildren(...['course','exam','method','about','contact'].map((id,i)=>{const a=document.createElement('a');a.href='#'+id+'-'+lang;a.textContent=label.nav[i];return a;}));
 document.querySelector('.skip').textContent=label.skip;
 toggle.textContent=label.menu+' ☰';
 navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');
 document.title=(lang==='es'?'Preparación Examen VTC Madrid':lang==='hi-Latn'?'VTC Madrid Exam Ki Tayyari':lang==='ur'?'VTC Madrid · اردو':'VTC Madrid Exam Preparation')+' | Aap Ka Ustaad · AL-NOOR';
}
buttons.forEach(b=>b.addEventListener('click',()=>{selectLanguage(b.dataset.lang);if(location.hash)history.replaceState(null,'',location.pathname+location.search);}));
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.addEventListener('click',()=>{navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
selectLanguage('es');
