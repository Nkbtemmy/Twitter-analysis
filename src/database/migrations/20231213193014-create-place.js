module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Places", {
			id: {
				type: Sequelize.STRING, // Use string to accommodate potential non-numeric IDs
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			full_name: {
				type: Sequelize.STRING,
			},
			country: {
				type: Sequelize.STRING,
			},
			country_code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			place_type: {
				type: Sequelize.STRING,
			},
			url: {
				type: Sequelize.STRING,
			},
			bounding_box: {
				type: Sequelize.JSON, // Store GeoJSON polygon as JSON
			},
			attributes: {
				type: Sequelize.JSON, // Store any additional place data as JSON
			},
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable("Places");
	},
};
