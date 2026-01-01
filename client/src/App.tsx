import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Diaries from "@/pages/Diaries";
import DiaryDetail from "@/pages/DiaryDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diaries" component={Diaries} />
      <Route path="/diaries/:slug" component={DiaryDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
