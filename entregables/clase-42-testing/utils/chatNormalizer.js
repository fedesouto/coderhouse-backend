const norm = require("normalizr");

const authorSchema = new norm.schema.Entity(
  "authors",
  {},
  { idAttribute: "alias" }
);
const messageSchema = new norm.schema.Entity(
  "messages",
  {
    author: authorSchema,
  },
  { idAttribute: "_id" }
);

function normalizedChats(data) {
  const normalized = norm.normalize(data, [messageSchema]);
  return normalized
}

module.exports = normalizedChats
