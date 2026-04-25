"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

type ActionResult = { success: true } | { success: false; error: string };

export const sendContactEmail = async (
  formData: FormData,
): Promise<ActionResult> => {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { success: false, error: first?.message ?? "Invalid form data" };
  }

  const { name, email, message } = parsed.data;

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "nikita.petrov.it@gmail.com",
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) return { success: false, error: "Failed to send. Try again." };
  return { success: true };
};
