import React from "react";

function About() {
  const skills = [
    {
      id: 1,
      title: "Front-End",
      desc: "React JS - Tailwind CSS - JavaScript - Figma - Rest Api",
      image: "./icons/front.webp",
    },
    {
      id: 2,
      title: "Back-End",
      desc: "PHP - MySQL - Node JS",
      image: "./icons/back.webp",
    },
    {
      id: 3,
      title: "Developer Tools",
      desc: "Git - GitHub - Postman",
      image: "./icons/back.webp",
    },
    {
      id: 4,
      title: "SEO",
      desc: "Technical SEO - On Page - Google Analytics - Search Console ",
      image: "./icons/Seo.webp",
    },
    {
      id: 5,
      title: "Machine Learning",
      desc: "Python - ML - Pandas - Scikit-learn",
      image: "./icons/ml.webp",
    },
  ];

  return (
    <div
      id="About"
      className="bg-white/5 backdrop-blur-xl mx-auto mt-12 text-slate-200 font-pm p-4 md:p-8"
    >
      <h2 className="relative text-3xl  font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
        درباره‌من
        <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
      </h2>

      <div className="flex flex-col md:grid md:grid-cols-12 mt-5 gap-6 md:gap-0">
        <div className="md:col-span-3 flex flex-row md:flex-col justify-center items-center gap-4 md:gap-0 text-3xl md:text-5xl">
          <span className="text-6xl md:text-9xl font-pbl">۳+</span>
          <div className="flex flex-col">
            <span>سال</span>
            <span>تجربه کاری</span>
          </div>
        </div>

        <div className="md:col-span-6">
          <p className="text-justify text-sm md:text-lg leading-8 text-slate-300">
            من مبین نایبی‌زاده هستم؛ توسعه‌دهنده و طراح وب. بیش از سه سال است
            که در زمینه طراحی و توسعه وب‌سایت‌ها و سامانه‌های تحت وب فعالیت
            می‌کنم. علاقه من ساخت محصولات سریع، بهینه و کاربرپسند است؛ از توسعه
            وب‌سایت‌های اختصاصی و وردپرسی گرفته تا پیاده‌سازی پنل‌های مدیریتی و
            سیستم‌های تحت وب. همیشه به دنبال یادگیری فناوری‌های جدید و تبدیل
            ایده‌ها به محصولاتی کاربردی هستم. در کنار توسعه وب، روی پروژه‌های
            مرتبط با پایتون و هوش مصنوعی نیز کار می‌کنم و از آن‌ها برای توسعه
            یادگیری‌ماشین بهره می‌برم.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-5">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-slate-800 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-2 hover:-translate-y-2 hover:shadow-[0_2px_1px_rgba(15,23,42,0.5)] hover:shadow-slate-200 transition-all duration-400"
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="rounded-xl w-12 md:w-15"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-sm md:text-base">{skill.title}</h3>
                  <p className="text-xs text-slate-400">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex justify-center items-center p-3 perspective-[1000px]">
          <img
            src="./profile/profile.webp"
            alt="Profile"
            className="object-cover border-4 border-slate-300 w-90 h-100 rounded-2xl transition-all duration-500 rotate-y-12 scale-105 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
