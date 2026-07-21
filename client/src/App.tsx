import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Community from "./pages/Community";

const BASE_PATH = "/official";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/members" component={Members} />
      <Route path="/music" component={Music} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
      <Route path="/community" component={Community} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Router base={BASE_PATH}>
            <Toaster />
            <ScrollToTop />
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
