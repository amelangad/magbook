import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/app/models/user';
import connectMongoDB from '../../../lib/connect'
import bcrypt from 'bcrypt';
import { generateToken } from '@/app/lib/jwt'



const authOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "login" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectMongoDB();
        try {
          const user = await User.findOne({ email: credentials.username });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordCorrect) {
              return user;
            }  
          }
        }

        catch (err) {
          throw new Error(err);
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, trigger, user, session }) {

      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token
      return session;
    }
  }, pages: {
    signIn: '/signin'
  }
}


const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }