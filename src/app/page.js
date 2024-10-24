import HeroSection from "./components/hero";
import AchievementsSection from "./components/achivement-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <div className="container mt-24 mx-auto px-12 py-4 lg:mt-10">
        <HeroSection />
        <AchievementsSection />
      </div>
    </main>
  );
}
