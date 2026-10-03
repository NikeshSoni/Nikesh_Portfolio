"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim() || `Message from ${name}`;
    const message = String(data.get("message") ?? "").trim();

    const body = `${message}\r\n\r\nFrom: ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-describedby="form-note">
      <div className="space-y-2">
        <Label htmlFor="name">Your name</Label>
        <Input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="from-email">Your email</Label>
        <Input id="from-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject (optional)</Label>
        <Input id="subject" name="subject" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Mail />
        Open in email app
      </Button>

      <p id="form-note" className="text-sm leading-6 text-muted-foreground">
        This opens your email app with the message ready to send. Nothing is stored on this site.
      </p>
      <p role="status" className="text-sm leading-6 text-link">
        {sent ? (
          <>
            If your email app didn&apos;t open, write to{" "}
            <a href={`mailto:${email}`} className="break-all underline">
              {email}
            </a>{" "}
            directly.
          </>
        ) : null}
      </p>
    </form>
  );
}
