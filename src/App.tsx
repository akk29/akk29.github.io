import { Hero } from "./components/Hero";
import { GithubStats } from "./components/GithubStats";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Employment } from "./components/Employment";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="app-shell min-h-screen bg-[var(--bg)] px-3 sm:px-5 md:px-6">
      <Navigation />
      <main className="max-w-3xl mx-auto pt-8 sm:pt-12">
        <Hero />
        <About />
        <Employment />
        <TechStack />
        <Projects />
        <GithubStats />
        <Education />
      </main>
    </div>
  );
}

export default App;
