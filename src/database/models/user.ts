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

module.exports = (sequelize: any, DataTypes: any) => {
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

  User.init(
    {
      id_str: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screen_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      protected: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      followers_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      friends_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      listed_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      favourites_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      statuses_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_banner_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_image_url_https: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      default_profile: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      default_profile_image: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      withheld_scope: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      derived: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      withheld_in_countries: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
}
