const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  const category=button.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden',category!=='all'&&card.dataset.category!==category));
}));
document.getElementById('year').textContent=new Date().getFullYear();