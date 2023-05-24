var checkboxesWaarneembaar = document.querySelectorAll("#principes #waarneembaar input[type=checkbox]");
var checkboxesBedienbaar = document.querySelectorAll("#principes #bedienbaar input[type=checkbox]");
var checkboxesBegrijpelijk = document.querySelectorAll("#principes #begrijpelijk input[type=checkbox]");
var checkboxesRobuust = document.querySelectorAll("#principes #robuust input[type=checkbox]");

var waarneembaarChecklistCheckboxes = [];
var waarneembaarChecklistValues = new Array(checkboxesWaarneembaar.length);

var bedienbaarChecklistCheckboxes = [];
var bedienbaarChecklistValues = new Array(checkboxesBedienbaar.length);

var begrijpelijkChecklistCheckboxes = [];
var begrijpelijkChecklistValues = new Array(checkboxesBegrijpelijk.length);

var robuustChecklistCheckboxes = [];
var robuustChecklistValues = new Array(checkboxesRobuust.length);

checkboxesWaarneembaar.forEach(function (checkbox) {
    waarneembaarChecklistCheckboxes.push(checkbox);
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        waarneembaarChecklistValues[waarneembaarChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        localStorage.setItem("waarneembaarProgression", JSON.stringify(waarneembaarChecklistValues));
    });
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesBedienbaar.forEach(function (checkbox) {
    bedienbaarChecklistCheckboxes.push(checkbox);
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        bedienbaarChecklistValues[bedienbaarChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        localStorage.setItem("bedienbaarProgression", JSON.stringify(bedienbaarChecklistValues));
    });
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesBegrijpelijk.forEach(function (checkbox) {
    begrijpelijkChecklistCheckboxes.push(checkbox);
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        begrijpelijkChecklistValues[begrijpelijkChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        localStorage.setItem("begrijpelijkProgression", JSON.stringify(begrijpelijkChecklistValues));
    });
    changeProgression(checkbox, checkbox.closest(".richtlijnen").parentElement.id);
});

checkboxesRobuust.forEach(function (checkbox) {
    robuustChecklistCheckboxes.push(checkbox);
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
        robuustChecklistValues[robuustChecklistCheckboxes.indexOf(checkbox)] = checkbox.checked;
        localStorage.setItem("robuustProgression", JSON.stringify(robuustChecklistValues));
    });
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