import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChairmanMessage from "./pages/ChairmanMessage";
import DeanMessage from "./pages/DeanMessage";
import MOU from "./pages/MOU";
import AEF from "./pages/AEF";
import Administration from "./pages/Administration";
import AboutCollege from "./pages/AboutCollege";
import VisionMission from "./pages/VisionMission";
import Milestones from "./pages/Milestones";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chairman-message" element={<ChairmanMessage />} />
          <Route path="/dean-message" element={<DeanMessage />} />
          <Route path="/mou" element={<MOU />} />
          <Route path="/aef" element={<AEF />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/about-college" element={<AboutCollege />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/milestones" element={<Milestones />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
