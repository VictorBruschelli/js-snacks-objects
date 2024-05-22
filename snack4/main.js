
//-creo un array che rapresenta delle persone
//-gli oggetti hanno 
//.nome
//.cognome
//.eta
const persone = [
    {nome: 'Fernando',cognome:'Ferrari',eta: 17, },
    {nome: 'Luca',cognome:'Lamborghini',eta: 18, },
    {nome: 'Ester',cognome:'Ginori',eta: 21, },
    {nome: 'Elena',cognome:'Roche',eta: 23, },
]
console.log(persone);
//-creo un nuovo array 'info' inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
const guida = []
 
//-creo un ciclo per riuscire a separare individualmente ogni propieta dentro l'object
for (let i = 0; i < persone.length; i++) {

//-pusho il nome,cognome,eta e aggiungo una info con scritto il nome e cognome e se pu guidare
    const patente = persone[i];
    if (patente.eta < 18)
        guida.push(persone[i]);

//aggiungo due nuovi oggetti dentro l'array 


}
console.log(guida);