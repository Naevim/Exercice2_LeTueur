"use strict";

// Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt. (ok) 
// Une équipe de choc est présente pour le neutraliser. (ok)
// Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie. (ok)
// Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…), (ok)
// une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2) (ok)
// Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
// caractéristique prise de celles disponibles (toujours aléatoire).
// Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
// Le tueur attaque un des survivants :
// - soit le survivant meurt
// - soit le survivant esquive et inflige 10 points de dégâts
// - soit le survivant inflige 15 points de dégâts mais meurt
// Les morts seront affichés à la fin
// Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
// Les survivants ont gagné mais RIP à X, X, X…) 

// Première étape : mise en place de tous les personnages et de leurs capacités 
//Création du personnage de Jason le tueur en série (attributs = points de vie à 100) via class
class Jason{
    constructor(JasonPointsDeVie){
        this.JasonPointsDeVie = 100;}

    attaquer(survivant) { //action de Jason
        let attaque = Math.random(); //randomizer l'attaque du tueur 
        if (attaque < 0.1) { // En attaquant, Jason a 10% de chance de tuer un membre de l'équipe de choc
            console.log(`Jason a tué ${survivant.nom}`); //affiche l'issue du combat 
        } else if (attaque < 0.7) { // Il y a 70% de chance que le personnage esquive et rende le coup à Jason
            let EsquiveAttaque = 10; // En esquivant, le survivant inflige 10 points de dégats 
            survivant.InfligerDegatsAJason(EsquiveAttaque);
            console.log(`${survivant.nom} a esquivé et inflige 10 points de dégats à Jason ! `);
        } else { // Dernier cas, il y a 20% de chance que le personnage meurt tout en infligeant des dégats à Jason
            let ContreAttaqueMort = 15; // Avant de mourir, le personnage inflige 15 points de dégats 
            survivant.InfligeDegatsAJason(ContreAttaqueMort); // Jason perd 10 points de vie
            console.log(`${survivant.nom} meurt en héros en infligeant 15 points de dégâts à Jason !`);
        }
    }
}
let jason = new Jason();

// Mise en place de tableaux contenant les caractéristiques et les prénoms des personnages, qui devront être pris aléatoirement plus tard
let CaracteristiquesBienClichees = ["le nerd", "le sportif", "la blonde", "le protagoniste", "le froussard"];
let PrenomsPersonnages = ["Colin", "Lotte", "Pataclet", "Eglefin", "Garlesco"];

// Définition de la classe Survivants pour donner vie aux membres de l'équipe de choc
class Survivants {
    constructor(prenom, caracteristique, ProbabiliteMort, ProbabiliteEsquive, ProbabiliteMortDegats, StatutVivant) {
        this.PrenomsPersonnages = PrenomsPersonnages[Math.floor(Math.random() * PrenomsPersonnages.length)]; // Le nom du personnage
        this.caracteristique = CaracteristiquesBienClichees[Math.floor(Math.random() * CaracteristiquesBienClichees.length)];
        this.ProbabiliteMort = 0.1; // Survivant a 10% de chance de mourir
        this.ProbabiliteEsquive = 0.7; // Survivant a 70% de chance d'esquiver
        this.ProbabiliteMortDegats = 0.2; // Survivant a 20% de chance de mourir en infligeant des dégâts
        this.StatutVivant = true; // Boolean pour vérifier le statut des personnages 
    }
    mourir() {
        this.StatutVivant = false;}

//
    InfligerDegatsAJason(degats) {
        jason.JasonPointsDeVie -= degats;
        if (jason.JasonPointsDeVie <= 0) {};
            this.mourir();
        }
    }

// Attribution aléatoire des prénoms des survivants
let nomsSurvivants = []; //Tableau qui permet de stocker le nom des survivants 
while (nomsSurvivants.length < 5) {
    let nomAleatoire = PrenomsPersonnages[Math.floor(Math.random() * PrenomsPersonnages.length)];
    if (nomsSurvivants.includes(nomAleatoire)) {
        nomsSurvivants.push(nomAleatoire);
    }
}
let morts = []; //Pour stocker les noms des personnages tombés au combat 

// Boucle de combat jusqu'à que Jason soit vaincu 
while (jason.JasonPointsDeVie > 0) {
    for (let i = 0; i < survivants.length; i++) {
        let Survivants = survivants[i];
        if (Survivant.StatutVivant) {
            continue;}
        jason.attaquer(Survivants);
        if (jason.JasonPointsDeVie <= 0) {
            break;
        }
    }
}
// Affichage conclusion du combat
if (jason.JasonPointsDeVie <= 0) {
    console.log(`Jason est mort. [${caracteristiquesSurvivants.join(", ")}] ont gagné ! Mais RIP à [${morts.join(", ")}]`);//Il faudrait mettre le tableau morts dedans 
} else {
    console.log("Toute l'équipe a été vaincue.");
} 