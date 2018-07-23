allPokemon = [];
function newPokemon(name, hp, attack, defense, abilities){
  var pokemon = {
     name: name,
     hp: hp,
     attack: attack,
     defense: defense,
     abilities: abilities

}
allPokemon.push(pokemon);
}

var trainer = {
 name: 'Kayler',
 pokemon: allPokemon,
 all: function() {
   return allPokemon;
 },

 get: function(name) {
   for(i = 0; i < allPokemon.length; i++) {
     if (name == this.pokemon[i].name){
       console.log(allPokemon[i]);
     }
   }
 }
}

// Jigglypuff

document.getElementById('top-jig-outline').addEventListener('mouseover', onHover);
document.getElementById('top-jig-outline').addEventListener('click', onClick, loadPokemon1);
document.getElementById('top-jig-outline').addEventListener('click',loadPokemon1);
document.getElementById('top-jig-outline').addEventListener('mouseout', hoverOut);


function onHover() {
  document.getElementById('top-jig-outline').style.opacity=0.5;
  document.getElementById('outline').style.opacity=0.5;
}
function onClick() {
  document.getElementById('top-jig-outline').style.opacity=0;
  document.getElementById('outline').style.opacity=1;
}

function hoverOut() {
  document.getElementById('top-jig-outline').style.opacity=0;
  document.getElementById('outline').style.opacity=1;

}


// ************ https://www.quora.com/How-do-I-make-image-1-disappear-and-image-2-appear-on-mouse-click-momentarily-with-css

// var elementHide = document.getElementsByClassName("top-jig-outline");
// 	elementShow = document.getElementsByClassName("outline");
//
// // This is the onclick event + the functionality you need
// elementHide[0].onclick = function() {
// 	// Simple check to add it only once.
// 	if( ! hasClass(elementHide[0], 'is-hidden'))
// 		elementHide[0].className += " is-hidden";
//
// 	elementShow[0].classList.remove("is-hidden");
// };
//
// // Simple function to see if class exists.
// function hasClass(element, cls) {
//     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;

// ******************



function loadPokemon1() {
 var newPoke = new XMLHttpRequest();
 newPoke.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokedata = JSON.parse(this.responseText);

     newPokemon(pokedata.name, pokedata.stats[5].base_stat, pokedata.stats[4].base_stat, pokedata.stats[3].base_stat, [pokedata.abilities[0].ability.name, pokedata.abilities[1].ability.name, pokedata.abilities[2].ability.name])

     name: document.getElementById("name").innerHTML =  pokedata.name;
     hp: document.getElementById("hp").innerHTML = '<b> &nbsp &nbsp &nbsp &nbspHP   :  </b>' + pokedata.stats[5].base_stat;
     attack: document.getElementById("attack").innerHTML = '<b>   &nbsp &nbsp &nbsp &nbspAttack :  </b> ' + pokedata.stats[4].base_stat;
     defense: document.getElementById("defense").innerHTML = '<b>  &nbsp &nbsp &nbsp &nbspDefense : </b>' + pokedata.stats[3].base_stat;
     abilities: document.getElementById("abilities").innerHTML ='<b> &nbsp &nbsp &nbsp &nbspAbilities : </b> '+ pokedata.abilities[0].ability.name;
     abilities2: document.getElementById("abilities2").innerHTML = '  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata.abilities[1].ability.name;
     abilities3: document.getElementById("abilities3").innerHTML = '  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata.abilities[2].ability.name;

     console.log(pokedata);
   }

 };
 newPoke.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/jigglypuff.js", true);

 // newPoke.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/39.json", true);
 // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/39/", true);
 newPoke.send();
}


// Bulbasaur

document.getElementById('top-buld-outline').addEventListener('mouseover', onHover2);
document.getElementById('top-buld-outline').addEventListener('click', onClick2, loadPokemon2);
document.getElementById('top-buld-outline').addEventListener('click',loadPokemon2);
document.getElementById('top-buld-outline').addEventListener('mouseout', hoverOut2);


function onHover2() {
  document.getElementById('top-buld-outline').style.opacity=0.5;
  document.getElementById('outline2').style.opacity=0.5;
}
function onClick2() {
  document.getElementById('top-buld-outline').style.opacity=0;
  document.getElementById('outline2').style.opacity=1;
}

function hoverOut2() {
  document.getElementById('top-buld-outline').style.opacity=0;
  document.getElementById('outline2').style.opacity=1;

}



function loadPokemon2() {
 var newPoke2 = new XMLHttpRequest();
 newPoke2.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokedata2 = JSON.parse(this.responseText);

     newPokemon(pokedata2.name, pokedata2.stats[5].base_stat, pokedata2.stats[4].base_stat, pokedata2.stats[3].base_stat, [pokedata2.abilities[0].ability.name, pokedata2.abilities[1].ability.name])

     name: document.getElementById("bname").innerHTML =  pokedata2.name;
     hp: document.getElementById("bhp").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspHP  : </b> ' + pokedata2.stats[5].base_stat;
     attack: document.getElementById("battack").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspAttack :   </b>' + pokedata2.stats[4].base_stat;
     defense: document.getElementById("bdefense").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspDefense :</b> ' + pokedata2.stats[3].base_stat;
     abilities: document.getElementById("babilities").innerHTML ='<b>&nbsp &nbsp &nbsp &nbspAbilities : </b>'+ pokedata2.abilities[0].ability.name;
     abilities2: document.getElementById("babilities2").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata2.abilities[1].ability.name;


     console.log(pokedata2);
   }

 };
 newPoke2.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/Bulbasaur.js", true);

 // newPoke2.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/1.json", true);
 // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
 newPoke2.send();
}


// Charmander

document.getElementById('top-char-outline').addEventListener('mouseover', onHover3);
document.getElementById('top-char-outline').addEventListener('click', onClick3, loadPokemon3);
document.getElementById('top-char-outline').addEventListener('click',loadPokemon3);
document.getElementById('top-char-outline').addEventListener('mouseout', hoverOut3);


function onHover3() {
  document.getElementById('top-char-outline').style.opacity=0.5;
  document.getElementById('outline3').style.opacity=0.5;
}
function onClick3() {
  document.getElementById('top-char-outline').style.opacity=0;
  document.getElementById('outline3').style.opacity=1;
}

function hoverOut3() {
  document.getElementById('top-char-outline').style.opacity=0;
  document.getElementById('outline3').style.opacity=1;

}



function loadPokemon3() {
 var newPoke3 = new XMLHttpRequest();
 newPoke3.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokedata3 = JSON.parse(this.responseText);

     newPokemon(pokedata3.name, pokedata3.stats[5].base_stat, pokedata3.stats[4].base_stat, pokedata3.stats[3].base_stat, [pokedata3.abilities[0].ability.name, pokedata3.abilities[1].ability.name])

     name: document.getElementById("cname").innerHTML =  pokedata3.name;
     hp: document.getElementById("chp").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspHP  </b></b> :  ' + pokedata3.stats[5].base_stat;
     attack: document.getElementById("cattack").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspAttack : </b>    ' + pokedata3.stats[4].base_stat;
     defense: document.getElementById("cdefense").innerHTML = '<b>&nbsp &nbsp &nbsp &nbspDefense :</b> ' + pokedata3.stats[3].base_stat;
     abilities: document.getElementById("cabilities").innerHTML ='<b>&nbsp &nbsp &nbsp &nbspAbilities</b> :  '+ pokedata3.abilities[0].ability.name;
     abilities2: document.getElementById("cabilities2").innerHTML = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + pokedata3.abilities[1].ability.name;


     console.log(pokedata3);
   }

 };
 newPoke3.open("GET", "https://raw.githubusercontent.com/Kaylerc/Pokedex/master/testapi/Charmander.js", true);

 // newPoke3.open("GET", "https://pokeapi-nycda.firebaseio.com/pokemon/4.json", true);
 // newPoke.open("GET", "https://pokeapi.co/api/v2/pokemon/4/", true);
 newPoke3.send();
}
