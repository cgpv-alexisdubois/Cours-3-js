const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];
console.log(livres[0].titre)
console.log(livres.length)
console.table(livres)
livres.forEach((livre) => {
    console.log(`${livre.titre} ecrit par ${livre.auteur}`)
})


livres.push({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false })
livres[1].disponible = true

let indexFahrehenit452 = livres.findIndex(livre => livre.titre === "Fahrenheit 451")
if (indexFahrehenit452 >= 0) {
    let livreSupprimer = livres.splice(indexFahrehenit452, 1)
    console.log()
}
console.log(livres[1])

console.table(livres)
//Partie 3
let dispo = livres.filter(livre => livre.disponible === true)
dispo.forEach((livre) => {
    if (livre.annee < 1960) {
        console.log(livre.titre)
    }
})
let auteurRecherche = "Frank Herbert"
let livresRecherche = livres.filter(livre => livre.auteur === auteurRecherche)
console.log(`Recherche de livres de l'auteur ${auteurRecherche}:`)
if (livresRecherche.length >= 0) {
    let livresTitre = livresRecherche.map(livre => livre.titre)
} else {
    console.log(`=> Aucun livre de ${auteurRecherche} trouve.`)
}

//Partie 4

/**
 * Affiche a la console un tableau delivres trie par date de publication
 * @param {Array} livres tableau dobjet livre
 */
function afficherCatalogue(livres) {
    let tableauTrie = livres.sort((a, b) => a.annee - b.annee)
    let catalogueFormat = livres.map(livre => {
        let statut = livre.disponible ? "Disponible" : "Non disponible"
        return `=> ${livre.titre} (${livre.auteur}, ${livre.annee}) - ${statut}`
    })
    console.log("=== Catalogue des livres ===")
    catalogueFormat.forEach(ligne => console.log(ligne))
}
afficherCatalogue(livres)

function RechercherLivre() {
    let auteurRecherche = prompt("Entrez le nom de l'auteur")
    let livresRecherche = livres.filter((livre) => livre.auteur === auteurRecherche)
    if (livresRecherche.length) {
        const seulementTitres = livresRecherche.map(livre => livre.titre)
        const fusionTitres = seulementTitres.join(', ')
        alert(`Livres trouves : ${fusionTitres}`)
    } else {
        alert(`Aucun livre de ${auteurRecherche} trouve`)
    }
}
