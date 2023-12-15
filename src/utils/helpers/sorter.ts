/**
 * @param {Array} tweets - Array of tweets
 * @returns {Array} - Array of tweets sorted by creation date in descending order
 */
export const sortTweetsByCreatedAt = (tweets: Array<any>): Array<any> => {
	if (tweets && tweets.length) {
		return tweets.sort(
			(first, second) =>
				new Date(second.created_at).getTime() -
				new Date(first.created_at).getTime(),
		);
	}
	return tweets;
};
