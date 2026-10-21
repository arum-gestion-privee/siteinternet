import { json, readForm, sendMail } from "../_lib/brevo.js";

const MAX = 5 * 1024 * 1024; // 5 Mo
const TYPES = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

// POST /api/candidature : formulaire de la page Recrutement (CV joint) → courriel au cabinet.
export async function onRequestPost({ request, env }) {
  const { data, error, spam } = await readForm(request, {
    nom: { required: true, max: 120 },
    telephone: { max: 30 },
    email: { required: true, max: 160 },
    message: { required: true, max: 4000 },
  });
  if (spam) return json({ ok: true });
  if (error) return json({ ok: false, error }, 400);

  const cv = data.form.get("cv");
  if (!cv || typeof cv === "string" || !cv.size) return json({ ok: false, error: "CV manquant" }, 400);
  const ext = TYPES[cv.type];
  if (!ext || cv.size > MAX) return json({ ok: false, error: "CV : PDF ou Word, 5 Mo maximum" }, 400);

  const bytes = new Uint8Array(await cv.arrayBuffer());
  let binary = "";
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));

  try {
    await sendMail(env, {
      subject: `Site : candidature de ${data.nom}`,
      replyTo: { email: data.email, name: data.nom },
      text: `Nom : ${data.nom}\nCourriel : ${data.email}\nTéléphone : ${data.telephone || "—"}\n\n${data.message}`,
      attachment: { name: `CV ${data.nom}.${ext}`.replace(/[^\p{L}\p{N} ._-]/gu, ""), content: btoa(binary) },
    });
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "envoi" }, 502);
  }
}
