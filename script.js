let loginForm = document.querySelector('#formLogin')

async function getUsers() {
    try{
        let res = await fetch('http://localhost:3000/users')
        let data = await res.json()
        return data
    }catch(error){
        console.log('Error del servidor:', error)
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#formLogin').reset()
});


loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const data = new FormData(loginForm)
    const value = Object.fromEntries(data.entries());
    const users = await getUsers();

    users.forEach(user => {
        //EL usuario tiene un usuario existente
        if(value.email === user.email && Number(value.password) === Number(user.password)){
            localStorage.setItem('session', user.rol)
            //Valida el rol del usuario
            if(user.rol == "user"){
                window.location = './users/menu.html'
            }else if(user.rol == "admin"){
                window.location = './admin/index.html'
            }else{
                alert('Este usuario no cuenta con un rol, Porfavor Salga de la página')
            }
        }
    });
})

function inAdmin(){

}

function inUser(){

}


