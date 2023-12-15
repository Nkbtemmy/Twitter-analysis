import { Model } from "sequelize";

interface EntityAttributes {
	id: number;
	id_str: string;
	hashtags?: string[];
	urls?: string[];
	user_mentions?: bigint[];
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Entity extends Model<EntityAttributes> implements EntityAttributes {
		id_str!: string;
		id!: number;
		hashtags?: string[];
		urls?: string[];
		user_mentions?: bigint[];

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
			Entity.belongsTo(models.Tweet);
		}
	}

	Entity.init(
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
			hashtags: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			urls: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			user_mentions: {
				type: DataTypes.ARRAY(DataTypes.BIGINT),
			},
		},
		{
			sequelize,
			modelName: "Entity",
			tableName: "Entitys",
		},
	);
	Entity.beforeCreate((instance: Entity) => {
		instance.id_str = instance.id.toString();
	});
	return Entity;
};
