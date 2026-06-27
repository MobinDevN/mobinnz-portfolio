import React from "react";

function History() {
  const experiences = [
    {
      year: "1402 - اکنون",
      title: "برنامه‌نویس فول استک و مدرس",
      company: "آکادمی آیولرن",
      description:
        "توسعه سامانه‌های تحت وب، طراحی پنل‌های مدیریتی و آموزش برنامه‌نویسی وب به دانشجویان با تمرکز بر پروژه‌های واقعی.",
      technologies: [
        "React",
        "PHP",
        "Tailwind",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
        "Machine Learning",
      ],
    },
    {
      year: "1403",
      title: "توسعه دهنده استارتاپ آیولنسر",
      company: "آکادمی آیولرن",
      description:
        "طراحی پنل‌های مدیریت کاربران، توسعه پروژه‌های اختصاصی PHP، طراحی رابط کاربری مدرن، استقرار پروژه روی سرور",
      technologies: ["PHP", "JavaScript", "Bootstrap", "Wordpress", "Seo"],
    },
    {
      year: "1402-1404",
      title: "توسعه پروژه‌های وردپرسی و SEO",
      company: "فریلنس",
      description:
        "طراحی و توسعه وب‌سایت‌های وردپرسی، سفارشی‌سازی قالب‌ها و افزونه‌ها و بهینه‌سازی وب‌سایت‌ها برای موتورهای جستجو (SEO).",
      technologies: ["WordPress", "Elementor", "SEO", "HTML", "CSS", "JavaScript",],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-white/5 backdrop-blur-xl mx-auto p-4 md:p-8 font-pr"
    >
      <div className=" mx-auto px-3 md:px-6">
        <h2 className="text-3xl relative font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
          تجربه کاری من
          <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
        </h2>

        <div className="relative border-r border-slate-500 ml-4 mt-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative pr-5 md:pr-10 pb-14">
              <div className="absolute -right-[9px] top-0 h-4 w-4 rounded-full bg-slate-500 border-4 border-slate-800 border-background"></div>

              <span className="text-lg text-slate-200 font-pb">
                {item.year}
              </span>

              <div className="mt-3 rounded-3xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <h3 className="text-xl text-slate-300 font-pb">{item.title}</h3>

                {item.company && (
                  <p className="text-slate-400 mt-1">{item.company}</p>
                )}

                <p className="mt-4 text-slate-400 leading-7">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default History;
