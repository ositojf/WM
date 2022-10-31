
//CONEXION 
const dbConnection = window.indexedDB.open('registro', 2);                                   // version 1
let db;
//on success = El successevent se dispara cuando un IDBRequesttiene éxito.
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("Base de datos abierta", db);
}
// El upgradeneededevento se activa cuando se intentó abrir una base de datos 
// con un número de versión superior a su versión actual.
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;//elemento que nos devuelve
    console.log("Crear objetos de DB", db);
    const coleccionPersona = db.createObjectStore('persona', {
        keyPath: 'idPersona'
    });
    const coleccionCompras = db.createObjectStore('compras', {
        keyPath: 'idCompras'
    });
}
// El errorevento se activa IDBTransactioncuando una solicitud devuelve un error 
// y el evento aparece en el objeto de la transacción.
dbConnection.onerror = (error) =>{
    console.log(error);
}