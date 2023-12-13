import responses from "../responses";

const users = {
	"/users": {
		get: {
			tags: ["User"],
			summary: "get all users",
			description: "",
			parameters: [],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [
				{
					JWT: [],
				},
			],
		},
	},
	"/users/{id}": {
		put: {
			tags: ["User"],
			summary: "Update user account",
			description: "",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					type: "string",
				},
				{
					in: "body",
					name: "body",
					schema: {
						expample: {
							firstName: "",
							lastName: "",
							email: "",
							country: "",
							telephone: "",
							address: {
								city: "",
								street: "",
								sector: "",
							},
							gender: "",
						},
					},
				},
			],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [
				{
					JWT: [],
				},
			],
		},
		get: {
			tags: ["User"],
			summary: "Get user account",
			description: "",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					type: "string",
				},
			],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [
				{
					JWT: [],
				},
			],
		},
		delete: {
			tags: ["User"],
			summary: "Delete user",
			description: "",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					type: "string",
				},
			],
			consumes: ["application/json"],
			produces: ["application/json"],
			responses,
			security: [
				{
					JWT: [],
				},
			],
		},
	},
};

export default users;
