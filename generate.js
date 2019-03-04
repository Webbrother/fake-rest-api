const { green, red } = require("chalk");
const fs = require("fs").promises;
const jsf = require("json-schema-faker");


const user  = require("./schemas/user");
const users  = require("./schemas/users");

jsf.extend('faker', function() {
  return require('faker');
});

async function generate() {
  let data = {
    user: jsf(user),
    users: jsf(users, [user])
  };

  await fs.writeFile('./fake-data/db.json', JSON.stringify(data));
}

generate().then(r => {
  console.log(green("Mock API data generated."));
}).catch(e => {
  console.log(red(e.message));
});
