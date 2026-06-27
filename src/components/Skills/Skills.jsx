import React from "react";

function Skills() {
  const skills = [
    {
      title: "فرانت اند",
      icon: "./icons/front.webp",
      desc: "طراحی UI، فرانت‌اند و رسپانسیو",
      techs: [
        { name: "React", icon: "./icons/react.svg" },
        { name: "JavaScript", icon: "./icons/js.svg" },
        { name: "Tailwind", icon: "./icons/tailwind.svg" },
        { name: "Figma", icon: "./icons/figma.svg" },
      ],
    },
    {
      title: "بک اند",
      icon: "./icons/back.webp",
      desc: "بک‌اند، API نویسی",
      techs: [
        { name: "PHP", icon: "./icons/php.svg" },
        { name: "Node Js", icon: "./icons/node.svg" },
        { name: "MySQL", icon: "./icons/mysql.svg" },
      ],
    },
    {
      title: "سئو",
      icon: "./icons/Seo.webp",
      desc: "سئو تکنیکال و آنپیج",
      techs: [
        { name: "Technical SEO", icon: "./icons/Seo.svg" },
        { name: "WordPress", icon: "./icons/wordpress.svg" },
        { name: "Search Console", icon: "./icons/search-console.webp" },
      ],
    },
    {
      title: "ماشین لرنینگ",
      icon: "./icons/ml.webp",
      desc: "هوش مصنوعی و یادگیری ماشین",
      techs: [
        { name: "Python", icon: "./icons/python.svg" },
        { name: "Machine Learning", icon: "./icons/ml.svg" },
      ],
    },
  ];

  return (
    <div id="Skills" className="mt-12 text-slate-200 font-pm p-4 md:p-8">
      <h2 className="text-3xl relative font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
        مهارت‌های من
        <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-6 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_2px_1px_rgba(15,23,42,0.5)] hover:shadow-slate-200"
          >
            <div className="flex items-center gap-4">
              <img src={skill.icon} className="w-14 md:w-16 rounded-xl" alt={skill.title} />
              <div>
                <h3 className="text-xl md:text-2xl text-slate-200">{skill.title}</h3>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {skill.techs.map((tech) => (
                <div key={tech.name} title={tech.name}>
                  <img src={tech.icon} className="w-10 h-10 md:w-12 md:h-12" alt={tech.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
