import { Model } from "sequelize";

interface MediaAttributes {
    id: number;
    id_str: string;
    media_url: string;
    media_type: 'photo' | 'video' | 'animated_gif';
    width: number;
    height: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Media extends Model<MediaAttributes> implements MediaAttributes {
        id!: number; 
        id_str!: string;
        media_url!: string;
        media_type!: 'photo' | 'video' | 'animated_gif';
        width!: number;
        height!: number;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
            Media.belongsTo(models.Tweet);
		}
	}

	Media.init(
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
			media_url: {
                type: DataTypes.STRING,
            },
            media_type: {
                type: DataTypes.ENUM('photo', 'video', 'animated_gif'),
            },
            width: {
                type: DataTypes.INTEGER,
            },
            height: {
                type: DataTypes.INTEGER,
            },
		},
		{
			sequelize,
			modelName: "Media",
			tableName: "Media",
		},
	);
    Media.beforeCreate((instance: Media) => {
		instance.id_str = instance.id.toString();
	});
	return Media;
};
