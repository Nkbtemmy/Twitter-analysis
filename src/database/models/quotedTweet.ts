import { Model } from "sequelize";

interface QuotedTweetAttributes {
    id: number; 
    id_str: string;
    type: 'retweet'| 'quote';
}

module.exports = (sequelize: any, DataTypes: any) => {
	class QuotedTweet extends Model<QuotedTweetAttributes> implements QuotedTweetAttributes {
        id!: number; 
        id_str!: string;
        type!: 'retweet'| 'quote';

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		static associate(models: any): void {
			// define association here
            models.Tweet.belongsTo(QuotedTweet, {as: 'quotedTweet'}); 
            QuotedTweet.belongsTo(models.Tweet);
		}
	}

	QuotedTweet.init(
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
            type: DataTypes.ENUM('retweet', 'quote')
		},
		{
			sequelize,
			modelName: "QuotedTweet",
			tableName: "QuotedTweet",
		},
	);
    // BeforeCreate hook to set id_str as a string copy of id
    QuotedTweet.beforeCreate((instance: QuotedTweet) => {
        instance.id_str = instance.id.toString();
    });
	return QuotedTweet;
};
