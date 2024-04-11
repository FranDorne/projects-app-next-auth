import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import React from "react";

function SignUpForm() {
  return (
    <Flex direction='column' gap='2'>
      <label htmlFor="name">Name</label>
      <TextField.Root type="text" placeholder="Write your name" autoFocus>
        <TextField.Slot>
          <PersonIcon width="16" height="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root type="email" placeholder="email@domain.com" >
        <TextField.Slot>
          <EnvelopeClosedIcon width="16" height="16" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root type="password" placeholder="*******">
        <TextField.Slot>
          <LockClosedIcon width="16" height="16" />
        </TextField.Slot>
      </TextField.Root>

      <Button>Sign in</Button>
    </Flex>
  );
}

export default SignUpForm;
