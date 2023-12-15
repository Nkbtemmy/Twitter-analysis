import TweetService from "../services/tweetService";
import { formatTweets } from "../utils/helpers/formatter";
import { rankingTweets } from "../utils/helpers/ranker";
import { sortTweetsByCreatedAt } from "../utils/helpers/sorter";

/* eslint-disable camelcase */
export default class TweetController {
	static async getTweets(req, res) {
		const { user_id, type, phrase, hashtag } = req.query;
		try {
			const tweets = await TweetService.findAll(user_id);
			const sortByDate = sortTweetsByCreatedAt(tweets);
			const rankedTweets = rankingTweets(sortByDate, type, phrase, hashtag);
			const results = formatTweets(rankedTweets);

			return res.status(200).send(results);
		} catch (error: any) {
			return res.status(500).send(error.message);
		}
	}
}
