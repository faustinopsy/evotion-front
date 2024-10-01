const users =[
    {"usuario_id":1,"nome":"AAA BB CC","email":"xxxxx@gmail.com"},
    {"usuario_id":1,"nome":"LLL UUU OOO","email":"llllll@ri.com"},
    {"usuario_id":1,"nome":"ZZZ OOO EEE","email":"zzzzz@gmail.com"},
]
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
        <button>Enviar</button>`
    return form
}
function criaLista(){
    const lista = document.createElement('ul')
    lista.id = "listausers"
    users.forEach((usuario)=>{
        const li = document.createElement('li')
        li.innerHTML = `${usuario.nome} , ${usuario.email}`
        lista.appendChild(li)
    })
    return lista
}

const panel = document.createElement('div')
panel.appendChild(crieForm())
panel.appendChild(criaLista())
document.getElementById("app").appendChild(panel);
