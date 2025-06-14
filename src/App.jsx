/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import LetterGlitch from "./components/LetterGlitch";
import TextPressure from "./components/TextPressure";
import TextCursor from "./components/TextCursor";
import React from "react"; // Explicit import for ErrorBoundary
import ClickSpark from "./components/ClickSpark";

// Loader Context
const LoaderContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const useLoader = () => useContext(LoaderContext);

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader on route change or initial load
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2-second loader display

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

// Loader Component
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden animate-fadeIn">
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#60a5fa", "#1e3a8a", "#ffffff"]}
          glitchSpeed={100} // Slower for performance
          outerVignette={true}
          centerVignette={false}
          smooth={true}
        />
      </div>
      <div className="absolute inset-0 z-40">
        <TextCursor
          text="⚛️"
          delay={0.02}
          spacing={50}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={3} // Reduced for performance
          className="text-primary text-glow"
        />
      </div>
      <div className="relative z-45 text-center text-glow">
        <TextPressure
          text="Loading Satya's Portfolio..."
          fontFamily="monospace"
          fontUrl=""
          textColor="#60a5fa"
          minFontSize={100}
          width={true}
          weight={true}
          italic={true}
          alpha={true}
          flex={true}
          stroke={false}
          scale={true}
          className="text-pressure-title text-glow"
        />
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in forwards;
        }
        .animate-fadeOut {
          animation: fadeOut 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Loader Wrapper Component
const LoaderWrapper = ({ children }) => {
  const { isLoading } = useLoader();
  return (
    <>
      {isLoading && <Loader />}
      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="text-center text-foreground">Something went wrong.</h1>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <>
      <Toaster />
      <ErrorBoundary>
        <BrowserRouter>
          <LoaderProvider>
            {/* Global TextCursor */}
            <ClickSpark>
              <div className="fixed inset-0 z-10 pointer-events-none">
                <TextCursor
                  text="⚛️"
                  delay={0.02}
                  spacing={50}
                  followMouseDirection={true}
                  randomFloat={true}
                  exitDuration={0.3}
                  removalInterval={20}
                  maxPoints={3}
                  className="text-primary text-glow"
                />
              </div>
              <LoaderWrapper>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/notfound" element={<NotFound />} />
                </Routes>
              </LoaderWrapper>
            </ClickSpark>
          </LoaderProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
