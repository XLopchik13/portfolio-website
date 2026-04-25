"use client";

import { type SyntheticEvent, useEffect, useRef, useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { cn } from "@/lib/cn";
import { contactSchema } from "@/lib/validations";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus-visible:outline-none focus:border-accent transition-colors duration-(--duration-fast)";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorKey, setErrorKey] = useState(0);

  useEffect(() => {
    if (Object.keys(fieldErrors).length === 0) return;
    const t = setTimeout(() => setFieldErrors({}), 3500);
    return () => clearTimeout(t);
  }, [fieldErrors]);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (key) errors[String(key)] = issue.message;
      }
      setFieldErrors(errors);
      setErrorKey((k) => k + 1);
      return;
    }

    setStatus("loading");
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
    >
      {(
        [
          { id: "name", label: "Name", type: "text", placeholder: "Your name" },
          {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "your@email.com",
          },
        ] as const
      ).map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label
            htmlFor={id}
            className="block font-mono text-xs text-muted uppercase tracking-wider mb-1.5"
          >
            {label}
          </label>
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className={fieldClass}
            aria-describedby={`${id}-error`}
            aria-invalid={!!fieldErrors[id]}
          />
          <p
            id={`${id}-error`}
            className="h-5 mt-1"
            role="alert"
            aria-live="polite"
          >
            {fieldErrors[id] && (
              <span
                key={`${id}-${errorKey}`}
                className="text-xs text-red-500 animate-error-flash"
              >
                {fieldErrors[id]}
              </span>
            )}
          </p>
        </div>
      ))}

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs text-muted uppercase tracking-wider mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="What's on your mind?"
          className={cn(fieldClass, "resize-none")}
          aria-describedby="message-error"
          aria-invalid={!!fieldErrors.message}
        />
        <p
          id="message-error"
          className="h-5 mt-1"
          role="alert"
          aria-live="polite"
        >
          {fieldErrors.message && (
            <span
              key={`message-${errorKey}`}
              className="text-xs text-red-500 animate-error-flash"
            >
              {fieldErrors.message}
            </span>
          )}
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500" role="alert">
          {errorMsg}
        </p>
      )}

      {status === "success" ? (
        <p className="text-sm text-emerald-600 font-medium">
          Message sent — I&apos;ll get back to you soon.
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity duration-(--duration-fast) focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {status === "loading" ? "Sending…" : <>Send message</>}
        </button>
      )}
    </form>
  );
};
