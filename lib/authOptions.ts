import clientPromise from "./MongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


// interface GoogleProviderConfig{
// clientId:string;
//   clientSecret:string;
//   callbackUrl:string;
// }
export const authOptions:AuthOptions ={
  secret:process.env.AUTH_SECRET,
  providers: [
GoogleProvider({
      clientId:process.env.AUTH_GOOGLE_ID as string,
  clientSecret:process.env.AUTH_GOOGLE_SECRET as string,
      
      callbackUrl: process.env.NEXTAUTH_URL + '/api/auth/callback/google', // Specify the redirect URI here
    } as any)
  ],
  // @ts-ignore
  adapter:MongoDBAdapter(clientPromise)
}
