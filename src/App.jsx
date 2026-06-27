import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Certificate from "./components/Certificate/Certificate";
import History from "./components/History/History";

function App() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-cover min-h-screen">
      <Header />
      <Hero />
      <About />
      <Project />
      <History/>
      <Skills />
      <Certificate />
      <Contact />
      <div className="footer bg-white/5 backdrop-blur-xl mx-auto text-center py-3 text-slate-200 font-pr text-sm">
        پیکسل به پیکسل ساخته شده توسط <span className="text-blue-300">مبین نایبی زاده 💙</span>
      </div>
    </section>
  );
}

export default App;
