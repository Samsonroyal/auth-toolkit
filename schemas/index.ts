import * as z from "zod";

export const LoginSchema = z.object({
email: z.string().email({
    message: "Abeg, Komot from there!",
}),
password: z.string().min(1, {    
        message: "You wey no sabi password, you wan login?"
}),

});