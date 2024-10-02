const url = "http://localhost:8080/users"
async function buscaUsers(){
    try {
        const response = await fetch(`${url}`);
        const result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      };
}
async function buscaUsersId(id){
    try {
        const response = await fetch(`${url}/${id}`);
        const result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      };
}
async function enviarUsers(dados, callback){
    try {
        const response = await fetch(`${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dados)
        });
        const result = await response.json();
        alert(result.message)
        callback()
        return result
      } catch (error) {
        console.error(error);
      };
}
async function excluirUser(id, callback){
    try {
        const response = await fetch(`${url}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        const result = await response.json();
        alert(result.message)
        callback()
        return result
      } catch (error) {
        console.error(error);
      };
}
async function atualizarUser(id, dados, callback){
    try {
        const response = await fetch(`${url}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(dados)
        });
        const result = await response.json();
        alert(result.message)
        callback()
        return result
      } catch (error) {
        console.error(error);
      };
}

export {atualizarUser, excluirUser, enviarUsers, buscaUsersId, buscaUsers}