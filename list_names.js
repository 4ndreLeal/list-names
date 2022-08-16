let nomes = ["André", "Luciana", "Daniel", "Manoel"];
let list = document.getElementById("myList");
nomes.forEach((nome) => {
  let newList = document.createElement("li");
  newList.innerText = nome;
  list.appendChild(newList);
});