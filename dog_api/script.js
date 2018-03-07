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
  let dogName = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName, 1);
}

function onDogTypeSelected2(event) {
  let dogName = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName, 2);
}

function onDogTypeSelected3(event) {
  let dogName = event.target.innerHTML.toLowerCase();
  onDogTypeSelected(dogName, 3);
}

function onDogTypeSelected(dogName, number) {
  fetch(`http://dog.ceo/api/breed/${dogName}/images/random`)
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then((data) => {
      let imageElement = document.querySelector(`#dog_select-image${number}`)
      let imageURL = URL.createObjectURL(data)
      console.log(imageURL);
      imageElement.backgroundImage = imageURL;
    })
    .catch((error) => console.log("ERROR: " + error));
}

function run() {
  createDogDropdowns();
}

window.onload = run;
