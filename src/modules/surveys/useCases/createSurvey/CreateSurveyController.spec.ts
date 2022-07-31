import request from "supertest";
import { app } from "../../../../shared/http/app";

describe("Create Surveys", () => {
  it("Should be able to create a survey", async () => {
    const response = await request(app).post("/surveys")
    .send({
      title: "Title Example",
      description: "Description Example"
    });

    expect(response.statusCode).toBe(201);
  })

  it("Should not be able to create a invalid survey", async () => {
    const response = await request(app).post("/surveys")
    .send({});

    expect(response.statusCode).toBe(400);
  })
})