"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border bg-background shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}