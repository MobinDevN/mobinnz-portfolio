import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // mailto fallback — opens default mail client
    const subject = encodeURIComponent(`پیام از پورتفولیو - ${form.name}`);
    const body = encodeURIComponent(`نام: ${form.name}\nایمیل: ${form.email}\n\nپیام:\n${form.message}`);
    window.location.href = `mailto:mobinn11086@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contacts = [
    {
      label: "ایمیل",
      value: "mobinn11086@gmail.com",
      href: "mailto:mobinn11086@gmail.com",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "گیت‌هاب",
      value: "github.com/MobinDevN",
      href: "https://github.com/MobinDevN",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "لینکدین",
      value: "linkedin.com/in/mobin-nayebizade",
      href: "https://www.linkedin.com/in/mobin-nayebizade-724b992b7",
      icon: (
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
          <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="Contact" className="mt-12 text-slate-200 font-pm p-4 md:p-8">
      <h2 className="text-3xl relative font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
        ارتباط با من
        <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {/* Left: contact info */}
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 leading-8 text-sm md:text-base">
            اگر پروژه‌ای داری، سوالی داری یا فقط می‌خوای باهم در ارتباط باشیم، خوشحال می‌شم پیامت رو دریافت کنم. معمولاً در کمتر از ۲۴ ساعت جواب می‌دم.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-slate-800/70 border border-slate-700 rounded-2xl p-4 hover:-translate-x-1 hover:border-slate-500 transition-all duration-300"
              >
                <span className="text-slate-400">{c.icon}</span>
                <div>
                  <p className="text-xs text-slate-500">{c.label}</p>
                  <p className="text-sm text-slate-200">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: contact form */}
        <div className="bg-slate-800/70 border border-slate-700 rounded-3xl p-6">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-10">
              <svg className="w-16 h-16 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 className="text-xl font-pb text-slate-200">پیام آماده ارسال شد!</h3>
              <p className="text-slate-400 text-sm">برنامه ایمیل شما باز شده — پیام رو ارسال کن.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 rounded-full py-2 px-5 bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-sm"
              >
                ارسال مجدد
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-pb text-slate-300 mb-2">پیام بفرست</h3>

              <div className="flex flex-col gap-1">
                <label className="text-slate-400 text-sm">نام شما</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="مبین نایبی‌زاده"
                  className="bg-slate-700/60 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-400 text-sm">ایمیل شما</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="example@email.com"
                  className="bg-slate-700/60 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors text-sm"
                  dir="ltr"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-400 text-sm">پیام شما</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="پیامت رو اینجا بنویس..."
                  className="bg-slate-700/60 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-400 transition-colors resize-none text-sm"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="rounded-full py-3 px-6 bg-slate-200 text-slate-900 font-pb cursor-pointer hover:bg-slate-400 transition-all duration-500 hover:-translate-y-1 mt-1"
              >
                ارسال پیام ✉️
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
