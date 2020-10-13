//NOME
var firstName =prompt('Quale è il tuo nome?');
console .log('nome user:', firstName);

//COGNOME
var lastName = prompt ('Quale è il tuo cognome?');
console.log('cognome user:', lastName);

//COLORE
var prefColor = prompt ('Quale è il tuo colore preferito?');
console.log('colore prferito:', prefColor);


document. getElementById ('js-text').innerHTML= firstName + ' ' + lastName + ' ' + prefColor + ' ' + '19';