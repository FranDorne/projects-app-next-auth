"use client";

import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: ""
    }
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              message: "Email is required",
              value: true,
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                type="email"
                placeholder="email@domain.com"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon width="16" height="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        {errors.email && <Text color="ruby" className="text-xs">{errors.email.message}</Text>}

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "Password is required",
              value: true,
            },
            minLength: {
              message: "Password must be at least 6 characters",
              value: 6,
            }
          }}
          render={({ field }) => {
            return (
              <TextField.Root type="password" placeholder="*******" {...field}>
                <TextField.Slot>
                  <LockClosedIcon width="16" height="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

{errors.password && <Text color="ruby" className="text-xs">{errors.password.message}</Text>}

        <Button type="submit" mt="4">Sign in</Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
