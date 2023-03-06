var container = document.getElementById("container");
var des = [];

function ajouterDe() {
    if (des.length < 5) {
        var de = document.createElement("div");
        de.classList.add("de");
        container.appendChild(de);
        des.push(de);
    }
}

function lancerDes() {
    var somme = 0;
    for (var i = 0; i < des.length; i++) {
        var resultat = Math.floor(Math.random() * 6) + 1;
        des[i].innerHTML = resultat;
        somme += resultat;
    }
    alert("La somme des nombres est " + somme);
}