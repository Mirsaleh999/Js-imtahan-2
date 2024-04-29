function addItemToList(text) {
    const listItem = createListItem(text);
    listContainer.appendChild(listItem);
}

function createListItem(text) {
    const listItem = document.createElement("li");
    const listItemText = document.createElement("p");
    const removeButton = createButton("Sil");
    const readyButton = createButton("Xett cek");

    listItemText.innerText = text;
    listItem.appendChild(listItemText);
    listItem.appendChild(removeButton);
    listItem.appendChild(readyButton);

    readyButton.addEventListener("click", function () {
        markAsReady(listItemText);
    });

    removeButton.addEventListener("click", function () {
        removeListItem(listItem);
    });

    return listItem;
}

function createButton(text) {
    const button = document.createElement("button");
    button.innerText = text;
    return button;
}

function markAsReady(textElement) {
    textElement.style.textDecoration = "line-through";
}

function removeListItem(listItem) {
    listItem.remove();
}

function validateInput() {
    return input.value.trim().length > 0;
}

function handleButtonClick() {
    if (validateInput()) {
        addItemToList(input.value);
        input.value = "";
    } else {
        alert("Bos qalmamalidir!");
    }
}

const input = document.getElementById("inpt");
const addButton = document.getElementById("buttom-m");
const listContainer = document.getElementById("list-m");

addButton.addEventListener("click", handleButtonClick);
