# Development

### Link to Deployed Website

https://yoked-llama-243-1300-bakery-dev.vercel.app/

### Goal and Value of the Application

The application is a bakery menu. Users can use this menu to learn more about their options ahead of time, have a more personal view even when within the bakery, or as a basis before they call and start ordering. Because this menu is customisable, users can filter what items are displayed, and in what order, to get a better grasp of what they'd want to order from this bakery in a quick and easy way.

### Usability Principles Considered

**Customisability.** Instead of forcing users to only view the menu in one specific way, I gave them the option of changing the order of the displayed items, based on how they chose to sort everything. I also provided them with filtering options, including one customizable filtering option, which was only displaying items that are favorited.

**Forgiveness.** It is easy for users to toggle back to previous sort orders or filter options by simply switching which radio options they leave checked/unchecked. It is also fairly simple for users to un-favorite an item they previously favorited: they just have to click "Remove from Favorites." 

**Consistency & Predictability.** All menu cards are the same react component, so images are located in the same part of the card, and information about the menu item is also organized with the same system/a clear hierarchy.

**Accuracy.** The total price for all favorited items is calculated appropriately, and all sort orders/filters are accurate and have the data they use for this organization clearly displayed on the menu cards/implicitly based on how items are initially organized (this is only in reference to sorting by popularity).

### Organization of Components

The entire app is encapsulated in an `<App />` component, which contains a `<Settings />` component for the settings sidebar and the `<Menu />` component for displaying all the items the user wants to see. The `<Settings />` component is composed of several `<RadioOption />` and `<CheckbockOption />` components, which are used to toggle the sorting and filtering options. In addition, `<Settings />` displays information about the total price of favorited items. `<Menu />` displays a series of `<MenuCard />` components, which contain information about the item as well as an option to favorite it.

### How Data is Passed Down Through Components

The `<App />` component contains the data about the full menu in its state, as well as a list of what items to display. It passes down the hook to edit the data to be displayed to the `<Settings />` and `<Menu />` components, as well as information about the full menu to be used as a basis. In `<Menu />`, the function to edit the data to be displayed only affects what items are favorited. This function to update which items are favorited is then passed down to the `<MenuCard />` components, as well.

### How the User Triggers State Changes

A user can trigger state changes by clicking on the "Add to Favorites"/"Remove from Favorites" button attached to the card for every item. This will change whether the item is favorited, which affects the total displayed Favorites Price. A user can also trigger state changes by toggling the radio option selected in "Sort By," thus re-arranging the order in which these menu items are displayed. Users can also change what they check under the "Types," "Dietary Restriction," and "Other" section, which changes the filters set in the state and also the items that will be displayed, given these restrictions.
