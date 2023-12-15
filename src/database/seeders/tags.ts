const loadDatas = require("./../../utils/helpers/readHashTags.ts");

const datas = loadDatas();

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
		await queryInterface.bulkInsert("Tags", datas, {});
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
