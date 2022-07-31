import request from "supertest";
import { app } from "../../../../shared/http/app";

describe("Create User", () => {
  it("Should be able to create an user", async () => {
    const response = await request(app).post("/users")
    .send({
      name: "Name Example",
      email: "example@email.com"
    });
    expect(response.status).toBe(201);
  });
  it("Should not be able to create an invalid user", async () => {
    const response = await request(app).post("/users")
    .send({});
    expect(response.status).toBe(400);
  })
})