import SignUpForm from "@/components/auth/SignupForm";
import { Card, Container, Heading, Flex, Text, Link } from "@radix-ui/themes";
import NavLink from "next/link";
import React from "react"

function RegisterPage() {
  return (
    <>
    <Container size="1" height="100%" className="p-3 md:p-0">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full p-7">
          <Heading>Sign Up</Heading>
          <SignUpForm />

          <Flex justify="between" my="4">
            <Text>Already have an account?</Text>
            <Link asChild>
              <NavLink href="/auth/login" passHref>Sign In</NavLink>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </Container>
  </>
  )
}

export default RegisterPage