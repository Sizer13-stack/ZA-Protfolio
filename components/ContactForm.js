"use client";
import { useState } from "react";
import { site } from "@/content/site";

export default function ContactForm() {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim(), email = String(f.get("email") || "").trim(), message = String(f.get("message") || "").trim();
    if (!name || !message) { setError("Please add your name and a message."); setState("error"); return; }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) { setError("That email address doesn't look right."); setState("error"); return; }
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
    setError(""); setState("opened");
  };
  const field = "mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-[15px] outline-none focus:border-ink";
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div><label htmlFor="name" className="text-sm">Your name</label><input id="name" name="name" autoComplete="name" required className={field} /></div>
      <div><label htmlFor="email" className="text-sm">Your email <span className="text-muted">(optional)</span></label><input id="email" name="email" type="email" autoComplete="email" className={field} /></div>
      <div><label htmlFor="message" className="text-sm">Message</label><textarea id="message" name="message" rows={6} required className={field} /></div>
      <button type="submit" className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-bg transition hover:bg-accent">Open in my email app</button>
      <p role="status" aria-live="polite" className="text-sm">
        {state === "error" && <span className="text-[#c0392b]">{error}</span>}
        {state === "opened" && <span>Your email app should have opened with the message ready to send. Nothing is sent until you press send there. If nothing opened, email <a className="link-u text-accent" href={`mailto:${site.email}`}>{site.email}</a> directly.</span>}
      </p>
      <p className="text-sm text-muted">This form has no server behind it, so it prepares an email in your own mail app instead of sending one.</p>
    </form>
  );
}
