// Envoi des formulaires du site via Brevo (prestataire français d'envoi de courriels).
// Variables à définir dans Cloudflare Pages (Settings → Environment variables), en « secret » pour la clé :
//   BREVO_API_KEY   clé API Brevo
//   MAIL_TO         adresse qui reçoit les messages (ex. contact@arumgestionprivee.com)
//   MAIL_FROM       expéditeur validé dans Brevo (ex. site@arumgestionprivee.com)
//   BREVO_LIST_ID   n° de la liste Brevo « Actualités »

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8" } });

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Lit et contrôle les champs texte ; renvoie { data } ou { error }. */
export async function readForm(request, fields) {
  const type = request.headers.get("content-type") || "";
  if (!type.includes("multipart/form-data") && !type.includes("application/x-www-form-urlencoded")) {
    return { error: "format" };
  }
  const form = await request.formData();
  if (form.get("site")) return { spam: true }; // champ piège rempli : robot
  const data = { form };
  for (const [name, { required, max }] of Object.entries(fields)) {
    const value = String(form.get(name) ?? "").trim();
    if (required && !value) return { error: `champ manquant : ${name}` };
    if (value.length > max) return { error: `champ trop long : ${name}` };
    data[name] = value;
  }
  if (data.email !== undefined && !EMAIL.test(data.email)) return { error: "courriel invalide" };
  return { data };
}

export async function brevo(env, path, payload) {
  if (!env.BREVO_API_KEY) throw new Error("BREVO_API_KEY manquante");
  const res = await fetch(`https://api.brevo.com/v3/${path}`, {
    method: "POST",
    headers: { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(payload),
  });
  // 204 / 201 : succès ; 400 « duplicate » pour un contact déjà inscrit : traité comme un succès
  if (!res.ok && !(res.status === 400 && (await res.text()).includes("duplicate"))) {
    throw new Error(`Brevo ${res.status}`);
  }
}

export const sendMail = (env, { subject, text, replyTo, attachment }) =>
  brevo(env, "smtp/email", {
    sender: { email: env.MAIL_FROM, name: "Site ARUM Gestion Privée" },
    to: [{ email: env.MAIL_TO }],
    replyTo,
    subject,
    textContent: text,
    ...(attachment ? { attachment: [attachment] } : {}),
  });
