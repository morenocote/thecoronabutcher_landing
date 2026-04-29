import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Specials } from "@/components/Specials";
import { Catering } from "@/components/Catering";
import { CateringForm } from "@/components/CateringForm";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { SplashScreen } from "@/components/SplashScreen";
import { InstallPWA } from "@/components/InstallPWA";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Corona Butcher — Carnicería premium en Calgary | Carnes, Embutidos y Catering" },
      {
        name: "description",
        content:
          "The Corona Butcher: carnicería local en Calgary. Carnes premium, embutidos caseros, ahumados, quesos europeos y catering para eventos. Fresh service, local attention.",
      },
      { property: "og:title", content: "The Corona Butcher — Calgary Butcher Shop" },
      { property: "og:description", content: "Carnes premium, embutidos caseros y catering en Calgary." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
    ],
  }),
  component: Index,
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://thecoronabutcher.ca",
  name: "The Corona Butcher",
  image: "https://thecoronabutcher.ca/og.jpg",
  telephone: "+1-403-272-1673",
  email: "rcwluna@gmail.com",
  url: "https://store.thecoronabutcher.ca/",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1840 36 St SE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2B 0X6",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SplashScreen />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Specials />
        <Catering />
        <CateringForm />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <InstallPWA />
      <BackToTop />
      <Toaster position="top-center" richColors />
    </div>
  );
}
