import Body from "@/components/shared/body";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}
