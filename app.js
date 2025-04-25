const eleves = [
    { nom: 'Alice', notes: [12, 14, 16] },
    { nom: 'Bob', notes: [7, 8, 6] },
    { nom: 'Charlie', notes: [10, 10, 11] }
];
// Fonction pour calculer la moyenne d'un élève
function calculerMoyenne(notes) {
    const somme = notes.reduce((acc, note) => acc + note, 0);
    return somme / notes.length;
}

// Fonction pour savoir si l'élève est admis (moyenne >= 10)
function estAdmis(moyenne) {
    return moyenne >= 10;
}
// Fonction pour afficher les résultats
function afficherResultats() {
    eleves.forEach(eleve => {
        const moyenne = calculerMoyenne(eleve.notes);
        const admis = estAdmis(moyenne);
        console.log(`${eleve.nom} - Moyenne : ${moyenne} - ${admis ? 'Admis' : 'Refusé'}`);
    });
}
afficherResultats();
