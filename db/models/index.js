'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

// This is also probably a good place for you to set up your associations
const db = require('../index');
const sequelize = require('sequelize');

const Collection = db.define('collection', {
	name: {
		type: sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true
		}
	},
	image: {
		type: sequelize.STRING,
		allowNull: false
	}
})

const Cocktails = db.define('cocktails', {
	name: {
		type: sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	url: {
		type: sequelize.STRING,
		allowNull: false,
		validate: {
			isUrl: true
		}
	}
})

Collection.hasMany(Cocktails, {
	onDelete: 'cascade',
	hooks: true
})

Cocktails.belongsTo(Collection);

module.exports = {
  Collection,
  Cocktails,
  db
};
