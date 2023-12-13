import { Model, Optional } from 'sequelize';

interface UserAttributes {
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  url: string;
  description: string;
  protected: boolean;
  verified: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  favourites_count: number;
  statuses_count: number;
  created_at: string;
  profile_banner_url: string;
  profile_image_url_https: string;
  default_profile: boolean;
  default_profile_image: boolean;
  withheld_scope: string;

  derived?: any;
  withheld_in_countries?: string[];
}

interface UserCreationAttributes extends Optional<UserAttributes, 'derived' | 'withheld_in_countries'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id_str!: string;
  name!: string;
  screen_name!: string;
  location!: string;
  url!: string;
  description!: string;
  protected!: boolean;
  verified!: boolean;
  followers_count!: number;
  friends_count!: number;
  listed_count!: number;
  favourites_count!: number;
  statuses_count!: number;
  created_at!: string;
  profile_banner_url!: string;
  profile_image_url_https!: string;
  default_profile!: boolean;
  default_profile_image!: boolean;
  withheld_scope!: string;

  derived?: any;
  withheld_in_countries?: string[];

  static associate(models: any): void {
    // define association here
    User.hasMany(models.Tweet, {
      foreignKey: {
        name: 'userId',
      },
    });
  }
}

export default User;
