import { json, readForm, sendMail } from "../_lib/brevo.js";

// POST /api/contact : formulaire de la page Contact → courriel au cabinet.
export async function onRequestPost({ request, env }) {
  const { data, error, spam } = await readForm(request, {
    nom: { required: true, max: 120 },
    telephone: { max: 30 },
    email: { required: true, max: 160 },
    message: { required: true, max: 4000 },
  });
  if (spam) return json({ ok: true });
  if (error) return json({ ok: false, error }, 400);
  try {
    await sendMail(env, {
      subject: `Site : message de ${data.nom}`,
      replyTo: { email: data.email, name: data.nom },
      text: `Nom : ${data.nom}\nCourriel : ${data.email}\nTéléphone : ${data.telephone || "—"}\n\n${data.message}`,
    });
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "envoi" }, 502);
  }
}
