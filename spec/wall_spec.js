const request = require("request");
const server = require("../src/server");
const base = "http://localhost:3000";

const sequelize = require("../src/db/models/index").sequelize;
const Post = require("../src/db/models").Post;

describe("wall functionality", () => {

    fdescribe("wall landing page rendering", () => {
        it("should return status code 200", (done) => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                expect(err).toBeNull();
                console.log(err);
                expect(body).toContain("The wall!");
                done();
            });
        });
    });
  
    describe("POST /posts/create", () => {
        const options = {
            url: `{base`,
            form: {
                name: "Bob",
                text: "Hello again!"
            }
        };
        it("should create a new post and refresh", (done) => {
            request.post(options, (err, res, body) => {
                Post.findOne({where: {name: "Bob"}})
                .then((post) => {
                    expect(res.statusCode).toBe(303);
                    expect(post.name).toBe("Bob");
                    expect(post.text).toBe("Hello again!");
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
            });
        });
    });
});