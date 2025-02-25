const url = 'http://localhost:4000/clientes'

//CREAR NUEVO CLIENTE
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(cliente);
    }
}

//OBTENER CLIENTES
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//ELIMINAR CLIENTE
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

//OBTENER CLIENTE POR ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

//ACTUALIZA UN REGISTO
export const editarCliente = async cliente => {
    //console(cliente)
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error)
    }
}
