import React from "react";

function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "INV Member Certificate",
      description: "عضویت در سازمان جهانی مخترعین IFIA",
      date: "July 2025",
      image: "./certs/inv.jpg",
    },
    {
      id: 2,
      title: "مدال طلای مسابقات خلاقیت نوآوری",
      description: "مسابقات خلاقیت نوآوری سوییس، ژنو IFIA",
      date: "August 2025",
      image: "./certs/gold_s.jpg",
    },
    {
      id: 3,
      title: "مدال طلای مسابقات Innoverse آمریکا",
      description: "مسابقات برنامه‌نویسی هوش‌مصنوعی Innoverse آمریکا",
      date: "August 2024",
      image: "./certs/innoverse.jpg",
    },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-xl mx-auto p-4 md:p-8" id="Certificates">
      <h2 className="text-3xl relative font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
        گواهینامه‌ها من
        <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-4 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_2px_1px_rgba(15,23,42,0.5)] hover:shadow-slate-200"
          >
            <a href={certificate.image} target="_blank" rel="noopener noreferrer">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-50 object-cover rounded-xl mb-4"
              />
            </a>
            <h3 className="text-xl font-pb text-slate-300 mb-2">
              {certificate.title}
            </h3>
            <p className="text-sm text-slate-400 font-pr">{certificate.description}</p>
            <p className="text-sm text-slate-400 font-pr">{certificate.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
