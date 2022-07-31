import request from "supertest";
import { app } from "../../../../shared/http/app";

describe("List Surveys", () => {
  it("Should be able to list all surveys", async () => {
    const response = await request(app).get("/surveys")

    expect(response.statusCode).toBe(200);
  })
})