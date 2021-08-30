let formulario = document.getElementById('formulario');
let btnBuscar = document.getElementById('btnBuscar');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
const url = 'http://localhost:3600/usuarios';

window.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let contraseña = document.getElementById('pass').value;
let telefono = document.getElementById('telefono').value;
    let resp = await fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email,
            contraseña:contraseña,
            celular: telefono
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    alert('USUARIO REGISTRADO CORRECTAMENTE');
    let data = resp.json();
    localStorage.setItem('Buscado',JSON.stringify(data.nombre))
    console.log(data) 
    
})

btnBuscar.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let email = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;

    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.correo=== email)
    const {nombre, apellido, correo, celular,contraseña, id} = modificar;
    console.log(nombre, apellido, correo, telefono, id);
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('pass').value = contraseña;
    document.getElementById('telefono').value = celular;
    document.getElementById('id').value = id;
})

btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let lastNameMod = document.getElementById('lastName').value;
    let emailMod = document.getElementById('email').value;
    let passMod = document.getElementById('pass').value;
    let telefonoMod = document.getElementById('telefono').value;
   
  
    let resp = await fetch(`http://localhost:3600/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            apellido: lastNameMod,
            correo: emailMod,
            contraseña: passMod,
            celular: telefonoMod,
            
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data); 
})

btnEliminar.addEventListener('click', async() => {
    alert('Seguro que quiere borrar los datos');

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:3600/usuarios/${idModificar}`,{
        method: 'DELETE',
    })
   let data = resp.json();
    console.log(data); 
})