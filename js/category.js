const openToggle=document.getElementById('openToggle');

const openCategory=document.getElementById('openCategory');

openToggle.addEventListener('click', function(e){
    openCategory.classList.toggle('open')
})