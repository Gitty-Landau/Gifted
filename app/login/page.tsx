"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/services/auth";
import { authSchema } from "@/schemas/auth";
import { signUpUser } from "@/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const LoginPage = () => {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      pk_fk_email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof authSchema>) => {
    const formData = new FormData();
    formData.append("pk_fk_email", data.pk_fk_email);
    formData.append("password", data.password);

    const result = await signUpUser(formData);
    console.log(result);
    // const result = await signUp({ email: pk_fk_email, password });
    // console.log(result);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-4 w-1/3 m-auto mt-10 [&>*]:w-full"
      >
        <h1 className="text-center">Sign in</h1>
        <FormField
          name="pk_fk_email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </form>
    </Form>
  );
};

export default LoginPage;
