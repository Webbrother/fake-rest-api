const users = {
  type: "array",
  minItems: 2,
  maxItems: 4,
  uniqueItems: true,
  items: {
    "$ref": "user"
  }
};

module.exports = users;
