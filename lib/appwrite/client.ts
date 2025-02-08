import { Client, Account, ID } from "react-native-appwrite";
import { appwriteConfig } from "./config";

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export default client;
