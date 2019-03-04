const { green, red } = require("chalk");
const fs = require("fs").promises;
const jsf = require("json-schema-faker");


// const groupSchema = require("./schemas/group");
// const siteSchema  = require("./schemas/site");
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

/////////////
//
// const compiledGroupSchema = jsf(groupSchema);
//
// const groups = compiledGroupSchema.groups;
// let sites: ISite[] = [];
//
// groups.forEach((group: IGroup) => {
//   const compiledSiteSchema = jsf(siteSchema);
//
//   sites = [...sites, ...compiledSiteSchema.sites];
//
//   group.sites = compiledSiteSchema.sites.map((site: ISite) => site.id);
// });
//
// const json = JSON.stringify({
//   groups,
//   sites
// });
//
// fs.writeFile("./buildScripts/db.json", json, err => {
//   if (err) {
//     // console.log(red(err.message));
//     console.log(err.message);
//   } else {
//     // console.log(green("Mock API data generated."));
//     console.log("Mock API data generated.");
//   }
// });
