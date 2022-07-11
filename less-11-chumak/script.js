const textResultArea = document.querySelector("#textarea");
const textEditArea = document.querySelector("#textarea2");
const hiddenArea = document.querySelector(".hidden-container");
const btnEdit = document.querySelector("#edit");
const btnStyle = document.querySelector("#style");
const btnAdd = document.querySelector("#add");
const btnSave = document.querySelector("#save");
const styleBox = document.querySelector(".style-box");
const fontSizeInput = document.getElementsByName("font-size-radio");
const fontFamilyInput = document.getElementsByName("font-family");
const btnTextColor = document.querySelector("#text-color");
const btnBackgroundColor = document.querySelector("#background-color");
const hiddenColorsBox = document.querySelector(".color-variable-box");
const colorItem = document.querySelectorAll(".color-item");
const inputBold = document.querySelector("#bold");
const inputCursive = document.querySelector("#cursive");
const addBox = document.querySelector(".add-box");
const addVariableBox = document.querySelector(".add-variable-hidden-box");
const addTableForm = document.querySelector(".add-table");
const addListForm = document.querySelector(".add-list-box");
const addVariableHiddenBox = document.querySelector(".add-variable-hidden-box");
const addtableTr = document.querySelector("#table-tr");
const addTableTd = document.querySelector("#table-td");
const tableWidthTD = document.querySelector("#table-widthTD");
const tableHeigthTD = document.querySelector("#table-heightTD");
const tableBorderWidth = document.querySelector("#border-width");
const tableBorderType = document.querySelector("#type-border");
const tableBorderColor = document.querySelector("#color-border");
const btnCreateTable = document.querySelector("#btn-create-table");

btnEdit.addEventListener("click", () => {
  hiddenArea.style.display = "block";
  styleBox.style.display = "none";
  textEditArea.style.display = "block";
  textEditArea.value = textResultArea.innerHTML;
});

btnSave.addEventListener("click", () => {
  textResultArea.innerHTML = textEditArea.value;
  textEditArea.style.display = "none";
});

btnStyle.addEventListener("click", () => {
  styleBox.style.display = "block";
  textEditArea.style.display = "none";
  hiddenArea.style.display = "block";
  addTableForm.style.display = "none";
  addListForm.style.display = "none";
  addVariableHiddenBox.style.display = "none";
});
// style-box //

//font-size
for (el of fontSizeInput) {
  el.addEventListener("click", (event) => {
    textResultArea.style.fontSize = event.target.value;
  });
}

//font-family
for (el of fontFamilyInput) {
  el.addEventListener("click", (event) => {
    textResultArea.style.fontFamily = event.target.value;
  });
}
// colors for text and background
btnTextColor.addEventListener("click", () => {
  hiddenColorsBox.style.display = "flex";

  colorItem.forEach((blockColor) => {
    let fontColor = blockColor.getAttribute(`color-value`);
    blockColor.style.background = fontColor;
    blockColor.addEventListener("click", () => {
      textResultArea.style.color = fontColor;
    });
  });
});

btnBackgroundColor.addEventListener("click", () => {
  hiddenColorsBox.style.display = "flex";

  colorItem.forEach((blockColor) => {
    let backColor = blockColor.getAttribute(`back-value`);
    blockColor.style.background = backColor;
    blockColor.addEventListener("click", () => {
      document.querySelector(".textaria-container ").style.background =
        backColor;
    });
  });
});

// style text bold cursive

inputBold.addEventListener("click", () => {
  textResultArea.style.fontWeight = "bold";
});

inputCursive.addEventListener("click", () => {
  textResultArea.style.fontStyle = "italic ";
});

// button Add

btnAdd.addEventListener("click", () => {
  addBox.style.display = "block";
  textEditArea.style.display = "none";
  btnAdd.style.display = "none";
  btnSave.style.display = "none";
  addVariableBox.style.display = "block";
});

document.querySelector("#add-radio-table").addEventListener("click", () => {
  addTableForm.style.display = "block";
  addListForm.style.display = "none";
});

document.querySelector("#add-radio-list").addEventListener("click", () => {
  addTableForm.style.display = "none";
  addListForm.style.display = "block";
});

btnCreateTable.addEventListener("click", () => {
  let table = document.createElement("table");
  for (let i = 0; i < addtableTr.value; i++) {
    let tr = document.createElement("tr");
    for (let i = 0; i < addTableTd.value; i++) {
      let td = document.createElement("td");
      td.append("td");
      tr.append(td);
      td.style.width = tableWidthTD.value + "px";
      td.style.height = tableHeigthTD.value + "px";
      td.style.border = `${tableBorderWidth.value} + 'px' ${tableBorderType.value} + 'px'  ${tableBorderColor.value} + 'px;`;
    }
    table.append(tr);
  }
  textResultArea.append(table);
});
