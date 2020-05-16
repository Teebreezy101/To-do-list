const list = document.querySelector('.todo__list');
// const thrash = document.querySelector('.todo__list--thrash');


list.addEventListener('change', function(e) {
    if(e.target !== e.target.closest('.todo__list--check')) return;
    e.target.parentNode.classList.toggle('selected');
})

