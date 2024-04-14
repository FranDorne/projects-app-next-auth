import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        // name : {label: "Name", type: "text", placeholder: "Your name"},
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize() {
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  }
});

export { handler as GET, handler as POST };
