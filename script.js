// Mobile drawer
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const drawer = document.getElementById('mobileNav');
openBtn?.addEventListener('click', () => {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  openBtn.setAttribute('aria-expanded', 'true');
});
closeBtn?.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  openBtn.setAttribute('aria-expanded', 'false');
});
drawer?.addEventListener('click', (e)=>{
  if(e.target === drawer){
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
  }
});

// Search dialog
const searchBtn = document.getElementById('searchBtn');
const searchDialog = document.getElementById('searchDialog');
searchBtn?.addEventListener('click', () => {
  if(typeof searchDialog.showModal === 'function'){
    searchDialog.showModal();
    searchBtn.setAttribute('aria-expanded', 'true');
    setTimeout(()=>document.getElementById('q')?.focus(), 50);
  } else {
    alert('Search dialog is not supported in this browser.');
  }
});
searchDialog?.addEventListener('close', ()=> searchBtn.setAttribute('aria-expanded','false'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Keyboard focus outline helper
const focusables = document.querySelectorAll('a, button, input');
focusables.forEach(el=>{
  el.addEventListener('focus', ()=>{el.style.outline = '3px solid var(--ring)'; el.style.outlineOffset='2px'});
  el.addEventListener('blur', ()=>{el.style.outline='none'});
});
