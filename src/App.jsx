"use client";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went Wrong</p>}>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App;
