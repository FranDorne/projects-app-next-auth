"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function SignInForm() {
  const { control, handleSubmit } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/auth/register', data)
    console.log(res)

    if (res.status === 201) {
      const result = await signIn('credentials', {
        email: res.data.email,
        password: data.password,
        redirect: false
      })

      if (!result?.ok) {
        console.log(result?.error)
        return;
      }

      router.push('/dashboard')
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              message: "Name is required",
              value: true,
            },
          }}
          render={({field}) => {
            return (
              <TextField.Root
                type="text"
                placeholder="Write your name"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon width="16" height="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

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
          render={({field}) => {
            return (
              <TextField.Root
                type="email"
                placeholder="email@domain.com"
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon width="16" height="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

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
            },
          }}
          render={({field}) => {
            return (
              <TextField.Root type="password" placeholder="*******" {...field}>
                <TextField.Slot>
                  <LockClosedIcon width="16" height="16" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        <Button type="submit" variant="solid" color="blue">Sign up</Button>
      </Flex>
    </form>
  );
}

export default SignInForm;
