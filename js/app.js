import {criaLista, iniciaEventos, crieForm} from './formulario.js'


async function iniciar() {
    const app = document.getElementById("app")
    app.innerHTML = ""
    const lista = await criaLista(); 
    const panel = document.createElement('div');
    panel.appendChild(crieForm());
    panel.appendChild(lista);
    app.appendChild(panel);
    iniciaEventos(iniciar)
}

iniciar();
