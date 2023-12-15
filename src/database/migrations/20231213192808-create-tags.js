"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tags", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.BIGINT,
			},
			name: {
				type: Sequelize.STRING,
			},
		});
	},
	down: async (queryInterface) => {
		await queryInterface.dropTable("Tags");
	},
};
