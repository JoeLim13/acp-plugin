const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

describe("GET /", () => {
  it("responds with Hello World message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello World!" });
  });
});
