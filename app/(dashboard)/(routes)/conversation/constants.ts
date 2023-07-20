import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, { //this is the default field of our form
    message: "Prompt is required."
  }),
});// now we can use this formSchema type to infer our useForm hook
