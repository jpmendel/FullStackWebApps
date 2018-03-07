const TEAM_NAMES = [
  "The Wolf Pack",
  "The Goodest Boys",
  "The Ruffians",
  "Bark Nation",
  "The Fetch Champions"
];

var dogName1;
var dogName2;
var dogName3;

function createDogDropdowns() {
  fetch("http://dog.ceo/api/breeds/list")
    .then((response) => response.json())
    .then((data) => {
      let dogDropdown1 = document.querySelector("#dog_select-dropdown_options1");
      let dogDropdown2 = document.querySelector("#dog_select-dropdown_options2");
      let dogDropdown3 = document.querySelector("#dog_select-dropdown_options3");
      let htmlInsert = "";
      for (dog of data.message) {
        let capitalizedDog = dog.charAt(0).toUpperCase() + dog.slice(1);
        htmlInsert += `<a class="dropdown-item" href="javascript:void(0);">${capitalizedDog}</a>`
      }
      dogDropdown1.innerHTML = htmlInsert;
      dogDropdown2.innerHTML = htmlInsert;
      dogDropdown3.innerHTML = htmlInsert;

      for (dogItem of document.querySelectorAll("#dog_select-dropdown_options1 .dropdown-item")) {
        dogItem.addEventListener("click", onDogTypeSelected1);
      }

      for (dogItem of document.querySelectorAll("#dog_select-dropdown_options2 .dropdown-item")) {
        dogItem.addEventListener("click", onDogTypeSelected2);
      }

      for (dogItem of document.querySelectorAll("#dog_select-dropdown_options3 .dropdown-item")) {
        dogItem.addEventListener("click", onDogTypeSelected3);
      }
    });
}

function onDogTypeSelected1(event) {
  dogName1 = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName1, 1);
}

function onDogTypeSelected2(event) {
  dogName2 = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName2, 2);
}

function onDogTypeSelected3(event) {
  dogName3 = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName3, 3);
}

function onDogTypeSelected(dogName, number) {
  fetch(`http://dog.ceo/api/breed/${dogName}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        let imageElement = document.querySelector(`#dog_select-image${number}`);
        imageElement.src = data.message;
        createTeamName();
      }
    })
    .catch((error) => console.log("ERROR: " + error));
}

function createTeamName() {
  if (dogName1 && dogName2 && dogName3) {
    let index = dogName1.charCodeAt(0) + dogName2.charCodeAt(0) + dogName3.charCodeAt(0);
    let teamName = TEAM_NAMES[index % TEAM_NAMES.length];
    let nameElement = document.querySelector("#dog_select-team_name");
    nameElement.innerHTML = teamName;
  }
}

function run() {
  createDogDropdowns();
}

window.onload = run;
