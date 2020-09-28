import * as azdev from "azure-devops-node-api";
import * as dotenv from "dotenv";
dotenv.config();

// your collection url
const orgUrl = process.env.AZURE_ORG_URL || "https://dev.azure.com/kdop";

const token =
  process.env.AZURE_PERSONAL_ACCESS_TOKEN ||
  "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha"; // e.g "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha";

const authHandler = azdev.getPersonalAccessTokenHandler(token);
const connection = new azdev.WebApi(orgUrl, authHandler);

export default connection;
