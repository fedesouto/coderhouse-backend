const norm = require("normalizr");
const chatDao = require("../daos/chatDao");

const authorSchema = new norm.schema.Entity(
  "authors",
  {},
  { idAttribute: "email" }
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
