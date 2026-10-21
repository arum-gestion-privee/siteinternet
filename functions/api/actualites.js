import { json, readForm, brevo } from "../_lib/brevo.js";

// POST /api/actualites : inscription à la liste « Actualités » de Brevo (consentement obligatoire).
export async function onRequestPost({ request, env }) {
  const { data, error, spam } = await readForm(request, {
    email: { required: true, max: 160 },
    consentement: { required: true, max: 3 },
  });
  if (spam) return json({ ok: true });
  if (error) return json({ ok: false, error }, 400);
  try {
    await brevo(env, "contacts", {
      email: data.email,
      listIds: [Number(env.BREVO_LIST_ID)],
      updateEnabled: true,
    });
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "envoi" }, 502);
  }
}
