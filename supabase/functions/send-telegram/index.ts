import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const BOT_TOKEN = "8604008682:AAHfR8rkLiFyVuKhsPwQxJ4JCfkJXZiySP0";
const CHAT_ID = "1708616203";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, phone, notes } = await req.json();

    const lines = [
      "📋 <b>Yangi buyurtma!</b>",
      "",
      `👤 <b>Ism:</b> ${name || "—"}`,
      `📞 <b>Telefon:</b> ${phone || "—"}`,
      `💬 <b>Izoh:</b> ${notes || "—"}`,
    ];

    const text = lines.join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
      }
    );

    const result = await res.json();

    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.description }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
