import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import "./index.css";
import { AppRouter } from "./providers/AppRouter.tsx/AppRouter";
import { ErrorBoundary } from "./ErrorBoundary";

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Navigation />
            <AppRouter />
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
