// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const {
  db,
  Collection,
  Cocktails,
} = require('./db/models');

const collectionData = [
  {
    name: 'My Favorites',
    image: '/images/favorites.png'
  },
  {
    name: 'Brunch Go-To',
    image: '/images/brunch.png'
  },
  {
    name: 'Cold Weather',
    image: '/images/coldweather.png'
  }
]

const cocktailsData = [
  {
    name: "Whiskey Sour",
    url: "http://www.epicurious.com/recipes/food/views/whiskey-sour-cocktail"
  },
  {
    name: "French 75",
    url: "http://www.epicurious.com/recipes/food/views/french-75-champagne-cocktail"
  },
  {
    name: "Daiquiri",
    url: "http://www.epicurious.com/recipes/food/views/rum-daiquiri-cocktail"
  },
  {
    name: "Tarocco Spritz",
    url: "http://www.epicurious.com/recipes/food/views/tarocco-spritz"
  },
  {
    name: "Cucumber Gin",
    url: "http://www.epicurious.com/recipes/food/views/cucumber-gin-cocktail"
  },
  {
    name: "Sicilian Slush",
    url: "http://www.epicurious.com/recipes/food/views/the-sicilian-slush"
  },
  {
    name: "Hot Toddy",
    url: "http://www.epicurious.com/recipes/food/views/hot-toddy-51213610"
  },
  {
    name: "Maple Old Fashioned",
    url: "http://www.epicurious.com/recipes/food/views/maple-old-fashioned"
  },
  {
    name: "Boulevardier",
    url: "http://www.bonappetit.com/recipe/boulevardier"
  }
]

const createSeed = () =>
  Promise.all(collectionData.map(item =>
    Collection.create(item)
  ))
    .then(() =>
      Promise.all(cocktailsData.map(item =>
        Cocktails.create(item)
      )))


db
  .sync({ force: true })
  .then(() => {
    console.log("Inserting seed data");
    return createSeed();
  })
  .then(() => {
    console.log("Finished inserting data");
  })
  .catch((err) => {
    console.error("Error inserting data", err, err.stack);
  })
  .finally(() => {
    db.close();
    return null;
  });
