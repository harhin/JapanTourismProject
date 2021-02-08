function myFunction1() {
    var txt;
    if (confirm("Are you sure you want to leave the page?")) {
        window.location.href = "../../MerandaSection/Budget_places/budgetplaces.html";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}

function myFunction2() {
    var txt;
    if (confirm("Are you sure you want to leave the page?")) {
        window.location.href = "../../MithraSection/Nice_Places/NicePlaces.html";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}