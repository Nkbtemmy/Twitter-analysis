import supertest from "supertest";
import app from "../src/server";

const request = supertest(app);

describe("Test app", () => {
	it("Is app on", async () => {
		const response = await request.get("/");
		expect(response.status).toBe(200);
		expect(response.body).toBeDefined();
	});
});

describe("Test GET /q2?user_id=<ID>&type=<TYPE>&phrase=<PHRASE>&hashtag=<HASHTAG>", () => {
	it("should return retweets with type=retweet", async () => {
		const response = await request.get(
			"/q2?user_id=1112745398&type=retweet&phrase=ok&hashtag=rw",
		);
		expect(response.status).toBe(200);
		expect(response.body).toBeDefined();
	});

	it("should return reply tweets with type=reply", async () => {
		const response = await request.get(
			"/q2?user_id=1112745398&type=reply&phrase=ok&hashtag=rw",
		);
		expect(response.status).toBe(200);
		expect(response.body).toBeDefined();
	});

	it("should return both tweets with type=both", async () => {
		const response = await request.get(
			"/q2?user_id=1112745398&type=both&phrase=ok&hashtag=rw",
		);
		expect(response.status).toBe(200);
		expect(response.body).toBeDefined();
	});
});
