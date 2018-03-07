var a = 10, b= "5a";
var wynik = a + b;
//rt(wynik);
//t(a + b);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string



var _zmienna1 = 10;

var zmiennoprzecinkowa = 2.5;
console.log(zmiennoprzecinkowa);
console.log(typeof(zmiennoprzecinkowa)); //number



//bool
//true lub false
   var prawda = true;
   var fałsz = false;
   console.log(typeof(prawda)); //boolean

//string tekst
   var imie = "janusz"
console.log(typeof(imie)); //string


//undefinited
     var nazwisko;
     console.log(typeof(nazwisko));
//object
     var tablica = ['biały', 'zielony', 'czerwony'];
     console.log(tablica);
     console.log(typeof(tablica));
//#######################################################################################

//var liczba = prompt('podaj liczbę');
var wiek1 = prompt('podaj wiek', 'np. 18');
console.log('Twój wiek: ' + wiek1 + 'lat'); //wyswietla w konsoli
console.log(typeof(wiek1)); // string
var wiek2 = prompt('podaj wiek');
// zrzutowanie typu danych na liczbe
//var wiek3 = prompt('Podaj wiek');
var wiek3 = Number(prompt('Podaj wiek'));
//zamiana na lczbe całkowitą
/*
wiek1 = parseInt(wiek1);
wiek2 = parseInt(wiek2);
*/
//zamiana typu danych na zmiennoprzecinkową
wiek1 = parseFloat(wiek1);
wiek2 = parseFloat(wiek2);

var suma = wiek1 + wiek2 + wiek3;
var sredniWiek = suma / 3;
sredniWiek = sredniWiek.toFixed(2);
document.write(wiek1 + ' + ' + wiek2 + ' + ' + wiek3 + ' = ' + suma);
document.write('<br>Sredni wiek wynosi ' + sredniWiek + ' lat');


















