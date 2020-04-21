const db = require("../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  addUser,
  findByDepartment,
};

function find() {
  return db.select("id", "username", "password", "department").from("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(user_id) {
  return db("users").where("id", user_id).first();
}

async function addUser(newUser) {
  const [id] = await db("users").insert(newUser, "id");

  return findById(id);
}

function findByDepartment(department) {
  return db("users").where("department", department).first();
}
