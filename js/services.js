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
async function enviarUsers(dados, callback){
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
        callback()
        return result
      } catch (error) {
        console.error(error);
      };
}
async function excluirUser(id, callback){
    try {
        const response = await fetch(`http://localhost:8080/users/${id}`,{
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
        const response = await fetch(`http://localhost:8080/users/${id}`,{
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