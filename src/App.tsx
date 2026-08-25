import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Employment } from "./components/Employment";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { GithubStats } from "./components/GithubStats";
import { Education } from "./components/Education";

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
