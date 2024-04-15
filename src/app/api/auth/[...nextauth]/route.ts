import prisma from "@/libs/prisma";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


const handler = NextAuth({

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@domain.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: any , req) {
        const { email, password } = credentials;

        const userFound = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!userFound) throw new Error("Invalid credentials")

        const validPassword =  await bcrypt.compare(password, userFound.password)

        if (!validPassword) throw new Error("Invalid credentials")


        return {
          id: userFound.id + "",
          name: userFound.name,
          email: userFound.email
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
