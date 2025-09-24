import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/backend/db/connectDB";
import User from "@/backend/models/User";

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();

        if (!user?.email) {
          console.error("No email found in user object during sign in.");
          return false;
        }

        const existingUser = await User.findOne({ email: user.email });
        console.log("Checking if user exists...");

        if (!existingUser) {
          console.log("User does not exist. Creating new user...");
          const generatedUsername = user.email
            .split("@")[0]
            .replace(/[0-9]/g, "");

          await User.create({
            email: user.email,
            username: generatedUsername,
          });

          console.log("User created successfully.");
        } else {
          console.log("User already exists.");
        }

        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },

    async session({ session }) {
      try {
        await connectDB();

        if (!session?.user?.email) {
          console.error("No email found in session.");
          return session;
        }

        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          session.user = {
            ...session.user,
            id: dbUser._id.toString(),
            name: dbUser.username,
          };

          console.log(`Session generated for user: ${dbUser.username}`);
        } else {
          console.warn("User not found in DB during session generation.");
        }

        return session;
      } catch (error) {
        console.error("Session error:", error);
        return session;
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
