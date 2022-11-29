import Menu from "./Menu";
import Settings from "./Settings";
import "./App.css";
import { useState } from "react";

function App() {
  const [fullMenu, setFullMenu] = useState([
    {
      image: "/bakery-images/cinammon-apple-turnover.png",
      name: "Cinnamon Apple Turnover",
      price: 2.5,
      calories: 120,
      types: ["pastry"],
      dietary_restrictions: ["nut_free"],
      description:
        "Our famous apple turnovers are spiced with cinnamon and nutmeg, a perfect pastry for a cold day out.",
      popularity: 1,
      favorited: false,
    },
    {
      image: "/bakery-images/classic-french-brioche.png",
      name: "Classic French Brioche",
      price: 13.0,
      calories: 1300,
      types: ["bread"],
      dietary_restrictions: ["nut_free"],
      description:
        "Deliciously crisp on the outside and buttery soft on the inside, our brioche loaves will be in an instant hit in your home.",
      popularity: 2,
      favorited: false,
    },
    {
      image: "/bakery-images/rosemary-ciabatta.png",
      name: "Rosemary Ciabatta",
      price: 4.0,
      calories: 1230,
      types: ["bread"],
      dietary_restrictions: ["dairy_free", "nut_free"],
      description:
        "Our Rosemary Ciabatta is truly something special. Baked from a 150 year old recipe, it’ll be the star at your table anyday.",
      popularity: 3,
      favorited: false,
    },
    {
      image: "bakery-images/coconut-macaroons.png",
      name: "Coconut Macaroons",
      price: 4.0,
      calories: 97,
      types: ["pastry"],
      dietary_restrictions: ["dairy_free", "nut_free"],
      description:
        "It’s sweet and tastes like coconut. What more could you want? This gluten free treat is sold by the half-dozen.",
      popularity: 4,
      favorited: false,
    },
    {
      image: "bakery-images/blueberry-pound-cake.png",
      name: "Blueberry Pound Cake",
      price: 26.0,
      calories: 930,
      types: ["cake"],
      dietary_restrictions: ["nut_free]"],
      description:
        "A delightful seasonal gluten free pound cake with fresh blueberries baked in, perfect for a breakfast treat, afternoon snack, or delicious dessert.",
      popularity: 5,
      favorited: false,
    },
    {
      image: "bakery-images/oatmeal-cookies.png",
      name: "Oatmeal Cookies",
      price: 2.5,
      calories: 80,
      types: ["pastry"],
      dietary_restrictions: ["gluten_free"],
      description:
        "Crispy on the outside and fantastically chewy on the inside, our gluten free oatmeal cookies are better than any chocolate chip cookie around!",
      popularity: 6,
      favorited: false,
    },
    {
      image: "bakery-images/orange-muffins.png",
      name: "Orange Muffins",
      price: 4.5,
      calories: 130,
      types: ["pastry"],
      dietary_restrictions: ["nut_free"],
      description:
        "Experience the delicate flavors of vanilla and citrus from fresh orange juice and zest! This muffin is going to blow you away!",
      popularity: 7,
      favorited: false,
    },
    {
      image: "bakery-images/apricot-cheesecake.png",
      name: "Apricot Cheesecake",
      price: 40.0,
      calories: 1300,
      types: ["cake"],
      dietary_restrictions: ["gluten_free", "nut_free"],
      description:
        "Sweet-tart apricot jam is the perfect counterpoint to this gluten free cheesecake. Infused with Madagascar vanilla, this is a showstopper.",
      popularity: 8,
      favorited: false,
    },
    {
      image: "bakery-images/maple-pecan-croissant.png",
      name: "Maple Pecan Croissant",
      price: 3.5,
      calories: 110,
      types: ["pastry"],
      dietary_restrictions: ["dairy_free"],
      description:
        "Completely sinful, buttery with a sweet surprising crunch. Our flagship product, these croissants are incredible at any time.",
      popularity: 9,
      favorited: false,
    },
    {
      image: "bakery-images/pumpkin-pie.png",
      name: "Pumpkin Pie",
      price: 28.0,
      calories: 2400,
      types: ["pastry"],
      dietary_restrictions: ["gluten_free", "nut_free"],
      description:
        "A rich, spicy gluten free pie that has a bright pumpkin flavor. This brings Fall right to your dining table.",
      popularity: 10,
      favorited: false,
    },
    {
      image: "bakery-images/strawberry-shortcake.png",
      name: "Strawberry Shortcake",
      price: 37.0,
      calories: 1640,
      types: ["cake"],
      dietary_restrictions: ["nut_free"],
      description:
        "Made with perfectly fluffy and tender buttermilk biscuits, sweetened fresh strawberry slices and a rich, light as air whipped cream.",
      popularity: 11,
      favorited: false,
    },
    {
      image: "bakery-images/croissant.png",
      name: "Croissant",
      price: 2.5,
      calories: 110,
      types: ["cake"],
      dietary_restrictions: ["nut_free"],
      description:
        "Be captivated by the tantalizing scent of our freshly baked, buttery croissants. Seriously delicious and we'll have a fresh batch waiting for you at any time of the day.",
      popularity: 12,
      favorited: false,
    },
  ]);

  const [menu, setMenu] = useState(fullMenu);

  const toggleFavorites = (id) => {
    const newMenu = menu.filter(j => true);
    newMenu[id].favorited = !newMenu[id].favorited;
    const updatedFullMenu = [];
    for (const menuItem of fullMenu) {
      updatedFullMenu.push(menuItem);
    }
    setFullMenu(updatedFullMenu);
    setMenu(newMenu);
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="title">
          <img className="cookie-icon" src="/images/cookie.png" />
          <h1>Bake-fest of Champions</h1>
        </div>
        <div className="body-container">
          <Settings fullMenu={fullMenu} setMenu={setMenu} />
          <Menu menu={menu} toggleFavorites={toggleFavorites} />
        </div>
      </div>
    </div>
  );
}

export default App;
