document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#galeria').scrollIntoView({ behavior: 'smooth' });
});
