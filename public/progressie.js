var checkboxesWaarneembaar = document.querySelectorAll("#principes #waarneembaar input[type=checkbox]");
var checkboxesBedienbaar = document.querySelectorAll("#principes #bedienbaar input[type=checkbox]");
var checkboxesBegrijpelijk = document.querySelectorAll("#principes #begrijpelijk input[type=checkbox]");
var checkboxesRobuust = document.querySelectorAll("#principes #robuust input[type=checkbox]");

// localStorage.removeItem("waarneembaarProgression");
// localStorage.removeItem("bedienbaarProgression");
// localStorage.removeItem("begrijpelijkProgression");
// localStorage.removeItem("robuustProgression");


var waarneembaarChecklistCheckboxes = [];
var waarneembaarChecklistValues = new Array(checkboxesWaarneembaar.length);

var bedienbaarChecklistCheckboxes = [];
var bedienbaarChecklistValues = new Array(checkboxesBedienbaar.length);

var begrijpelijkChecklistCheckboxes = [];
var begrijpelijkChecklistValues = new Array(checkboxesBegrijpelijk.length);

var robuustChecklistCheckboxes = [];
var robuustChecklistValues = new Array(checkboxesRobuust.length);

// checkboxesWaarneembaar ?
//     waarneembaarChecklistValues = checkboxesWaarneembaar :
//     waarneembaarChecklistValues.fill(false);

//     checkboxesBedienbaar ?
//     bedienbaarChecklistValues = checkboxesBedienbaar :
//     bedienbaarChecklistValues.fill(false);

//     checkboxesBegrijpelijk ?
//     begrijpelijkChecklistValues = checkboxesBegrijpelijk :
//     begrijpelijkChecklistValues.fill(false);

//     checkboxesRobuust ?
//     robuustChecklistValues = checkboxesRobuust :
//     robuustChecklistValues.fill(false);

checkboxesWaarneembaar.forEach(function (checkbox) {
    //vul de Array met de huidige checkbox vanuit de DOM
    waarneembaarChecklistCheckboxes.push(checkbox);
    //verander de checked waarde van de checkboxes aan de hand van de bijbehorende value (uit de localStorage of standaard false)
    // checkboxesWaarneembaar[waarneembaarChecklistCheckboxes.indexOf(checkbox)].checked = waarneembaarChecklistValues[waarneembaarChecklistCheckboxes.indexOf(checkbox)];
    checkbox.addEventListener("change", function () {
        //verander de progressie van het principe aan de hand van de (handmatig) aangevinkte checkboxes
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        //pas de bijbehorende value aan aan de hand van de huidige checkox value
        waarneembaarChecklistValues[waarneembaarChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        //maak of verander de localStorage met de actuele values
        localStorage.setItem("waarneembaarProgression", JSON.stringify(waarneembaarChecklistValues));
    });
    //verander de progressie van het principe aan de hand van de (automatisch) aangevinkte checkboxes
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesBedienbaar.forEach(function (checkbox) {
    //vul de Array met de huidige checkbox vanuit de DOM
    bedienbaarChecklistCheckboxes.push(checkbox);
    //verander de checked waarde van de checkboxes aan de hand van de bijbehorende value (uit de localStorage of standaard false)
    // checkboxesBedienbaar[bedienbaarChecklistCheckboxes.indexOf(checkbox)].checked = bedienbaarChecklistValues[bedienbaarChecklistCheckboxes.indexOf(checkbox)];
    checkbox.addEventListener("change", function () {
        //verander de progressie van het principe aan de hand van de (handmatig) aangevinkte checkboxes
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        //pas de bijbehorende value aan aan de hand van de huidige checkox value
        bedienbaarChecklistValues[bedienbaarChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        //maak of verander de localStorage met de actuele values
        localStorage.setItem("bedienbaarProgression", JSON.stringify(bedienbaarChecklistValues));
    });
    //verander de progressie van het principe aan de hand van de (automatisch) aangevinkte checkboxes
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesBegrijpelijk.forEach(function (checkbox) {
    //vul de Array met de huidige checkbox vanuit de DOM
    begrijpelijkChecklistCheckboxes.push(checkbox);
    //verander de checked waarde van de checkboxes aan de hand van de bijbehorende value (uit de localStorage of standaard false)
    // checkboxesBegrijpelijk[begrijpelijkChecklistCheckboxes.indexOf(checkbox)].checked = begrijpelijkChecklistValues[begrijpelijkChecklistCheckboxes.indexOf(checkbox)];
    checkbox.addEventListener("change", function () {
        //verander de progressie van het principe aan de hand van de (handmatig) aangevinkte checkboxes
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        //pas de bijbehorende value aan aan de hand van de huidige checkox value
        begrijpelijkChecklistValues[begrijpelijkChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        //maak of verander de localStorage met de actuele values
        localStorage.setItem("begrijpelijkProgression", JSON.stringify(begrijpelijkChecklistValues));
    });
    //verander de progressie van het principe aan de hand van de (automatisch) aangevinkte checkboxes
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesRobuust.forEach(function (checkbox) {
    //vul de Array met de huidige checkbox vanuit de DOM
    robuustChecklistCheckboxes.push(checkbox);
    //verander de checked waarde van de checkboxes aan de hand van de bijbehorende value (uit de localStorage of standaard false)
    // checkboxesRobuust[robuustChecklistCheckboxes.indexOf(checkbox)].checked = robuustChecklistValues[robuustChecklistCheckboxes.indexOf(checkbox)];
    checkbox.addEventListener("change", function () {
        //verander de progressie van het principe aan de hand van de (handmatig) aangevinkte checkboxes
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        //pas de bijbehorende value aan aan de hand van de huidige checkox value
        robuustChecklistValues[robuustChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        //maak of verander de localStorage met de actuele values
        localStorage.setItem("robuustProgression", JSON.stringify(robuustChecklistValues));
    });
    //verander de progressie van het principe aan de hand van de (automatisch) aangevinkte checkboxes
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

function changeProgression(checkbox, principe) {
    var progression = checkbox.closest('.richtlijnen').querySelectorAll('input[type=checkbox]:checked').length;

    if (principe === "waarneembaar") {
        document.getElementById("waarneembaar-progressie-balk").value = progression;
        document.getElementById("waarneembaar-progressie").innerHTML = progression;
    }

    if (principe === "bedienbaar") {
        document.getElementById("bedienbaar-progressie-balk").value = progression;
        document.getElementById("bedienbaar-progressie").innerHTML = progression;
    }

    if (principe === "begrijpelijk") {
        document.getElementById("begrijpelijk-progressie-balk").value = progression;
        document.getElementById("begrijpelijk-progressie").innerHTML = progression;
    }

    if (principe === "robuust") {
        document.getElementById("robuust-progressie-balk").value = progression;
        document.getElementById("robuust-progressie").innerHTML = progression;
    }

    console.log(principe, progression);
}