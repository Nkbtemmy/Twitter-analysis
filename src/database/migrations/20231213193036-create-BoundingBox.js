module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("BoundingBoxes", {
			id: {
				type: Sequelize.STRING, // Use string to store unique identifier
				primaryKey: true,
			},
			placeId: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: "Places",
					key: "id",
				},
			},
			coordinates: {
				type: Sequelize.JSON, // Store GeoJSON polygon coordinates as JSON
				allowNull: false,
			},
			type: {
				type: Sequelize.STRING, // Store GeoJSON type (e.g., "Polygon")
			},
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable("BoundingBoxes");
	},
};
