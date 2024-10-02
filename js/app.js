const users =[
    {"usuario_id":1,"nome":"AAA BB CC","email":"xxxxx@gmail.com"},
    {"usuario_id":1,"nome":"LLL UUU OOO","email":"llllll@ri.com"},
    {"usuario_id":1,"nome":"ZZZ OOO EEE","email":"zzzzz@gmail.com"},
]
async function buscaUsers(){
    try {
        const response = await fetch("http://localhost:8080/users");
        const result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      };
}
async function buscaUsersId(id){
    try {
        const response = await fetch(`http://localhost:8080/users/${id}`);
        const result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      };
}
async function enviarUsers(dados){
    try {
        const response = await fetch("http://localhost:8080/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dados)
        });
        const result = await response.json();
        alert(result.message)
        iniciar()
        return result
      } catch (error) {
        console.error(error);
      };
}
async function excluirUser(id){
    try {
        const response = await fetch(`http://localhost:8080/users/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const result = await response.json();
        alert(result.message)
        iniciar()
        return result
      } catch (error) {
        console.error(error);
      };
}
async function atualizarUser(id, dados){
    try {
        const response = await fetch(`http://localhost:8080/users/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dados)
        });
        const result = await response.json();
        alert(result.message)
        iniciar()
        return result
      } catch (error) {
        console.error(error);
      };
}
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
function iniciaEventos(){
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
            enviarUsers(usuario)
        }else{
            atualizarUser(id, usuario)
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
            excluirUser(id)
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

async function iniciar() {
    const app = document.getElementById("app")
    app.innerHTML = ""
    const lista = await criaLista(); 
    const panel = document.createElement('div');
    panel.appendChild(crieForm());
    panel.appendChild(lista);
    app.appendChild(panel);
    iniciaEventos()
}

iniciar();
