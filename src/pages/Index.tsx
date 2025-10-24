import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileCTA from "@/components/MobileCTA";

// Lazy load below-the-fold components
const Philosophy = lazy(() => import("@/components/Philosophy"));
const Programs = lazy(() => import("@/components/Programs"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Community = lazy(() => import("@/components/Community"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Philosophy />
          <Gallery />
          <Programs />
          <Community />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <MobileCTA />
    </div>
  );
};

export default Index;