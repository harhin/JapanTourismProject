function show_akihabara() {
    document.getElementById("akihabara").style.display = "block";
    document.getElementById("harajuku").style.display = "none";
    document.getElementById("shinjuku").style.display = "none";
    document.getElementById("divercity").style.display = "none";
}

function show_harajuku() {
    document.getElementById("akihabara").style.display = "none";
    document.getElementById("harajuku").style.display = "block";
    document.getElementById("shinjuku").style.display = "none";
    document.getElementById("divercity").style.display = "none";
}

function show_shinjuku() {
    document.getElementById("akihabara").style.display = "none";
    document.getElementById("harajuku").style.display = "none";
    document.getElementById("shinjuku").style.display = "block";
    document.getElementById("divercity").style.display = "none";
}

function show_divercity() {
    document.getElementById("akihabara").style.display = "none";
    document.getElementById("harajuku").style.display = "none";
    document.getElementById("shinjuku").style.display = "none";
    document.getElementById("divercity").style.display = "block";
}

/*Confirmation Button. Work on this a little more */
function myFunction() {
    var txt;
    if (confirm("Are you sure you want to leave the page?")) {
        window.location.href = "../Sightseeing_Location/sightseeing_locations.html";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}