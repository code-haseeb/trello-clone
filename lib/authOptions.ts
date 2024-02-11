import clientPromise from "./MongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:AuthOptions ={
  secret:process.env.AUTH_SECRET,
  providers: [
GoogleProvider({
      clientId:process.env.AUTH_GOOGLE_ID as string,
  clientSecret:process.env.AUTH_GOOGLE_SECRET as string
      
    })
  ],
  // @ts-ignore
  adapter:MongoDBAdapter(clientPromise)
}
