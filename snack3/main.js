'use strict';
//-creare un array "animali"
//-dentro ci saranno dei object corrispondenti a "animali"
//-ogni object representera un animale diverso contenendo
//.nome
//.famiglia
//.classe  

const animali = [
    {nome: 'gatto',famiglia:'felini',classe:'mammiferi', },
    {nome: 'cane',famiglia:'canide',classe:'mammiferi', },
    {nome: 'piccione',famiglia:'volatili',classe:'nonso', },
    {nome: 'serpente',famiglia:'rettili',classe:'oviperi', },
    {nome: 'mucca',famiglia:'erbivoro',classe:'mammiferi', },
]
console.log(animali);

//-creo un array vuoto "mammiferi"
const listaMammiferi = []
//-creo un ciclo per riuscire a separare individualmente ogni propieta dentro l'object
for (let i = 0; i < animali.length; i++) {

//-pusho solamente gli animali mammiferi dentro l'array "mammiferi"
    const latte = animali[i];
    if (latte.classe === 'mammiferi'){
      listaMammiferi.push(latte);
    }

}
console.log(listaMammiferi);