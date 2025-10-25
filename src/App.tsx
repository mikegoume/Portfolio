import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Services from "./components/Services";
import TechStack from "./components/Stack";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-100 overflow-y-auto">
      <LoadingScreen
        isLoading={isLoading}
        onFinish={() => setIsLoading(false)}
      />
      <Header />
      <Section1 />
      <div className="w-full h-[100vh]" />
      <AboutSection />
      <Services />
      <TechStack />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
