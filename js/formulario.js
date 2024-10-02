import {atualizarUser, excluirUser, enviarUsers, buscaUsersId, buscaUsers} from './services.js'
function crieForm(){
    const form = document.createElement('form')
    form.id = "formUsers"
    form.innerHTML = `
        <input type="text" name="userid" id="userid" hidden>
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        <label for="email">email</label>
        <input type="email" name="email" id="email">
        <label for="senha">senha</label>
        <input type="password" name="senha" id="senha">
        <button type="submit">Enviar</button>`
    return form
}
function iniciaEventos(callback){
    const form = document.getElementById("formUsers")
    const botaoEditar = document.querySelectorAll('.update');
    const botaoDeletar = document.querySelectorAll('.delete');
    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        const id = document.getElementById("userid").value
        const usuario ={
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        }

        if(id=="" || id===""){
            enviarUsers(usuario, callback)
        }else{
            atualizarUser(id, usuario, callback)
        }
    })
    
    botaoEditar.forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id'); 
            const user = await buscaUsersId(id)
            form.elements['userid'].value = user.usuario_id;
            form.elements['nome'].value = user.nome;
            form.elements['email'].value = user.email;
            form.elements['senha'].value = '';
        });
    });

    botaoDeletar.forEach(button => {
        button.addEventListener('click', async (e) => {
            const id = e.target.getAttribute('data-id');
            excluirUser(id, callback)
        });
    });
}
async function criaLista(){
    const lista = document.createElement('ul')
    lista.id = "listausers"
    const users = await buscaUsers();
    users.forEach((usuario)=>{
        const li = document.createElement('li')
        li.innerHTML = `${usuario.nome} , ${usuario.email} 
        <button class="update" data-id="${usuario.usuario_id}">Editar</button>
        <button class="delete" data-id="${usuario.usuario_id}">Excluir</button>
        ` 
        lista.appendChild(li)
    })
    return lista
}


export {criaLista, iniciaEventos, crieForm}