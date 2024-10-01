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
    lista.innerHTML = `
        <li>AAA BB CC ,xxxxx@gmail.com</li>
        <li>LLL UUU OOO ,llllll@ri.com</li>
        <li>ZZZ OOO EEE ,zzzzz@gmail.com</li>
    ` 
    return lista
}

const panel = document.createElement('div')
panel.appendChild(crieForm())
panel.appendChild(criaLista())
document.getElementById("app").appendChild(panel);
