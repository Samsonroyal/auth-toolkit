import * as z from "zod";
import { UserRole } from "@prisma/client";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
    .refine((data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
  
      return true;
    }, {
      message: "New password is required!",
      path: ["newPassword"]
    })
    .refine((data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
  
      return true;
    }, {
      message: "Password is required!",
      path: ["password"]
    })
  
  export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
      message: "Minimum of 6 characters required",
    }),
  });
  
  export const ResetSchema = z.object({
    email: z.string().email({
      message: "Email is required",
    }),
  });

export const LoginSchema = z.object({
email: z.string().email({
    message: "Abeg, Komot from there!",
}),
password: z.string().min(1, {    
        message: "You wey no sabi password, you wan login?"
}),
code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Abeg, Use Valid email nau!",
    }),
    password: z.string().min(6, {    
            message: "You fit use password wey pass 6 characters"
    }),
    name: z.string().min(1, {    
        message: "You fit use your true name",
    }),
    });