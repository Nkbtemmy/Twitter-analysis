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
			coordinates: { type: Sequelize.ARRAY(Sequelize.NUMBER) },
			longitude: {
				type: Sequelize.DECIMAL(10, 7), // Store longitude with high precision
				allowNull: false,
			},
			latitude: {
				type: Sequelize.DECIMAL(10, 7), // Store latitude with high precision
				allowNull: false,
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("Coardinates");
	},
};
