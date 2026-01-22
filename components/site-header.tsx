"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/sobre", label: "Quem sou" },
  { href: "/contato", label: "Contato" },
];

const servicosLinks = [
  { href: "/servicos/consultoria", label: "Consultoria" },
  { href: "/servicos/mentoria", label: "Mentoria" },
  { href: "/servicos/palestras", label: "Palestras" },
  { href: "/servicos/personal-training", label: "Personal Training" },
  { href: "/servicos/treinamento-presencial", label: "Treinamento presencial" },
  { href: "/servicos/workshop", label: "Workshop" },
];

const whatsappNumber = "+5551997201564";
const whatsappSanitized = whatsappNumber.replace(/\D/g, "");
const whatsappPresetMessage = encodeURIComponent(
  "Olá Décio! Quero falar sobre alta performance."
);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);

  const toggle = () => setOpen((state) => !state);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-r from-[#041024] via-[#0f2f75] to-[#041024] shadow-lg shadow-[#0f2f75]/20">
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-4 text-base font-semibold uppercase tracking-[0.28em] text-white"
          onClick={close}
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-brand-500/40">
            <Image
              src="/decio-tiaraju.webp"
              alt="Décio Tiarajú"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
          </span>
          Décio Tiarajú
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setServicosOpen(true)}
            onMouseLeave={() => setServicosOpen(false)}
          >
            <Link
              href="/servicos"
              className="transition hover:text-white"
            >
              Serviços
            </Link>
            {servicosOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-gradient-to-br from-[#041024] via-[#0f2f75] to-[#041024] p-2 shadow-2xl">
                {servicosLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-2 text-sm text-white/90 transition hover:bg-brand-500/20 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/contato"
            className="rounded-full bg-brand-500 px-4 py-2 text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
          >
            Contato imediato
          </Link>
        </nav>

        <button
          type="button"
          onClick={toggle}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Abrir menu principal</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden"
        >
          <div className="border-t border-white/10 bg-gradient-to-br from-[#041024] via-[#0f2f75] to-[#041024] px-4 pb-6 pt-4 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-3 text-sm font-medium text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-white transition hover:bg-brand-500/20"
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/servicos"
                className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-white transition hover:bg-brand-500/20"
                onClick={close}
              >
                Serviços
              </Link>
              <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-brand-500/30 pl-4">
                {servicosLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-white"
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappSanitized}?text=${whatsappPresetMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-400"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

