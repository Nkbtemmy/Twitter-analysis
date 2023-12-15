-- -------------------------------------------------------------
-- -------------------------------------------------------------
-- TablePlus 1.0.2
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2023-12-15 12:01:28.498994
-- -------------------------------------------------------------

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Coordinates_id_seq";

-- Table Definition
CREATE TABLE "public"."Coordinates" (
    "id" int4 NOT NULL DEFAULT nextval('"Coordinates_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "latitude" numeric,
    "longitude" numeric,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "TweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Entitys_id_seq";

-- Table Definition
CREATE TABLE "public"."Entitys" (
    "id" int4 NOT NULL DEFAULT nextval('"Entitys_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "hashtags" _varchar,
    "urls" _varchar,
    "user_mentions" _int8,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "TweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Media_id_seq";

-- Table Definition
CREATE TABLE "public"."Media" (
    "id" int4 NOT NULL DEFAULT nextval('"Media_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "media_url" varchar,
    "media_type" enum_Media_media_type,
    "width" int4,
    "height" int4,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "TweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Places_id_seq";

-- Table Definition
CREATE TABLE "public"."Places" (
    "id" int4 NOT NULL DEFAULT nextval('"Places_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "full_name" varchar,
    "name" varchar,
    "country" varchar,
    "place_type" varchar,
    "attributes" json,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "TweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "QuotedTweet_id_seq";

-- Table Definition
CREATE TABLE "public"."QuotedTweet" (
    "id" int4 NOT NULL DEFAULT nextval('"QuotedTweet_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "type" enum_QuotedTweet_type,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "TweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Rule_id_seq";

-- Table Definition
CREATE TABLE "public"."Rule" (
    "id" int4 NOT NULL DEFAULT nextval('"Rule_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "tag" varchar,
    "rule_id" int8 NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id","rule_id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Tags_id_seq";

-- Table Definition
CREATE TABLE "public"."Tags" (
    "id" int4 NOT NULL DEFAULT nextval('"Tags_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "name" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."TweetRules" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "RuleId" int4 NOT NULL,
    "TweetId" int4 NOT NULL,
    PRIMARY KEY ("RuleId","TweetId")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Tweets_id_seq";

-- Table Definition
CREATE TABLE "public"."Tweets" (
    "created_at" varchar NOT NULL,
    "id" int4 NOT NULL DEFAULT nextval('"Tweets_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "text" varchar NOT NULL,
    "source" varchar NOT NULL,
    "truncated" bool NOT NULL,
    "in_reply_to_status_id" int4,
    "in_reply_to_status_id_str" varchar,
    "in_reply_to_user_id" int4,
    "in_reply_to_user_id_str" varchar,
    "in_reply_to_screen_name" varchar,
    "userId" int4 NOT NULL,
    "coordinates" json,
    "place" json,
    "quoted_status_id" varchar NOT NULL,
    "quoted_status_id_str" varchar NOT NULL,
    "is_quote_status" bool NOT NULL,
    "quoted_status" json NOT NULL,
    "retweeted_status" json NOT NULL,
    "quote_count" int4 NOT NULL,
    "reply_count" int4 NOT NULL,
    "retweet_count" int4 NOT NULL,
    "favorite_count" int4 NOT NULL,
    "entities" json NOT NULL,
    "extended_entities" json NOT NULL,
    "favorited" bool NOT NULL,
    "retweeted" bool NOT NULL,
    "possibly_sensitive" bool NOT NULL,
    "filter_level" varchar NOT NULL,
    "lang" varchar NOT NULL,
    "matching_rules" json NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "quotedTweetId" int4,
    "parentTweetId" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Sequences
CREATE SEQUENCE IF NOT EXISTS "Users_id_seq";

-- Table Definition
CREATE TABLE "public"."Users" (
    "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    "id_str" varchar NOT NULL,
    "name" varchar NOT NULL,
    "screen_name" varchar NOT NULL,
    "location" varchar NOT NULL,
    "url" varchar NOT NULL,
    "description" varchar NOT NULL,
    "protected" bool NOT NULL,
    "verified" bool NOT NULL,
    "followers_count" int4 NOT NULL,
    "friends_count" int4 NOT NULL,
    "listed_count" int4 NOT NULL,
    "favourites_count" int4 NOT NULL,
    "statuses_count" int4 NOT NULL,
    "created_at" varchar NOT NULL,
    "profile_banner_url" varchar NOT NULL,
    "profile_image_url_https" varchar NOT NULL,
    "default_profile" bool NOT NULL,
    "default_profile_image" bool NOT NULL,
    "withheld_scope" varchar NOT NULL,
    "derived" json,
    "withheld_in_countries" _varchar,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

