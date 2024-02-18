window.addEventListener("load", solve);

function solve() {
  let nameField = document.getElementById("snowman-name");
  let heightField = document.getElementById("snowman-height");
  let locationField = document.getElementById("location"); 
  let creatorField = document.getElementById("creator-name");
  let specialAttitudeField = document.getElementById("special-attribute");
  let addButton = document.querySelector(".add-btn"); 

  addButton.addEventListener("click", onAdd);

  let snowmanPreview = document.querySelector(".snowman-preview");
  let snowList = document.querySelector(".snow-list");

  function onAdd(event) {
    event.preventDefault();

    let name = nameField.value;
    let height = heightField.value;
    let location = locationField.value;
    let creator = creatorField.value;
    let specialAttitude = specialAttitudeField.value;

    if (name == "" || height == "" || location == "" || creator == "" || specialAttitude == "") {
      return;
    }

    addButton.parentElement.reset();
    addButton.disabled = true;
    const result = createSnowmenPreview(name, height, location, creator, specialAttitude);
    snowmanPreview.appendChild(result);
  }

  function createSnowmenPreview(name, height, location, creator, specialAttitude) {
    let elementLi = document.createElement("li");
    elementLi.className = "snowman-info";
    let elementArt = document.createElement("article");
    elementArt.innerHTML = `<p>Name: ${name}</p> <p>Height: ${height}</p> <p>Location: ${location}</p><p>Creator: ${creator}</p><p>Attribute: ${specialAttitude}</p>`;
    elementLi.appendChild(elementArt);

    let divContainer = document.createElement("div");
    divContainer.className = "btn-container";
    let editBtn = document.createElement("button");
    editBtn.textContent = ("Edit")
    editBtn.className = "edit-btn";
    divContainer.appendChild(editBtn);

    let nextBtn = document.createElement("button");
    nextBtn.textContent = ("Next");
    nextBtn.className = "next-btn";
    divContainer.appendChild(nextBtn);
    elementLi.appendChild(divContainer)

    editBtn.addEventListener("click", () => onEditClick(name, height, location, creator, specialAttitude));
    nextBtn.addEventListener("click", () => onNext(name, height, location, creator, specialAttitude));

    return elementLi; // Add this line to return the created element
  }

  function onEditClick(name, height, location, creator, specialAttitude) {
    document.getElementById("snowman-name").value = name;
    document.getElementById("snowman-height").value = height;
    document.getElementById("location").value = location;
    document.getElementById("creator-name").value = creator;
    document.getElementById("special-attribute").value = specialAttitude;
    addButton.disabled = false;
    snowmanPreview.textContent = "";
  }

  function onNext(name, height, location, creator, specialAttitude) {
    snowmanPreview.textContent = "";

    let elementLi = document.createElement("li");
    elementLi.className = "snowman-content";

    let elementArt = document.createElement("article");
    elementArt.innerHTML = `<p>Name:  ${name}</p> <p>Height:  ${height}</p> <p>Location:  ${location}</p><p>Creator:  ${creator}</p><p>Attribute:  ${specialAttitude}</p>`;

    let sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.className = "send-btn";
    elementArt.appendChild(sendBtn);
    elementLi.appendChild(elementArt);

    sendBtn.addEventListener("click", onSend);

    snowList.appendChild(elementLi);
  }

  function onSend(event) {
    let main = document.getElementById("hero");
    main.remove();
    let body = document.querySelector(".body");
    let img = document.getElementById("back-img");
    img.removeAttribute("hidden");
    // img.style.display = "block";

    let backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.textContent = "Back"
    body.appendChild(backBtn);
    backBtn.addEventListener("click", () => window.location.reload());

  }
}
