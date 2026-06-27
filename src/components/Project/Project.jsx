import React from "react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "طراحی لندینگ پیج خرید فروش ماشین",
      ability: "بلاگ | کارت محصولات | رسپانسیو | فیلتر",
      lang: ["Tailwind CSS", "JavaScript", "Vite"],
      employer: "نمونه پروژه",
      image: "./icons/front.webp",
      header: "./projects/car-project.webp",
      link: "https://mobindevn.github.io/buying-car-website-tailwind/",
    },
    {
      id: 2,
      title: "طراحی لندینگ پیج رستوران",
      ability: "بلاگ | کارت محصولات | رسپانسیو | فیلتر",
      lang: ["Tailwind CSS", "JavaScript", "Vite"],
      employer: "نمونه پروژه",
      image: "./icons/front.webp",
      header: "./projects/resturant.webp",
      link: "https://mobindevn.github.io/landing-restaurant-reponsive-tailwind/public/",
    },
    {
      id: 3,
      title: "سیستم مدیریت برنامه باشگاه بدنسازی",
      ability: "قابلیت چیدن برنامه در روزهای مختلف | درگ دراپ | ذخیره برنامه",
      lang: ["Tailwind CSS", "JavaScript", "Vite"],
      employer: "نمونه پروژه",
      image: "./icons/front.webp",
      header: "./projects/gym-project.webp",
      link: "https://gym.mobinnz.ir/",
    },
    {
      id: 4,
      title: "طراحی پلتفرم آکادمی آموزشی",
      ability:
        "دارای چهار پنل | ثبت کلاس | حضورغیاب | کلندر و اکسل ماهانه | ثبت رسید و تایید مالی",
      lang: ["Tailwind CSS", "JavaScript", "Rest API", "PHP", "MySQL"],
      employer: "آکادمی آیولرن",
      image: "./icons/front.webp",
      header: "./projects/rayaclass.webp",
    },
    {
      id: 5,
      title: "طراحی سایت فروشگاهی جواهرات",
      ability:
        "کار با المنتور و ووکارس | ثبت محصول | پنل کاربری مشتری و ادمین | درگاه پرداخت بین‌المللی",
      lang: ["WordPress", "Elementor", "woocommerce", "PayPal Plugin"],
      employer: "EyeHara | Store in Dubai",
      image: "./icons/front.webp",
      header: "./projects/eyehara.webp",
    },
    {
      id: 6,
      title: "طراحی سایت فروشگاهی شال و عبا",
      ability:
        "کار با المنتور و ووکارس | ثبت محصول | پنل کاربری مشتری و ادمین | درگاه پرداخت بین‌المللی",
      lang: ["WordPress", "Elementor", "woocommerce", "PayPal Plugin"],
      employer: "Atlasscarf | Store in Dubai",
      image: "./icons/front.webp",
      header: "./projects/atlasscarfs.webp",
    },
    {
      id: 7,
      title: "طراحی پتلفرم ذخیره پسورد به صورت امنیتی",
      ability:
        "ذخیره مسترپسورد برای مشاهده رمزعبور و افزودن رمزعبور | تغییر تم | ذخیره رمزعبور به صورت AES-GCM Encryption",
      lang: ["Tailwind Css", "JavaScript", "AES-GCM", "LocalStorage"],
      employer: "پروژه تستی",
      image: "./icons/front.webp",
      header: "./projects/pm.webp",
      link: "https://pm.mobinnz.ir/",
    },
    {
      id: 8,
      title: "طراحی سایت اجاره خودرو لوکس در دبی",
      ability:
        "مشاهده خودرو و مشخصات فنی | قیمت روزانه و ماهانه اجاره | اجاره در واتساپ | سئو",
      lang: ["WordPress", "Elementor", "woocommerce", "PayPal Plugin"],
      employer: "CarDone - Dubai",
      image: "./icons/front.webp",
      header: "./projects/car-project-w.webp",
    },
    {
      id: 9,
      title: "طراحی سایت نوبت دهی و نمونه‌کار زیبایی",
      ability:
        "نوبت دهی پزشک | نمونه‌کار های عمل زیبایی | ارتباط با پزشک | مقاله",
      lang: ["WordPress", "Elementor", "woocommerce", "Forms", "Rank Math"],
      employer: "کلینیک زیبایی دکتر بهناز هاشمیان",
      image: "./icons/front.webp",
      header: "./projects/dr.webp",
    },
    {
      id: 10,
      title: "طراحی سایت فروشگاهی خرید فایل مقاله",
      ability:
        "کار با المنتور (طراحی اختصاصی) و ووکارس | ثبت محصول | پنل کاربری مشتری و ادمین | درگاه پرداخت | کدنویسی اختصاصی",
      lang: ["WordPress", "Elementor", "woocommerce", "PHP"],
      employer: "رصدبینا - با توجه به محرمانگی پروژه امکان نمایشش رو ندارم (:",
      image: "./icons/front.webp",
    },
    {
      id: 11,
      title: "طراحی پلتفرم حضورغیاب کارمندان",
      ability:
        "دارای پنل مدیر و کارمند | قابلیت ثبت حضور از طریق لوکیشن | امکان دریافت مرخصی",
      lang: ["BootStrap", "JavaScript", "Rest API", "PHP", "MySQL"],
      employer: "آیولرن - با توجه به محرمانگی پروژه امکان نمایشش رو ندارم (:",
      image: "./icons/front.webp",
    },
    {
      id: 12,
      title: "طراحی پنل اعتبارسنجی مدرک",
      ability:
        "ثبت مدرک از طریق کد | اعتبارسنجی مدرک از طریق QrCode و شماره مدرک",
      lang: ["BootStrap", "JavaScript", "Rest API", "PHP", "MySQL"],
      employer: "آیولرن - با توجه به محرمانگی پروژه امکان نمایشش رو ندارم (:",
      image: "./icons/front.webp",
    },
  ];

  return (
    <div
      id="Projects"
      className="mx-auto mt-12 text-slate-200 font-pm p-4 md:p-8"
    >
      <h2 className="text-3xl relative font-pb w-fit mx-auto text-slate-400 pb-2 mt-8">
        پروژه‌های من
        <div className="absolute bottom-0 right-0 w-1/2 h-[4px] bg-slate-500 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative h-[340px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.header || "./projects/secret.jpg"}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-700"
              alt={project.title}
            />

            <a href={project.link}>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent w-full h-full"></div>
            </a>

            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={project.image}
                  className="w-12 h-12 rounded-xl bg-slate-800 p-2"
                  alt=""
                />

                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>

                  <p className="text-slate-400 text-sm">{project.employer}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 line-clamp-2">
                {project.ability}
              </p>

              <div className="flex gap-2 flex-wrap mt-4">
                {project.lang.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-slate-800/80 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/70 border mt-5 gap-5 flex flex-col sm:flex-row items-center justify-center border-slate-700 p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-300 text-center sm:text-right">
        <svg
          className="w-16 h-16 text-slate-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h3 className="text-xl md:text-2xl mt-2 sm:mt-4">15+ پروژه دیگر</h3>
          <p className="text-slate-400 mt-2">
            دیدن همه پروژه‌ها در گیت‌هاب و لینکدین
          </p>
          <a
            href="https://github.com/MobinDevN"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-full py-3 px-6 bg-slate-200 mt-2 cursor-pointer hover:bg-slate-400 transition-all duration-700 hover:-translate-x-2 text-slate-900">
              مشاهده گیت‌هاب
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
