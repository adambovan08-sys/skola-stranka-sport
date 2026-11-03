(()=>{function init(){
document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});

const groups=Array.from(document.querySelectorAll('.nav-group'));
function setSubmenu(group,open){
 const button=group.querySelector('.submenu-toggle');
 const panel=group.querySelector('.submenu');
 button.setAttribute('aria-expanded',String(open));panel.hidden=!open;
}
function closeSubmenus(except){groups.forEach(group=>{if(group!==except)setSubmenu(group,false)})}
groups.forEach(group=>{
 const button=group.querySelector('.submenu-toggle');
 const panel=group.querySelector('.submenu');
 group.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){closeSubmenus(group);setSubmenu(group,true)}});
 group.addEventListener('pointerleave',event=>{if(event.pointerType==='mouse'&&!group.contains(document.activeElement))setSubmenu(group,false)});
 button.addEventListener('click',event=>{const open=event.pointerType==='mouse'||button.getAttribute('aria-expanded')!=='true';closeSubmenus(group);setSubmenu(group,open)});
 group.addEventListener('focusout',event=>{if(!group.contains(event.relatedTarget))setSubmenu(group,false)});
 group.addEventListener('keydown',event=>{
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();setSubmenu(group,false);button.focus()}
  if(event.key==='ArrowDown'&&event.target===button){event.preventDefault();closeSubmenus(group);setSubmenu(group,true);panel.querySelector('a').focus()}
 });
});
document.addEventListener('click',event=>{if(!event.target.closest('.nav-group'))closeSubmenus()});
toggle?.addEventListener('click',()=>{if(toggle.getAttribute('aria-expanded')==='false')closeSubmenus()});

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
dialog?.querySelector('.photo-prev')?.addEventListener('click',()=>showPhoto(photoIndex-1));
dialog?.querySelector('.photo-next')?.addEventListener('click',()=>showPhoto(photoIndex+1));
dialog?.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(photoIndex-1)}
  if(event.key==='ArrowRight'){event.preventDefault();showPhoto(photoIndex+1)}
});
dialog?.querySelector('.close')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.video-load').forEach(button=>button.addEventListener('click',()=>{const box=button.parentElement;const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+box.dataset.video;frame.title='Výukové video: technika hodu diskom';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;box.replaceChildren(frame)}));


}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init,{once:true})}else{init()}})();

