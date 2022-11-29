import { typeOptions, restrictionOptions } from "./Options";

const getDisplayType = (value) => {
  for (const typeOption of typeOptions) {
    if (typeOption.value === value) {
      return typeOption.label;
    }
  }
  return value;
}

const getDisplayRestriction = (value) => {
  for (const restrictionOption of restrictionOptions) {
    if (restrictionOption.value === value) {
      return restrictionOption.label;
    }
  }
  return value;
}

function MenuCard({ types, dietary_restrictions, description, image, name, price, calories, favorited, toggleFavorites, id }) {
  const colors = { cake: "#F9DADD", pastry: "#F9F6DA", bread: "#D0ECFF" };
  return (
    <div className="menu-card" style={{ backgroundColor: colors[types[0]] }}>
      <div className="menu-text">
        <h3 className="name">{name}</h3>
        <div className="divider" />
        <div className="button-row">
          <div className="price-and-calories">
            Price: ${price} Calories: {calories}
          </div>
          <div className="type">
            Type: {types.map(getDisplayType).join(", ")}
          </div>
          <div className="dietary-restrictions">
            Dietary Restrictions: {dietary_restrictions.map(getDisplayRestriction).join(", ")}
          </div>
          <div className="description">
            {description}
          </div>
          <button onClick={() => toggleFavorites(id)}>{favorited ? "Remove from" : "Add to"} Favorites</button>
        </div>
      </div>
      <div className="food-icon-wrapper">
        <img className="food-icon" src={image} />
      </div>
    </div>
  );
}

export default function Menu({ menu, toggleFavorites }) {
  return (
    <div className="menu">
      {menu.length > 0
        ? menu.map((item, id) => (
            <MenuCard key={id} {...item} id={id} toggleFavorites={toggleFavorites} />
          ))
        : "Nothing here just yet!"}
    </div>
  );
}
