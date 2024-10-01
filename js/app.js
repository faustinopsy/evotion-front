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
function crieForm(){
    const form = document.createElement('form')
    form.id = "formUsers"
    form.innerHTML = `
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome">
        <label for="email">email</label>
        <input type="email" name="email" id="email">
        <label for="senha">senha</label>
        <input type="password" name="senha" id="senha">
        <button type="submit">Enviar</button>`
    return form
}
function capturaForm(){
    const form = document.getElementById("formUsers")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const usuario ={
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        }

        console.log(usuario)
    })
}
async function criaLista(){
    const lista = document.createElement('ul')
    lista.id = "listausers"
    const users = await buscaUsers();
    users.forEach((usuario)=>{
        const li = document.createElement('li')
        li.innerHTML = `${usuario.nome} , ${usuario.email}`
        lista.appendChild(li)
    })
    return lista
}

async function iniciar() {
    const lista = await criaLista(); 
    const panel = document.createElement('div');
    panel.appendChild(crieForm());
    panel.appendChild(lista);
    document.getElementById("app").appendChild(panel);
    capturaForm()
}

iniciar();
