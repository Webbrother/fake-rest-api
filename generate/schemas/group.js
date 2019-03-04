const group = {
  type: "object",
  properties: {
    groups: {
      type: "array",
      minItems: 2,
      maxItems: 3,
      uniqueItems: true,
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            faker: "random.uuid"
          },
          name: {
            type: "string",
            faker: "commerce.productName"
          }
        },
        required: ["id", "name"]
      }
    }
  },
  required: ["groups"]
};

module.exports = group;
