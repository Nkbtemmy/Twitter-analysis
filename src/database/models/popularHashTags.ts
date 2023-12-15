import { Model } from "sequelize";

interface TagAttributes {
	id: number; 
	id_str: string;
	name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
	class Tag extends Model<TagAttributes> implements TagAttributes {
		id!: number; 
		id_str!: string;
		name!: string;

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
		}
	}

	Tag.init(
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
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Tag",
			tableName: "Tags",
		},
	);
	// BeforeCreate hook to set id_str as a string copy of id
	Tag.beforeCreate((instance: Tag) => {
		instance.id_str = instance.id.toString();
	});
	return Tag;
};
