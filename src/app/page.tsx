import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <CompetitiveProgramming />
      <Skills />
      <Experience />
      <Contact />
      <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Ahmed Omani.
      </footer>
    </main>
  );
}
