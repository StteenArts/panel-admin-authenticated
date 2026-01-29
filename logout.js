let logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    localStorage.removeItem('session')
    window.location = '../index.html'
});
