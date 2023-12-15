import { Model } from "sequelize";

interface PlaceAttributes {
	id: number;
	id_str: string;
	full_name?: string;
	name?: string;
	country?: string;
	place_type?: string;
	attributes?: Record<string, any>;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Place extends Model<PlaceAttributes> implements PlaceAttributes {
		id!: number;
		id_str!: string;
		full_name?: string;
		name?: string;
		country?: string;
		place_type?: string;
		attributes?: Record<string, any>;

		static associate(models: any): void {
			// define association here
			Place.belongsTo(models.Tweet);
		}
	}

	Place.init(
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
			full_name: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			country: {
				type: DataTypes.STRING,
			},
			place_type: {
				type: DataTypes.STRING,
			},
			attributes: DataTypes.JSON,
		},
		{
			sequelize,
			modelName: "Place",
			tableName: "Places",
		},
	);
	Place.beforeCreate((instance: Place) => {
		instance.id_str = instance.id.toString();
	});
	return Place;
};
