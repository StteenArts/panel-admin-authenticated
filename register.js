let submit = document.querySelector('#submit')
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')

submit.addEventListener("click", async (e) => {
    e.preventDefault();

    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        rol: "user",
        active: true
    };

    try {
        const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        });

        const data = await res.json();
        console.log("Usuario registrado:", data);
        window.location = './users/menu.html'
    } catch (err) {
        console.error(err);
    }
});