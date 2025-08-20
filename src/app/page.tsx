import Slider from "@/components/Slider";
import Services from "@/pages/ServiceList";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <main className=" min-h-screen bg-pink-200 ">
      <Slider />
      <Services />
      <ChooseUs />
      <Testimonials />
      <Contact/>
    </main>
  );
}
