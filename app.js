document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
const dialog=document.querySelector('#lightbox');
const photos=Array.from(document.querySelectorAll('.zoom img'));
let photoIndex=0;
function showPhoto(index){
  if(!photos.length)return;
  photoIndex=(index+photos.length)%photos.length;
  const original=photos[photoIndex];
  const image=dialog.querySelector('img');
  image.src=original.src;
  image.alt=original.alt;
  dialog.querySelector('p').textContent=`${photoIndex+1} / ${photos.length} · ${original.alt}`;
}
document.querySelectorAll('.zoom').forEach((button,index)=>button.addEventListener('click',()=>{showPhoto(index);dialog.showModal()}));
dialog.querySelector('.photo-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
dialog.querySelector('.photo-next').addEventListener('click',()=>showPhoto(photoIndex+1));
dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(photoIndex-1)}
  if(event.key==='ArrowRight'){event.preventDefault();showPhoto(photoIndex+1)}
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.video-load').forEach(button=>button.addEventListener('click',()=>{const box=button.parentElement;const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+box.dataset.video;frame.title='Výukové video: technika hodu diskom';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;box.replaceChildren(frame)}));

