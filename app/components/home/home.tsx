import Hero from "./components/hero";
import Ecosystem from "./components/ecosystem";
import Closing from "./components/closing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Ecosystem />
      <Closing />
      <Footer />
    </div>
  );
}
