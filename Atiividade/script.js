let cliques;

function add () {
    cliques++;
    document.getElementById("cliques").innerHTML = "Cliques: " + cliques;
}

function save () {
    localStorage.setItem("cliques", cliques);
}

function next () {
    window.location = "pag2.html";
}

function getCliques () {
    cliques = localStorage.getItem("cliques");
    if (cliques) {
        document.getElementById("cliques").innerHTML = "Cliques: " + cliques;
    } else {
        cliques = 0;
        document.getElementById("cliques").innerHTML = "Cliques: " + cliques;
    }
}

function back () {
    window.location = "pag1.html";
}

function del () {
    localStorage.clear();
    cliques = 0;
    back();
}