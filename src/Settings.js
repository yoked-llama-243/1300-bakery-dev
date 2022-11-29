import { useEffect, useState } from "react";
import { sortOptions, typeOptions, restrictionOptions } from "./Options";

function SelectInput({ type, checked, name, value, label, onChange }) {
  const id = `${name}__${value}`;
  return (
    <div>
      <label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value, checked)}
        />
        {label}
      </label>
    </div>
  );
}

function RadioOption(props) {
  return <SelectInput {...props} type="radio" />;
}

function CheckboxOption(props) {
  return <SelectInput {...props} type="checkbox" />;
}

export default function Settings({ fullMenu, setMenu }) {
  const [sortBy, setSortBy] = useState("popularity");
  const [onlyShowFavorites, setOnlyShowFavorites] = useState(false);
  const [typeFilters, setTypeFilters] = useState([]);
  const [restrictionFilters, setRestrictionFilters] = useState([]);

  let favoritesPrice = 0.0;
  for (const item of fullMenu) {
    if (item.favorited) {
      favoritesPrice += item.price;
    }
  }

  useEffect(() => {
    let newMenu = [];
    for (const menuItem of fullMenu) {
      let itemValid = true;
      for (const type of typeFilters) {
        if (!menuItem.types.includes(type)) {
          itemValid = false;
          break;
        }
      }
      for (const restriction of restrictionFilters) {
        if (!menuItem.dietary_restrictions.includes(restriction)) {
          itemValid = false;
          break;
        }
      }
      if (itemValid) {
        newMenu.push(menuItem);
      }
    }
    if (onlyShowFavorites) {
      newMenu = newMenu.filter((menuItem) => menuItem.favorited);
    }
    newMenu.sort((menuItem1, menuItem2) => menuItem1[sortBy] - menuItem2[sortBy]);
    setMenu(newMenu);
  }, [sortBy, typeFilters, restrictionFilters, onlyShowFavorites]);

  const sortChange = (value, currentlyChecked) => {
    if (!currentlyChecked) {
      setSortBy(value);
    }
  };

  const typeChange = (value, currentlyChecked) => {
    let newTypeFilters = typeFilters;
    if (currentlyChecked) {
      newTypeFilters = typeFilters.filter((typeValue) => typeValue !== value);
    } else {
      newTypeFilters = typeFilters.concat(value);
    }
    setTypeFilters(newTypeFilters);
  };

  const restrictionChange = (value, currentlyChecked) => {
    let newRestrictionFilters = restrictionFilters;
    if (currentlyChecked) {
      newRestrictionFilters = restrictionFilters.filter(
        (restrictionValue) => restrictionValue !== value
      );
    } else {
      newRestrictionFilters = restrictionFilters.concat(value);
    }
    setRestrictionFilters(newRestrictionFilters);
  };

  const favoriteChange = (value, currentlyChecked) => {
    setOnlyShowFavorites(!currentlyChecked);
  };
  return (
    <div className="settings">
      <div className="settings-section">
        <h3>Sort By</h3>
        {sortOptions.map((option, i) => (
          <RadioOption
            key={i}
            checked={sortBy === option.value}
            name={"sort-by"}
            value={option.value}
            label={option.label}
            onChange={sortChange}
          />
        ))}
      </div>
      <div className="settings-section">
        <h3>Types</h3>
        {typeOptions.map((option, i) => (
          <CheckboxOption
            key={i}
            checked={typeFilters.includes(option.value)}
            name={"sort-by"}
            value={option.value}
            label={option.label}
            onChange={typeChange}
          />
        ))}
      </div>
      <div className="settings-section">
        <h3>Dietary Restriction</h3>
        {restrictionOptions.map((option, i) => (
          <CheckboxOption
            key={i}
            checked={restrictionFilters.includes(option.value)}
            name={"sort-by"}
            value={option.value}
            label={option.label}
            onChange={restrictionChange}
          />
        ))}
      </div>
      <div className="settings-section">
        <h3>Other</h3>
        <CheckboxOption
          checked={onlyShowFavorites}
          name={"sort-by"}
          value={"favorites"}
          label={"Favorites"}
          onChange={favoriteChange}
        />
      </div>
      <div className="settings-section">
        Favorites Price: ${favoritesPrice}
      </div>
    </div>
  );
}
