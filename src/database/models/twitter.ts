import { Model, Optional } from 'sequelize';

interface TweetAttributes {
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

interface TweetCreationAttributes extends Optional<TweetAttributes, 'in_reply_to_status_id' | 'in_reply_to_status_id_str' | 'in_reply_to_user_id' | 'in_reply_to_user_id_str' | 'in_reply_to_screen_name' | 'coordinates' | 'place'> {}

class Tweet extends Model<TweetAttributes, TweetCreationAttributes> implements TweetAttributes {
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
      as: 'user',
      foreignKey: {
        name: 'userId',
      },
    });
  }
}

export default Tweet;
