// import request from "supertest";
// import app from "@utils/express";

// describe("Authentication", () => {
//   let uid1 = "";
//   let uid2 = "";

//   beforeAll(async () => {
//     const user1 = await request(app).post("/users").send({
//       firstName: "auth1",
//       lastName: "auth1",
//       emailAddress: "auth1@gmail.com",
//       password: "password1234",
//       confirmPassword: "password1234",
//       provider: "EMAIL",
//     });
//     console.log(user1);

//     const user2 = await request(app).post("/users").send({
//       firstName: "auth2",
//       lastName: "auth2",
//       emailAddress: "auth2@gmail.com",
//       password: "password1234",
//       confirmPassword: "password1234",
//       provider: "EMAIL",
//     });
//     uid1 = user1.body.user._id;
//     uid2 = user2.body.user._id;
//   });

//   describe("EMAIL", () => {
//     it("Email field should not be empty.", () => {
//       return request(app)
//         .post("/auth/jwt")
//         .send({ email: "", password: "password1234" })
//         .then((res) => {
//           expect(res.status).toBe(400);
//           expect(res.body.status).toBe(400);
//           expect(res.body.field).toBe("emailAddress");
//           expect(res.body.message).toBe("Email field should not be empty.");
//         });
//     });
//   });

//   afterAll(async () => {
//     Promise.all([
//       await request(app).delete(`/users/${uid1}`),
//       await request(app).delete(`/users/${uid2}`),
//     ]);
//   });
// });
