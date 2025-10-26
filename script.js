const coffeeMenu = [
  { name: "Espresso", price: 2.5 },
  { name: "Cappuccino", price: 3.0 },
  { name: "Latte", price: 3.5 },
  { name: "Mocha", price: 4.0 }
];

const coffeeList = document.getElementById("coffee-list");
const coffeeSelect = document.getElementById("coffee");
const form = document.getElementById("order-form");
const confirmation = document.getElementById("confirmation");

coffeeMenu.forEach(coffee => {
  const li = document.createElement("li");
  li.textContent = `${coffee.name} - $${coffee.price.toFixed(2)}`;
  coffeeList.appendChild(li);

  const option = document.createElement("option");
  option.value = coffee.name;
  option.textContent = coffee.name;
  coffeeSelect.appendChild(option);
});

form.addEventListener("submit", e => {
  e.preventDefault();
  const coffee = coffeeSelect.value;
  const size = document.getElementById("size").value;
  confirmation.textContent = `✅ Your ${size} ${coffee} is on the way!`;
  form.reset();
});