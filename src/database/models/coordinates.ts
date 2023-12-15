import { Model } from "sequelize";

interface CoordinatesAttributes {
    id: number;
	id_str: string;
    latitude: number;
    longitude: number; 
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Coordinates extends Model<CoordinatesAttributes> implements CoordinatesAttributes {
        id_str !: string;
        id!: number;
        latitude !: number;
        longitude !: number; 

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
            Coordinates.belongsTo(models.Tweet);
		}
	}

	Coordinates.init(
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
            latitude: {
                type: DataTypes.DECIMAL
            },
            longitude: {
                type: DataTypes.DECIMAL
            },
           
        },
		{
			sequelize,
			modelName: "Coordinates",
			tableName: "Coordinates",
		},
	);
    Coordinates.beforeCreate((instance: Coordinates) => {
		instance.id_str = instance.id.toString();
	});
	return Coordinates;
};
