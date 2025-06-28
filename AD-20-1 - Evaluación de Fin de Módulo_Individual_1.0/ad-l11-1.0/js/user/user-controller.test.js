const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("find user by email", () => {
  let user = new User(1234, "susi", "susi@generation.org");
  userController.add(user);
  let foundUser = userController.findByEmail("susi@generation.org");
  expect(foundUser).toEqual(user);
});
test("find user by email", () => {
  let user = new User(5678, "pepe", "pepe@generation.org");
  userController.add(user);
  let foundUser = userController.findByEmail("pepe@generation.org");
  expect(foundUser).toEqual(user);
});
test("find user by id", () => {
  let user = new User(4567, "susi", "susi@generation.org");
  userController.add(user);
  let foundUser = userController.findById(4567);
  expect(foundUser).toEqual(user);
});
test("find user by id", () => {
  let user = new User(5678, "pepe", "pepe@generation.org");
  userController.add(user);
  let foundUser = userController.findById(5678);
  expect(foundUser).toEqual(user);
});
