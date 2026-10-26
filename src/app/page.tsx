import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { QuickIntro } from "@/components/sections/QuickIntro";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Services } from "@/components/sections/Services";
import { Showreel } from "@/components/sections/Showreel";
import { FlyingVideo } from "@/components/ui/FlyingVideo";
import { site } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <QuickIntro />
        <Showreel />
        <SelectedProjects />
        <Services />
        <Faq />
        <FlyingVideo src={site.video.showreel} webmSrc={site.video.showreelWebm} poster={site.video.poster} label="Showreel video" />
      </main>
      <Footer />
    </>
  );
}
