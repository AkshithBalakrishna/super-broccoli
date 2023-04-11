const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 300,
    img: "assets/images/item-1.jpeg",
    desc: `Fluffy and warm, a stack of joy,
    Buttermilk pancakes, the perfect ploy
    For a morning treat, or anytime snack,
    Syrup and butter, on top they stack.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "dinner",
    price: 350,
    img: "assets/images/item-2.jpeg",
    desc: `Two Chicken piece, cheese, and sauce,
    Diner double, a burger boss.
    Bite in and savor the flavor galore,
    Juicy and tasty, always wanting more. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 400,
    img: "assets/images/item-3.jpeg",
    desc: `A monstrous treat, that's what it is,
    Godzilla milkshake, the king of fizz.
    Creamy and sweet, with a mighty roar,
    One sip and you'll come back for more.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 250,
    img: "assets/images/item-4.jpeg",
    desc: `Freshly baked pie, biscuits too,
    Country delight, a home-cooked brew.
    Warm and comforting, a taste of home,
    Savor each bite, never to roam. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 200,
    img: "assets/images/item-5.jpeg",
    desc: `Eggs scrambled, fried, or poached,
    Egg attack, a breakfast coach.
    Protein-packed, to start the day,
    Egg-citing flavors, in every way.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 300,
    img: "assets/images/item-6.jpeg",
    desc: `Creamy filling, chocolate delight,
    Oreo dream, a cookie's flight.
    Twist, lick, and dunk with glee,
    A treat that's sure to make you happy.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 350,
    img: "assets/images/item-7.jpeg",
    desc: `Crispy, salty, sizzling sound,
    Bacon overflow, breakfast renowned.
    Top your eggs or stack it high,
    Bacon love never runs dry.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 500,
    img: "assets/images/item-8.jpeg",
    desc: `Burger and fries, a perfect pair,
    American classic, beyond compare.
    Juicy beef and crispy spuds,
    Satisfy your cravings, no need for buds.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 200,
    img: "assets/images/item-9.jpeg",
    desc: `In times of stress and solitude,
    Quarantine buddy, always imbued.
    Loyal and loving, a furry friend,
    Together till the pandemic's end.`,
  },
];

addEventListener("DOMContentLoaded", showDishes(true));

let buttons = document.getElementsByTagName("button");

for (button of buttons) {
  button.addEventListener("click", () => {
    showDishes(false);
  });
}

function showDishes(initialLoad) {
  let output = ``;
  menu.forEach((item) => {
    let dish = `
 
    <section id="container">
      <nav>
        <img
          src="${item.img}"
          id="mainImg"
        />
      </nav>

      <nav id="content">
        <div id="containerHeading">
          <h4>${item.title}</h4>
          <h4 id="price">₹${item.price}</h4>
        </div>
        <hr />
        <p>
        ${item.desc}
        </p>
      </nav>
    </section>`;

    if (initialLoad) {
      output += dish;
    } else if (event.target.innerHTML.toLowerCase() == item.category) {
      output += dish;
    } else if (event.target.innerHTML.toLowerCase() == "all") {
      output += dish;
    }
    document.getElementById("containers").innerHTML = output;
  });
}
