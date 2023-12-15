import { Model } from "sequelize";

interface RuleAttributes {
	id: number;
	id_str: string;
	tag: string;
	rule_id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Rule extends Model<RuleAttributes> implements RuleAttributes {
		id!: number;
		id_str!: string;
		tag!: string;
		rule_id!: number;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
			Rule.belongsToMany(models.Tweet, { through: "TweetRules" });
			models.Tweet.belongsToMany(Rule, { through: "TweetRules" });
		}
	}

	Rule.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_str: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			tag: {
				type: DataTypes.STRING,
			},
			rule_id: {
				type: DataTypes.BIGINT,
				primaryKey: true,
			},
		},
		{
			sequelize,
			modelName: "Rule",
			tableName: "Rule",
		},
	);
	// BeforeCreate hook to set id_str as a string copy of id
	Rule.beforeCreate((instance: Rule) => {
		instance.id_str = instance.id.toString();
	});
	return Rule;
};
