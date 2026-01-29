document.addEventListener('DOMContentLoaded',()=>{
    const session = localStorage.getItem('session')
    if(!session){
        window.location = '../index.html'
    }
})