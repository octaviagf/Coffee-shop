const coffeeShop = {
  name: "Coffee Shop",
  location: "Av. Independencia 955",
  openingHours: {
    open: 7,
    close: 3,
  },
  openingDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  menus: {
    starterMenu: ["Americano", "Espresso", "Cappuccino"],
    specialMenu: ["Latte", "Chai latte", "Cortadito"],
  },
};

//1.

const showingMenu = function () {
  const mainMenu = [
    ...coffeeShop.menus.starterMenu,
    ...coffeeShop.menus.specialMenu,
  ];
  alert("This is our menu: ");
  for (const [num, product] of mainMenu.entries()) {
    alert(`${num + 1}. ${product}`);
  }
};
showingMenu();

//3.

const keepOrdering = function () {
  let answer = prompt("Would you like to keep ordering?");

  if (answer === "") {
    alert("No empty fields.");
    answer = prompt("Would you like to keep ordering?");
  } else if (answer === "yes") {
    order();
  } else if (answer === "no") {
    alert("Your order has been made!");
  }
};

//2.

const order = function () {
  const mainMenu = [
    ...coffeeShop.menus.starterMenu,
    ...coffeeShop.menus.specialMenu,
  ];

  let product = prompt("What's your order?");
  console.log(product);

  if (product === "") {
    alert("No empty fields.");
    keepOrdering();
  } else if (mainMenu.includes(product)) {
    keepOrdering();
  } else {
    alert("Sorry, we currently don't have that product :(");
    showingMenu();
    keepOrdering();
  }
};
order();
