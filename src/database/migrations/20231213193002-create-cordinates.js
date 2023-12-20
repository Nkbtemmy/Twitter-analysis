"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Coardinates", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT,
			},
			longitude: {
				type: Sequelize.DECIMAL(10, 7),
				allowNull: false,
			},
			latitude: {
				type: Sequelize.DECIMAL(10, 7),
				allowNull: false,
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("Coardinates");
	},
};
