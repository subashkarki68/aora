import client from "@/lib/appwrite/client";
import { appwriteConfig } from "@/lib/appwrite/config";
import { User, UserSignIn, UserSignUp } from "@/types/user";
import {
  Account,
  Avatars,
  Databases,
  ID,
  Models,
  Query,
} from "react-native-appwrite";

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async ({
  email,
  password,
  name,
}: UserSignUp): Promise<(Models.Document & User) | undefined> => {
  email.trim();
  name.trim();
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(name);

    await signIn({ email, password });

    const newUser = (await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        name,
        avatar: avatarUrl,
      }
    )) as Models.Document & User;
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const signIn = async ({
  email,
  password,
}: UserSignIn): Promise<Models.Session> => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (): Promise<User> => {
  try {
    const cAccount = await account.get();
    if (!cAccount) throw Error("Not Loggedin");

    const cUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", cAccount.$id)]
    );
    if (!cUser) throw Error;
    return cUser.documents[0] as unknown as User;
  } catch (error) {
    throw error;
  }
};
