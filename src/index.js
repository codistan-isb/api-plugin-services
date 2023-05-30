import { createRequire } from "module";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";

async function register(app) {
  await app.registerPlugin({
    label: pkg.label,
    name: pkg.name,
    version: pkg.version,
    collections: {
      Service: {
        name: "Service",
        updatedAt: { type: Date, default: Date.now },
        createdAt: { type: Date, default: Date.now },
      },
    },
    graphQL: {
      schemas,
      resolvers,
    },
    mutations,
    queries,
  });
}
export default register;
