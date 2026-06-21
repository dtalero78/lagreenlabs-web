// Todo el contenido de la landing vive aquí (copy del brief LagreenLabs).
// Mantener el lenguaje sencillo, comercial y basado en beneficios.

export const SECTORS = [
  "IPS y centros médicos",
  "Consultorios",
  "Laboratorios",
  "Salud ocupacional",
  "Profesionales independientes",
  "Servicios de salud",
];

export type Problem = { n: string; title: string; body: string };

export const PROBLEMS: Problem[] = [
  {
    n: "01",
    title: "Mensajes que se pierden",
    body: "Citas, preguntas y solicitudes regadas entre WhatsApp, correo y Excel. Las ordenamos en un solo flujo.",
  },
  {
    n: "02",
    title: "Cartera sin control",
    body: "Pagos pendientes que nadie persigue. Recordatorios automáticos y seguimiento de compromisos de pago.",
  },
  {
    n: "03",
    title: "PQRS sin trazabilidad",
    body: "Quejas y reclamos que se traspapelan. Recepción, clasificación y seguimiento medible de cada caso.",
  },
  {
    n: "04",
    title: "Ventas que se enfrían",
    body: "Interesados sin respuesta a tiempo. Registro de oportunidades y seguimiento comercial que no se olvida.",
  },
];

export type Agent = {
  icon: string; // nombre del ícono de Phosphor
  name: string;
  does: string;
  benefit: string;
};

export const AGENTS: Agent[] = [
  {
    icon: "Headset",
    name: "Secretaria virtual",
    does: "Responde preguntas frecuentes, orienta y organiza las solicitudes iniciales.",
    benefit: "Menos interrupciones y menos tiempo repitiendo lo mismo.",
  },
  {
    icon: "CalendarCheck",
    name: "Agendamiento",
    does: "Ayuda a solicitar, confirmar, recordar y ordenar las citas.",
    benefit: "Menos inasistencias y una agenda más organizada.",
  },
  {
    icon: "ChartLineUp",
    name: "Ventas",
    does: "Responde interesados, registra oportunidades y recuerda seguimientos.",
    benefit: "Menos oportunidades perdidas y más cierres.",
  },
  {
    icon: "Wallet",
    name: "Cobranza",
    does: "Envía recordatorios de pago, organiza compromisos y alerta cuentas pendientes.",
    benefit: "Mejor recuperación de cartera sin perseguir caso por caso.",
  },
  {
    icon: "ClipboardText",
    name: "PQRS",
    does: "Recibe, clasifica, registra y apoya el seguimiento de quejas y reclamos.",
    benefit: "Más trazabilidad y menos solicitudes perdidas.",
  },
  {
    icon: "SealCheck",
    name: "Calidad y cumplimiento",
    does: "Apoya evidencias, planes de mejora, actividades obligatorias e informes.",
    benefit: "Procesos normativos más ordenados y menos carga.",
  },
  {
    icon: "FileText",
    name: "Documental",
    does: "Ayuda a preparar cartas, correos, formatos, actas e informes repetitivos.",
    benefit: "Ahorro de tiempo y documentos más estandarizados.",
  },
  {
    icon: "Heartbeat",
    name: "Seguimiento de pacientes",
    does: "Envía recordatorios, indicaciones, encuestas y mensajes posteriores a la atención.",
    benefit: "Mejor experiencia del paciente y continuidad del contacto.",
  },
];

export type Segment = {
  surface: "lime" | "mint" | "sage";
  badge?: string;
  name: string;
  promise: string;
  items: string[];
};

export const SEGMENTS: Segment[] = [
  {
    surface: "lime",
    name: "Profesional independiente",
    promise:
      "Organiza tu atención, tus citas, tus pacientes y tus pagos sin contratar más personal.",
    items: [
      "Secretaria virtual y agendamiento",
      "Recordatorios que reducen inasistencias",
      "Página profesional que genera contactos",
      "Cobranza básica y formatos listos",
    ],
  },
  {
    surface: "mint",
    name: "Pyme de salud",
    promise:
      "Automatiza los procesos clave para que tu equipo sea más productivo sin crecer en desorden.",
    items: [
      "Bot de atención y agente de ventas",
      "PQRS digital con trazabilidad",
      "Cobranza y control de cartera",
      "Calidad, cumplimiento e inventario",
    ],
  },
  {
    surface: "sage",
    badge: "Capacidad ampliada",
    name: "IPS mediana y grande",
    promise:
      "Conecta áreas, reduce reprocesos y automatiza por unidad, con desarrollos a la medida cuando hace falta.",
    items: [
      "Automatización por procesos y por área",
      "Reportes claros para tomar decisiones",
      "Conexión con tus sistemas actuales",
      "Agentes especializados y soluciones a medida",
    ],
  },
];

export const COMPLIANCE_DOMAINS = [
  "PQRS y satisfacción del usuario",
  "Habilitación y calidad",
  "Historia clínica y documentos",
  "Planes de mejora y evidencias",
  "Seguimiento de pacientes",
  "Inventarios e informes",
];

export type Step = { n: string; title: string; body: string };

export const STEPS: Step[] = [
  { n: "01", title: "Escuchamos", body: "Entendemos qué problema quieres resolver." },
  { n: "02", title: "Ordenamos la idea", body: "Definimos qué se necesita, qué sobra y qué se resuelve rápido." },
  { n: "03", title: "Diseñamos", body: "Creamos un flujo simple, útil y fácil de ejecutar." },
  { n: "04", title: "Implementamos", body: "Ponemos la solución a funcionar en tu operación." },
  { n: "05", title: "Medimos", body: "Revisamos si de verdad ahorra tiempo y mejora la atención." },
  { n: "06", title: "Mejoramos", body: "Ajustamos según cómo trabaja tu equipo en el día a día." },
];

export const CLIENT_TYPES = [
  "Profesional independiente",
  "Pyme de salud",
  "IPS mediana o grande",
  "Institución grande",
  "Otro sector",
];

export const NEEDS = [
  "Atención y mensajes",
  "Citas y agendamiento",
  "Ventas y seguimiento comercial",
  "Cobranza y cartera",
  "PQRS y atención al usuario",
  "Calidad y cumplimiento",
  "Telemedicina",
  "Página web y captación",
  "Solución a la medida",
  "Aún no estoy seguro",
];
