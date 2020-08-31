class Storage {
  constructor() {
    this.DrinkStorage = {};
  }

  addValue(key, value) {
    this.DrinkStorage[key] = value;
  }

  getValue(key) {
    return this.DrinkStorage[key];
  }

  deleteValue(key) {
    return this.DrinkStorage[key] ? delete this.DrinkStorage[key] : false;
  }

  getKeys() {
    return Object.keys(this.DrinkStorage);
  }

  reset() {
    this.DrinkStorage = {};
  }
}

const drinks = new Storage();
drinks.addValue("vodka", "alcash");
drinks.addValue("cola", "cola-coca");
drinks.addValue("coca", "alcash");
drinks.addValue("margo", "alcash");

// drinks.getKeys();
// drinks.getValue("cola");
// drinks.deleteValue("1margo");
// drinks.reset();

const addValueBtn = document.querySelector("#addValueBtn");
const getValueBtn = document.querySelector("#getValueBtn");
const deleteValueBtn = document.querySelector("#deleteValueBtn");
const getKeysBtn = document.querySelector("#getKeysBtn");

addValueBtn.addEventListener("click", () => {
  const title = prompt("title ?");
  const composition = prompt("composition ?");
  drinks.addValue(title, composition);
});

getValueBtn.addEventListener("click", () => {
  const title = prompt("title ?");
  drinks.getValue(title);
  if (drinks.getValue(title)) {
    alert(title + " " + drinks.getValue(title));
  } else alert("no such drink")
});

deleteValueBtn.addEventListener("click", () => {
  const title = prompt("title ?");
  drinks.deleteValue(title);
  alert(title + " is delete")
});

getKeysBtn.addEventListener("click", () => {
  alert(drinks.getKeys());
});

console.log(drinks);