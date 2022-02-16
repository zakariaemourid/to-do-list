const input = document.getElementById("add-item");
var textToremember = "";
let itemsList = [
  { text: "learn more code", id: "0" },
  { text: "vaccum", id: "1" },
  { text: "hello", id: "2" },
];

function loadItems() {
  let itemsHtml = "";
  itemsList.forEach((item) => {
    itemsHtml += `<div class="item">
          <div class="to-do" id=${item.id} >${item.text}</div>
          <div class="edit-delete">
            <button class="edit" id= e${item.id} onclick="makeInput(this.id)">edit</button>
            <button class="delete" id=c${item.id} onclick="deleteItem(this.id)">X</button>
          </div>
        </div>`;
  });

  items.innerHTML = itemsHtml;
}

function makeInput(editId) {
  document.getElementById("btn-edit").style.display = "block";
  document.getElementById("btn-add").style.display = "none";
  for (var i = 0; i < itemsList.length; i++) {
    if (itemsList[i].id == editId[1]) {
      input.value = itemsList[i].text;
      textToremember = itemsList[i].text;
      break;
    }
  }
}
const edit_item = document
  .getElementById("btn-edit")
  .addEventListener("click", function () {
    for (var i = 0; i < itemsList.length; i++) {
      if (itemsList[i].text == textToremember) {
        itemsList[i].text = input.value;
        document.getElementById("btn-edit").style.display = "none";
        document.getElementById("btn-add").style.display = "block";
        loadItems();
        input.value = "";
        break;
      }
    }
  });
const items = document.getElementById("items");
const add_item = document
  .getElementById("btn-add")
  .addEventListener("click", function () {
    if (input.value == "") {
      window.alert("type something");
    } else if (itemsList.length == 0) {
      itemsList.push({
        text: input.value,
        id: 0,
      });
    } else {
      itemsList.push({
        text: input.value,
        id: parseInt(itemsList[itemsList.length - 1].id) + 1,
      });
    }
    input.value = "";
    loadItems();
  });

function deleteItem(idItem) {
  for (var i = 0; i < itemsList.length; i++) {
    if (itemsList[i].id == idItem[1]) {
      itemsList.splice(i, 1);
      break;
    }
  }
  loadItems();
}
loadItems();
