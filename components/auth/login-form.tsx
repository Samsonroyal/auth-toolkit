"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {LoginSchema} from "@/schemas";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => { 
        console.log(values);
    }


    return (
        <CardWrapper
        headerLabel="welcome back!"
        backButtonLabel="Don't have an account"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                <div className="space-y-4">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl >
                            <Input
                            {...field}
                            placeholder="uncle.mo@gmail.com"
                            type="email"
                            />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.email?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl >
                            <Input
                            {...field}
                            placeholder="********"
                            type="password"
                            />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.password?.message}
                            </FormMessage>
                        </FormItem>
                    )}
                    />
                </div>
                <FormError message="Oops something went wrong"/>
                <FormSuccess message="Oops something went right"/>

                <Button
                type="submit"
                size="sm"
                className="w-full"
                
                >
                    Login
                </Button>


                </form>

            </Form>
        </CardWrapper>
    );
};
