import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, time, email, note } = body;

    // Validate required fields
    if (!name || !phone || !time) {
      return NextResponse.json(
        { error: 'Ism, telefon va vaqt majburiy' },
        { status: 400 }
      );
    }

    const token = process.env.8784819583:AAHR0xquL8JdlKPmlRSXmvIZ8FHRwpuMcTA;
    const chatId = process.env.-5166587281;

    if (!token || !chatId) {
      console.error('Missing 8784819583:AAHR0xquL8JdlKPmlRSXmvIZ8FHRwpuMcTA or -5166587281');
      return NextResponse.json(
        { error: 'Server konfiguratsiya xatosi' },
        { status: 500 }
      );
    }

    // Build the message (HTML format)
    const message = `
✂️ <b>YANGI NAVBAT</b>

👤 <b>Ism:</b> ${name}
📞 <b>Telefon:</b> ${phone}
🕐 <b>Vaqt:</b> ${time}


📅 <b>Yuborildi:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim();

    // Send to Telegram
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.json();
      console.error('Telegram API error:', err);
      return NextResponse.json(
        { error: 'Telegram xabari yuborilmadi' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Booking route error:', error);
    return NextResponse.json(
      { error: 'Ichki server xatosi' },
      { status: 500 }
    );
  }
}