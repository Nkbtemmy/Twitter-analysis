const loadData = require("./../../utils/helpers/readHashTags.ts");

const data = loadData();

module.exports = {
	up: async (queryInterface) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert("Tags", data, {});
	},

	down: async (queryInterface) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Tags", null, {});
	},
};
