import React from "react";

function Hero() {
  return (
    <div className="font-pr text-center px-4 py-8 pb-0 md:p-6 relative">
      <h4 className="text-slate-200 text-base md:text-xl mt-4">
        سایت می‌سازم که هم کار می‌کنه، هم دیده می‌شه.
      </h4>
      <h1 className="text-slate-300 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-pbl mt-6 md:mt-2 leading-tight">
        برنامه نویس فول‌استک
      </h1>
      <h1 className="text-slate-500 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-pbl mt-4 md:mt-2 leading-tight sticky z-5">
        فرانت‌اند، بک‌اند و سئو
      </h1>
      <p className="text-slate-200 text-sm md:text-xl mt-6 md:mt-8 max-w-2xl mx-auto leading-8 md:leading-9">
        توسعه‌دهنده و طراح وب با سه سال تجربه حرفه‌ای در پروژه‌های تخصصی.
        <br className="hidden md:block" /> در طراحی سایت‌های ریسپانسیو، سئو و
        توسعه وردپرس تخصص دارم و با فریم‌ورک‌های مدرن، پایتون و هوش مصنوعی آشنا
        هستم.
      </p>

      <p className="flex items-center justify-center text-slate-200 gap-1 text-sm md:text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>

        ایران، تهران
      </p>

      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/MobinDevN">
            <svg
              className="w-8 h-8 text-slate-200 hover:text-slate-500 transition-all duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/mobin-nayebizade-724b992b7">
            <svg
              className="w-8 h-8 text-slate-200 hover:text-slate-500 transition-all duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clipRule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>

          <a href="mailto:mobinn11086@gmail.com">
            <svg
              className="w-8 h-8 text-slate-200 hover:text-slate-500 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
        </div>

        <a href="#Contact">
          <button className="rounded-full p-3 md:py-3 md:px-6 bg-slate-200 mt-5 cursor-pointer hover:bg-slate-400 transition-all duration-700 hover:-translate-y-2">
            باهم صحبت کنیم!
          </button>
        </a>
      </div>
      <img
        src="./Vector.webp"
        className="w-96 absolute left-3 bottom-0 z-1 hidden md:block"
        alt=""
      />
      <img src="./Vector.webp" className="w-96 md:hidden mt-5" alt="" />
    </div>
  );
}

export default Hero;
