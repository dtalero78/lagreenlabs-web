"use client";

import { useState } from "react";
import { PaperPlaneRight, WhatsappLogo } from "@phosphor-icons/react";
import { CLIENT_TYPES, NEEDS } from "@/lib/content";
import { SITE, waLink } from "@/lib/site";

const EMPTY = {
  nombre: "",
  empresa: "",
  cargo: "",
  telefono: "",
  correo: "",
  tipo: "",
  necesidad: "",
  mensaje: "",
};

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink-soft/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function ClosingContact() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  const update =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      setError("Por favor déjanos al menos tu nombre y un teléfono o WhatsApp.");
      return;
    }
    setError("");
    const lines = [
      "Hola LagreenLabs, quiero solicitar un diagnóstico.",
      `Nombre: ${form.nombre}`,
      form.empresa && `Empresa/institución: ${form.empresa}`,
      form.cargo && `Cargo: ${form.cargo}`,
      `Teléfono/WhatsApp: ${form.telefono}`,
      form.correo && `Correo: ${form.correo}`,
      form.tipo && `Tipo de cliente: ${form.tipo}`,
      form.necesidad && `Necesidad principal: ${form.necesidad}`,
      form.mensaje && `Mensaje: ${form.mensaje}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1280px] rounded-[28px] bg-forest px-5 py-16 sm:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] text-white">
            Solicita tu diagnóstico gratis
          </h2>
          <p className="mx-auto mt-5 max-w-[56ch] text-lg leading-relaxed text-white/70">
            Déjanos tus datos y te contactamos para revisar tus procesos. Sin
            compromiso y sin tecnicismos.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-10 max-w-3xl rounded-[24px] bg-surface p-6 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre <span className="text-brand">*</span>
              </label>
              <input
                id="nombre"
                type="text"
                autoComplete="name"
                value={form.nombre}
                onChange={update("nombre")}
                placeholder="Tu nombre"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="empresa" className={labelClass}>
                Empresa o institución
              </label>
              <input
                id="empresa"
                type="text"
                autoComplete="organization"
                value={form.empresa}
                onChange={update("empresa")}
                placeholder="Nombre de tu empresa"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="cargo" className={labelClass}>
                Cargo
              </label>
              <input
                id="cargo"
                type="text"
                value={form.cargo}
                onChange={update("cargo")}
                placeholder="Tu cargo"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass}>
                Teléfono / WhatsApp <span className="text-brand">*</span>
              </label>
              <input
                id="telefono"
                type="tel"
                autoComplete="tel"
                value={form.telefono}
                onChange={update("telefono")}
                placeholder="Ej. 300 000 0000"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="correo" className={labelClass}>
                Correo
              </label>
              <input
                id="correo"
                type="email"
                autoComplete="email"
                value={form.correo}
                onChange={update("correo")}
                placeholder="tucorreo@empresa.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="tipo" className={labelClass}>
                Tipo de cliente
              </label>
              <select
                id="tipo"
                value={form.tipo}
                onChange={update("tipo")}
                className={inputClass}
              >
                <option value="">Selecciona una opción</option>
                {CLIENT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="necesidad" className={labelClass}>
                Necesidad principal
              </label>
              <select
                id="necesidad"
                value={form.necesidad}
                onChange={update("necesidad")}
                className={inputClass}
              >
                <option value="">¿Qué quieres resolver?</option>
                {NEEDS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensaje" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={update("mensaje")}
                placeholder="Cuéntanos brevemente tu situación (opcional)"
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-strong active:scale-[0.98] sm:w-auto"
            >
              Enviar y abrir WhatsApp
              <PaperPlaneRight
                size={18}
                weight="fill"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <WhatsappLogo size={18} weight="fill" className="text-brand" />
              O escríbenos a {SITE.email}
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
