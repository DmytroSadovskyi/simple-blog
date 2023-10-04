import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

const { GOOGLE_CLIENT_ID, GOOGLE_SECRET, NEXTAUTH_SECRET } = process.env;

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connect();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }

          const matchedPassword = await bcryptjs.compare(
            password,
            user.password
          );

          if (!matchedPassword) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};
