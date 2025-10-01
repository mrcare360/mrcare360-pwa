
const $ = (id) => document.getElementById(id);
const year = new Date().getFullYear();
$("year").textContent = year;

// Data
const cocktails = {
  "Alleviate": {
    es: "Apoya migrañas, calambres y malestar.",
    en: "Supports migraines, cramps & discomfort."
  },
  "Brainstorm": {
    es: "Enfoque mental y claridad.",
    en: "Mental focus & clarity."
  },
  "Get Lean": {
    es: "Metabolismo y control de peso.",
    en: "Metabolism & weight control."
  },
  "Immunity Defense": {
    es: "Sistema inmune reforzado.",
    en: "Stronger immune system."
  },
  "The Glow": {
    es: "Piel, cabello y uñas saludables.",
    en: "Healthy skin, hair & nails."
  },
  "Myers' Cocktail": {
    es: "Energía y bienestar general.",
    en: "Energy & overall wellness."
  },
  "NAD+": {
    es: "Energía celular y recuperación.",
    en: "Cellular energy & recovery."
  },
  "Hydrate": {
    es: "Rehidratación y balance.",
    en: "Rehydration & balance."
  },
  "Hangover/Jet Lag": {
    es: "Recuperación rápida.",
    en: "Fast recovery."
  },
  "Recovery & Performance": {
    es: "Rendimiento y recuperación.",
    en: "Performance & recovery."
  }
};

const shots = {
  "B12": { es: "Energía y metabolismo.", en: "Energy & metabolism." },
  "Vitamin C IM/IV": { es: "Antioxidante e inmunidad.", en: "Antioxidant & immunity." },
  "Glutathione": { es: "Detox y soporte hepático.", en: "Detox & liver support." }
};

const i18n = {
  es: {
    tagline: "¡Estamos aquí para apoyarte en cada paso!",
    welcome: "Bienvenido a MR Care 360+",
    ctaCocktails: "Cocteles de Infusión",
    ctaAppointments: "Agendar Cita",
    ctaWhatsApp: "WhatsApp",
    ctaCall: "Llamar",
    disclaimer: "Esta aplicación no sustituye consejo médico profesional. Los servicios son bajo supervisión médica.",
    servicesTitle: "Servicios",
    weightTitle: "Manejo de Peso (Semaglutide)",
    weightDesc: "Evaluación, plan de cuidado y seguimiento semanal. Bajo supervisión médica.",
    apptTitle: "Agendar Cita",
    lblName: "Nombre completo",
    lblPhone: "Teléfono",
    lblService: "Servicio",
    lblDate: "Fecha preferida",
    lblTime: "Hora preferida",
    btnSubmit: "Enviar por WhatsApp",
    privacyHint: "Al enviar, aceptas ser contactado para coordinar tu cita.",
    contactTitle: "Contacto"
  },
  en: {
    tagline: "We’re here for you every step!",
    welcome: "Welcome to MR Care 360+",
    ctaCocktails: "IV Cocktails",
    ctaAppointments: "Book Appointment",
    ctaWhatsApp: "WhatsApp",
    ctaCall: "Call",
    disclaimer: "This app does not replace professional medical advice. Services are under medical supervision.",
    servicesTitle: "Services",
    weightTitle: "Weight Management (Semaglutide)",
    weightDesc: "Clinical evaluation, care plan and weekly follow-up. Under medical supervision.",
    apptTitle: "Book Appointment",
    lblName: "Full name",
    lblPhone: "Phone",
    lblService: "Service",
    lblDate: "Preferred date",
    lblTime: "Preferred time",
    btnSubmit: "Send via WhatsApp",
    privacyHint: "By submitting, you agree to be contacted to coordinate your appointment.",
    contactTitle: "Contact"
  }
};

let lang = "es";

function renderLists() {
  const cList = $("cocktailList");
  const sList = $("shotsList");
  cList.innerHTML = "";
  sList.innerHTML = "";
  Object.entries(cocktails).forEach(([name, desc]) => {
    const li = document.createElement("li");
    li.textContent = `${name} — ${desc[lang]}`;
    cList.appendChild(li);
  });
  Object.entries(shots).forEach(([name, desc]) => {
    const li = document.createElement("li");
    li.textContent = `${name} — ${desc[lang]}`;
    sList.appendChild(li);
  });
}

function tApply() {
  const dict = i18n[lang];
  $("tagline").textContent = dict.tagline;
  $("welcome").textContent = dict.welcome;
  $("ctaCocktails").textContent = dict.ctaCocktails;
  $("ctaAppointments").textContent = dict.ctaAppointments;
  $("ctaWhatsApp").textContent = dict.ctaWhatsApp;
  $("ctaCall").textContent = dict.ctaCall;
  $("disclaimer").textContent = dict.disclaimer;
  $("servicesTitle").textContent = dict.servicesTitle;
  $("weightTitle").textContent = dict.weightTitle;
  $("weightDesc").textContent = dict.weightDesc;
  $("apptTitle").textContent = dict.apptTitle;
  $("lblName").textContent = dict.lblName;
  $("lblPhone").textContent = dict.lblPhone;
  $("lblService").textContent = dict.lblService;
  $("lblDate").textContent = dict.lblDate;
  $("lblTime").textContent = dict.lblTime;
  $("btnSubmit").textContent = dict.btnSubmit;
  $("privacyHint").textContent = dict.privacyHint;
  $("contactTitle").textContent = dict.contactTitle;
  renderLists();
  const hipaaEl = document.getElementById('hipaaText'); if (hipaaEl) hipaaEl.textContent = dict.hipaa;
}

$("langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  tApply();
});

// Form submission via WhatsApp
document.getElementById("apptForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const message = `Nueva solicitud de cita:%0A` +
    `Nombre: ${encodeURIComponent(name)}%0A` +
    `Tel: ${encodeURIComponent(phone)}%0A` +
    `Servicio: ${encodeURIComponent(service)}%0A` +
    `Fecha: ${encodeURIComponent(date)} ${encodeURIComponent(time)}`;
  const wa = `https://wa.me/16893182197?text=${message}`;
  window.open(wa, "_blank");
});

// Initial render
tApply();
