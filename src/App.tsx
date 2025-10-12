import { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-screen bg-neutral-100">
      {/* <LoadingScreen
        isLoading={isLoading}
        onFinish={() => setIsLoading(false)}
      /> */}
      <Header />
      <Section1 />
      <Navbar />
    </div>
  );
}

export default App;
