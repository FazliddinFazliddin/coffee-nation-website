'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', time: '',
    email: '', note: ''
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name || !form.phone || !form.time) {
      setErrorMsg('Iltimos, ism, telefon va vaqtni kiriting.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Xatolik yuz berdi');
      }

      setStatus('success');
      setForm({ name:'', phone:'', time:'', email:'', note:'' });
    } catch (err: any) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  return (
    <div>
      <input name="name" placeholder="Ismingiz *"
        value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="+998 __ ___ __ __ *"
        value={form.phone} onChange={handleChange} />
      <input name="time" placeholder="Ertaga soat 15:00 ga *"
        value={form.time} onChange={handleChange} />
      <input name="email" placeholder="Email (ixtiyoriy)"
        value={form.email} onChange={handleChange} />
      <textarea name="note" placeholder="Izoh yoki xohish (ixtiyoriy)"
        value={form.note} onChange={handleChange} />

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Yuborilmoqda...' : 'NAVBAT OLISH →'}
      </button>

      {status === 'success' && (
        <p style={{ color: 'green' }}>
          ✅ Navbatingiz qabul qilindi! Tez orada bog'lanamiz.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: 'red' }}>❌ {errorMsg}</p>
      )}
    </div>
  );
}