const userR = document.querySelector('#userRegistro')
let user1 = []

const contraR = document.querySelector('#passwordRegistro')
let pass1 = []

const userL = document.querySelector('#userLogin')
let user2 = []

const contraL = document.querySelector('#passwordLogin')
let pass2 = []

const botonR = document.querySelector('#boton-registro')
const botonL = document.querySelector('#boton-login')

const registro = document.querySelector('.registro')
const login = document.querySelector('.login')


botonR.addEventListener('click', r => {
    const nombre = document.querySelector('.registro .input-registro:nth-of-type(1)').value.trim();
    const apellido = document.querySelector('.registro .input-registro:nth-of-type(2)').value.trim();
    const correo = document.querySelector('.registro .input-registro:nth-of-type(3)').value.trim();
    const usuario = userR.value.trim();
    const contraseña = contraR.value.trim();

    if (nombre === '' || apellido === '' || correo === '' || usuario === '' || contraseña === '') {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    user1.push(usuario)
    pass1.push(contraseña)
    alert("Se completó el registro");

    login.style.display = "flex"
    registro.style.display = "none"
    console.log(user1)
    console.log(pass1)
})

botonL.addEventListener('click', r => {
    const usuarioLogin = userL.value.trim();
    const contraseñaLogin = contraL.value.trim();

    if (usuarioLogin === '' || contraseñaLogin === '') {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    user2.push(usuarioLogin)
    pass2.push(contraseñaLogin)
    console.log(user2)
    console.log(pass2)

    if((user1[0] === userL.value) && (pass1[0] === contraL.value))
    {
        alert("Inicio de seccion exitoso")
        window.location.href = "./inicio.html";
    }
    else
    {
        alert("Credenciales incorrectas. Inténtalo nuevamente.")
    }
})