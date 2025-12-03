// alert("coucou");

//selecteur element

// document.querySelector(""); permet de selectionner un element du DOM
// et est une fonction qui prend en parametre un selecteur CSS
// document.querySelector("balise voulu"); et #pour les ID et . pour les class
// document.querySelector("h1").style.backgroundColor = "red";
// permet de changer la couleur de fond de l'element h1 en rouge
document.querySelector("body").style.backgroundColor = "black";

//----------------------------------------------------------------------------------

// click event
const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2"); //selectobner element par ID et + efficacement
const rep = document.querySelector("p");
const rep2 = document.getElementById("mod");
//toujours declarer les variable avant les evenements ou fonctions
// console.log(questionContainer);
// console.log(btn1, btn2);
// console.log(rep);
//permet deviter le erreur bete avant de commencer le code

// questionContainer.addEventListener("evenement",() => {});
questionContainer.addEventListener("click", () => {
  //console.log("click"); //pour verifier si le code fonctionne
  // questionContainer.style.backgroundColor = "red"; permet au clic d'ajouter du style a la balise ciblé
  questionContainer.classList.toggle("question-click"); //permet de faire l ajout d'une class qui contient du style css
});
//avec add on ajoute juste
//avec remove on retire
//avec toggle on ajoute et retire

btn1.addEventListener("click", () => {
  rep.classList.add("revel"); //ajout class  contient  style css

  //console.log("click"); //pour verifier si le code fonctionne
});
btn2.addEventListener("click", () => {
  rep.style.visibility = "visible";
  rep.style.color = "green";
  rep.style.opacity = "1";
  rep2.innerHTML = "je sais merci bien BH";

  //console.log("click2"); //pour verifier si le code fonctionne
});
//--------------------------------------------------------------------------------
// mouse event
const mousemove = document.querySelector(".mousemove");
// console.log("mousemove");

//mousemove sert a suivre la souris

//mousedown sert a detecter le clic
//mouseup sert a detecter le relachement du clic
//dblclick sert a detecter le double clic
//contextmenu sert a detecter le clic droit

//mouseenter sert a detecter l'entree de la souris
//mouseout sert a detecter la sortie de la souris

//mouseover sert a detecter le survol de la souris
//mouseleave sert a detecter le depart de la souris

//mousewheel sert a detecter le mouvement de la molette
//scroll sert a detecter le scroll de la souris
//wheel sert a detecter le mouvement de la molette

//drag sert a detecter le deplacement d'un element
//dragend sert a detecter la fin du deplacement d'un element
//dragenter sert a detecter l'entree d'un element
//dragleave sert a detecter la sortie d'un element
//dragover sert a detecter le survol d'un element
//dragstart sert a detecter le debut du deplacement d'un element
//drop sert a detecter le depot d'un element

window.addEventListener("mousemove", (e) => {
  // console.log(e); //pour verifier si le code fonctionne
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.backgroundColor = "red";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.backgroundColor = "pink";
});

rep.addEventListener("mouseover", () => {
  rep.style.transform = "rotate(10deg)";
  rep.style.fontSize = "50px";
});

//--------------------------------------------------------------------------------
//keyPress event
const keypress = document.querySelector(".keypress");
// console.log(keypress);
const key = document.getElementById("key");
// console.log(key);

const ring = () => {
  const audio = new Audio();
  audio.src = "/audio_video/sonette.MP3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "a") {
    keypress.style.backgroundColor = "red";
  } else if (e.key === "z") {
    keypress.style.backgroundColor = "green";
  } else {
    keypress.style.backgroundColor = "purple";
  }
  ring();
});

//--------------------------------------------------------------------------------
//scroll event
const nav = document.querySelector("nav");
// console.log(nav);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});
//--------------------------------------------------------------------------------

//form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";
// console.log(inputName);
inputName.addEventListener("input", (e) => {
  // console.log(e.target.value);

  pseudo = e.target.value;
  // console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  // console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
  //permet d'annuler le comportement par defaut du formulaire
  e.preventDefault();
  // et de ne pas recharger la page quand on clique sur le bouton submit

  if (cgv.checked) {
    // innerHTML permet de modifier le contenu HTML d'un element en prenant en compte les balises HTML
    //textContent permet de modifier le contenu textuel d'un element en ignorant les balises HTML
    document.querySelector("form > div").textContent = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
  console.log("yes!!!");
});

//--------------------------------------------------------------------------------
//load event se declanche a la fin du chargement de la page
window.addEventListener("load", () => {
  console.log("document chargé");
});

//--------------------------------------------------------------------------------
const boxes = document.getElementsByClassName("box");
//permet de selectionner les elements qui ont la class box
//mais pose souvent des problemes
console.log(boxes);

const boxes2 = document.querySelectorAll(".box");
//permet de selectionner tout les elements qui ont la class box
//et est plus efficace
console.log(boxes2);

//pour chaque element de boxes2 on ajoute un evenement click
boxes2.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.transform = "scale(0.7)";
    e.target.style.transform = "scale(1)";
  });
});
//--------------------------------------------------------------------------------

//addevetlistener Vs onclick
//onclick est une propriete qui permet d'ajouter un evenement click a un element
//et ne permet pas:
//de supprimer un evenement
//d'ajouter plusieurs evenements
//de passer des parametres a une fonction
//de gerer le bubbling et le capturing
//de gerer les evenements de la souris
//de gerer les evenements du clavier
//de gerer les evenements du formulaire
//de gerer les evenements de la fenetre
//de gerer les evenements de la page
//de gerer les evenements du document
//de gerer les evenements du DOM
//de gerer les evenements du navigateur
//de gerer les evenements du reseau

//addEventListener est une methode qui permet d'ajouter un evenement a un element
//qui permet de faire toutes les actions que onclick ne permet pas

// document.body.onclick = () => {
//   console.log("onclick");
// };

// document.body.onscroll = () => {
//   console.log("premier onscroll");
// };
// document.body.onscroll = () => {
//   console.log("dernier onscroll");
// };
//mais si 2 onscroll ou autre sont present seul le dernier sera pris en compte
//et peut etre utilisé directemetn dans le html mai spas recommandé et aucun parametre ne peut etre passé
//alors que addEventListener permet de prendre en compte tout les evenements
/*
  il y as le onscroll qui permet de detecter le scroll de la page
  et le onclick qui permet de detecter le clic sur la page
  et le onmouseover qui permet de detecter le survol de la souris
  et le onmouseout qui permet de detecter la sortie de la souris
  et le onmousemove qui permet de detecter le mouvement de la souris
  et le onmousedown qui permet de detecter le clic
  et le onmouseup qui permet de detecter le relachement du clic
  et le ondblclick qui permet de detecter le double clic
  et le oncontextmenu qui permet de detecter le clic droit
  et le onmouseenter qui permet de detecter l'entree de la souris
  et le onmouseleave qui permet de detecter la sortie de la souris
  et le onmouseover qui permet de detecter le survol de la souris
  et le onmouseleave qui permet de detecter le depart de la souris
  et le onmousewheel qui permet de detecter le mouvement de la molette
  et le onscroll qui permet de detecter le scroll de la souris
  et le onwheel qui permet de detecter le mouvement de la molette
  et le ondrag qui permet de detecter le deplacement d'un element
  et le ondragend qui permet de detecter la fin du deplacement d'un element
  et le ondragenter qui permet de detecter l'entree d'un element
  et le ondragleave qui permet de detecter la sortie d'un element
  et le ondragover qui permet de detecter le survol d'un element
  et le ondragstart qui permet de detecter le debut du deplacement d'un element
  et le ondrop qui permet de detecter le depot d'un element
  et le onkeypress qui permet de detecter l'appui sur une touche
  et le onkeydown qui permet de detecter l'appui sur une touche
  et le onkeyup qui permet de detecter le relachement d'une touche
  et le onsubmit qui permet de detecter l'envoi du formulaire
  et le onreset qui permet de detecter la reinitialisation du formulaire
  et le onchange qui permet de detecter le changement de valeur d'un element
  et le oninput qui permet de detecter la saisie dans un element
  et le onfocus qui permet de detecter le focus sur un element
  et le onblur qui permet de detecter le defocus sur un element
  et le onselect qui permet de detecter la selection d'un element
  et le oncopy qui permet de detecter la copie d'un element
  et le oncut qui permet de detecter la coupe d'un element
  et le onpaste qui permet de detecter le collage d'un element
  et le onresize qui permet de detecter le redimensionnement de la fenetre
  et le onscroll qui permet de detecter le scroll de la fenetre
  et le onbeforeunload qui permet de detecter le depart de la page
  et le onload qui permet de detecter le chargement de la page
  et le onunload qui permet de detecter le dechargement de la page
  et le onerror qui permet de detecter une erreur
  et le onresize qui permet de detecter le redimensionnement de la fenetre
  et le onscroll qui permet de detecter le scroll de la fenetre
  et le onstorage qui permet de detecter le stockage local
  et le ononline qui permet de detecter la connexion a internet
  et le onoffline qui permet de detecter la deconnexion a internet
  et le onpopstate qui permet de detecter le retour en arriere
  et le onhashchange qui permet de detecter le changement d'ancrage
  et le onmessage qui permet de detecter un message
  et le onopen qui permet de detecter l'ouverture d'une fenetre
  et le onclose qui permet de detecter la fermeture d'une fenetre
  et le onmessage qui permet de detecter un message
  et le onbeforeunload qui permet de detecter le depart de la page
  et le onhashchange qui permet de detecter le changement d'ancrage
  et le onmessage qui permet de detecter un message
  et le onoffline qui permet de detecter la deconnexion a internet
  et le ononline qui permet de detecter la connexion a internet
  et le onpagehide qui permet de detecter le depart de la page
  et le onpageshow qui permet de detecter le retour sur la page
  et le onpopstate qui permet de detecter le retour en arriere
  et le onresize qui permet de detecter le redimensionnement de la fenetre
  et le onstorage qui permet de detecter le stockage local
  et le onunload qui permet de detecter le dechargement de la page

*/

//bubbling est le comportement par defaut des evenements
// et permet de detecter les evenements sur les elements parents
// et enfants de l'element ciblé par l'evenement
// et se fait de l'element ciblé vers l'element parent
// et est le 3eme parametre de addEventListener
// et est false par defaut et est true pour le capturing
// et est le comportement inverse du bubbling
// et permet de detecter les evenements sur les elements parents
// et enfants de l'element ciblé par l'evenement
// et se fait de l'element parent vers l'element ciblé
// et est le 3eme parametre de addEventListener
// et est false par defaut et est true pour le capturing
document.body.addEventListener(
  "click",
  () => {
    console.log("onclick1");
  },
  false
);

//capturing
document.body.addEventListener(
  "click",
  () => {
    console.log("onclick2");
  },
  true
);

//--------------------------------------------------------------------------------

//stopPropagation permet d'arreter la propagation des evenements
//et est une methode de l'objet event
questionContainer.addEventListener("click", (e) => {
  alert("test");
  e.stopPropagation(); //permet d'arreter la propagation des evenements
});

//removeEventListener permet de supprimer un evenement
//et est une methode de l'objet event

//--------------------------------------------------------------------------------

//BOM (Browser Object Model) permet de gerer le navigateur
//et est un ensemble d'objets qui permet de gerer le navigateur

console.log(window.innerHeight);
//permet de connaitre la hauteur de la fenetre du navigateur
// console.log(window.scrollY);
//permet de connaitre la position du scroll de la fenetre du navigateur

// window.open("https://www.google.com", "google", "height=600,width=800");
//permet d'ouvrir une nouvelle fenetre du navigateur
// window.close();
//permet de fermer la fenetre du navigateur

//permet d'afficher une alerte
// alert("coucou");

//conrfirme la demande de l'utilisateur
// btn2.addEventListener("click", () => {
//   confirm("voulez-vous confirmer");
// });

// //prompt permet de demander une information a l'utilisateur
// let name3 = "";
// btn1.addEventListener("click", () => {
//  name3 = prompt("entrez votre nom");
//  //permet de demander une information a l'utilisateur et de la stocker dans une variable
// });

// //setTimeout permet de declancher une fonction apres un certain temps
// setTimeout(() => {
//   alert("coucou");
// }, 2000);

// //setInterval permet de declancher une fonction a interval regulier
// //pour l'arreter il faut utiliser une variable avec clearInterval
// let interval= setInterval(() => {
//   console.log("wesh");
// }, 2000);

// document.body.addEventListener("click", () => {
//   clearInterval(interval);
//   console.log("stop");
// });

//location permet de gerer l'url de la page
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("https://www.google.com");
//permet de rediriger vers une autre page

//navigator permet de gerer les informations du navigateur
console.log(navigator.userAgent);

//--------------------------------------------------------------------------------

//setpropertie permet de definir une propriete
window.addEventListener("mousemove", (e) => {
  console.log(e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
