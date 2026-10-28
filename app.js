document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
const dialog=document.querySelector('#lightbox');
document.querySelectorAll('.zoom').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.video-load').forEach(button=>button.addEventListener('click',()=>{const box=button.parentElement;const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+box.dataset.video;frame.title='Výukové video: technika hodu diskom';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;box.replaceChildren(frame)}));

