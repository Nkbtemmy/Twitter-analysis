import { Model, Optional } from "sequelize";

interface TweetAttributes {
	id: number;
	created_at: string;
	id_str: string;
	text: string;
	source: string;
	truncated: boolean;
	in_reply_to_status_id?: number | null;
	in_reply_to_status_id_str?: string | null;
	in_reply_to_user_id?: number | null;
	in_reply_to_user_id_str?: string | null;
	in_reply_to_screen_name?: string | null;
	userId: number;
	coordinates?: any | null;
	place?: any | null;
	quoted_status_id: string;
	quoted_status_id_str: string;
	is_quote_status: boolean;
	quoted_status: any;
	retweeted_status: any;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	favorite_count: number;
	entities: any;
	extended_entities: any;
	favorited: boolean;
	retweeted: boolean;
	possibly_sensitive: boolean;
	filter_level: string;
	lang: string;
	matching_rules: any;
}

interface TweetCreationAttributes
	extends Optional<
		TweetAttributes,
		| "in_reply_to_status_id"
		| "in_reply_to_status_id_str"
		| "in_reply_to_user_id"
		| "in_reply_to_user_id_str"
		| "in_reply_to_screen_name"
		| "coordinates"
		| "place"
	> {}

module.exports = (sequelize: any, DataTypes: any) => {
	class Tweet
		extends Model<TweetAttributes, TweetCreationAttributes>
		implements TweetAttributes
	{
		id!: number;
		created_at!: string;
		id_str!: string;
		text!: string;
		source!: string;
		truncated!: boolean;
		in_reply_to_status_id?: number | null;
		in_reply_to_status_id_str?: string | null;
		in_reply_to_user_id?: number | null;
		in_reply_to_user_id_str?: string | null;
		in_reply_to_screen_name?: string | null;
		userId!: number;
		coordinates?: any | null;
		place?: any | null;
		quoted_status_id!: string;
		quoted_status_id_str!: string;
		is_quote_status!: boolean;
		quoted_status!: any;
		retweeted_status!: any;
		quote_count!: number;
		reply_count!: number;
		retweet_count!: number;
		favorite_count!: number;
		entities!: any;
		extended_entities!: any;
		favorited!: boolean;
		retweeted!: boolean;
		possibly_sensitive!: boolean;
		filter_level!: string;
		lang!: string;
		matching_rules!: any;

		static associate(models: any): void {
			// define association here
			Tweet.belongsTo(models.User, {
				as: "user",
				foreignKey: {
					name: "userId",
				},
			});
			// Self-referential for in_reply_to
			Tweet.belongsTo(Tweet, { as: "parentTweet" });
			Tweet.belongsToMany(models.Rule, { through: "TweetRules" });
		}
	}

	Tweet.init(
		{
			created_at: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_str: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			text: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			source: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			truncated: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			in_reply_to_status_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			in_reply_to_status_id_str: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			in_reply_to_user_id: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			in_reply_to_user_id_str: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			in_reply_to_screen_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			coordinates: {
				type: DataTypes.JSON,
				allowNull: true,
			},
			place: {
				type: DataTypes.JSON,
				allowNull: true,
			},
			quoted_status_id: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			quoted_status_id_str: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			is_quote_status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			quoted_status: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			retweeted_status: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			quote_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			reply_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			retweet_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			favorite_count: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			entities: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			extended_entities: {
				type: DataTypes.JSON,
				allowNull: false,
			},
			favorited: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			retweeted: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			possibly_sensitive: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			filter_level: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lang: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			matching_rules: {
				type: DataTypes.JSON,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "Tweet",
		},
	);
	// BeforeCreate hook to set id_str as a string copy of id
	Tweet.beforeCreate((instance: Tweet) => {
		instance.id_str = instance.id.toString();
	});
	return Tweet;
};
