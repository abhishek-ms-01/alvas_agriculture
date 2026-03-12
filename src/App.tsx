import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/contact/ContactUs";
import Internship from "./pages/internship/Internship";
import ExposureVisit from "./pages/exposure/ExposureVisit";
import Placement from "./pages/placement/Placement";
import Funding from "./pages/research/Funding";
import IPR from "./pages/research/IPR";
import Publications from "./pages/research/Publications";
import PatentApplication from "./pages/research/PatentApplication";
import MultidisciplinaryResearch from "./pages/research/MultidisciplinaryResearch";
import ResearchTeam from "./pages/research/ResearchTeam";
import ResearchPolicies from "./pages/research/ResearchPolicies";
import ResearchSupervisors from "./pages/research/ResearchSupervisors";
import Journals from "./pages/research/Journals";
import Conference from "./pages/research/Conference";
import Facilities from "./pages/research/Facilities";
import ResearchAbout from "./pages/research/ResearchAbout";
import YearwiseDetails from "./pages/research/YearwiseDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/exposure-visit" element={<ExposureVisit />} />
          <Route path="/placements" element={<Placement />} />
          <Route path="/research/funding" element={<Funding />} />
          <Route path="/research/ipr" element={<IPR />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/patent-application" element={<PatentApplication />} />
          <Route path="/research/multidisciplinary" element={<MultidisciplinaryResearch />} />
          <Route path="/research/team" element={<ResearchTeam />} />
          <Route path="/research/policies" element={<ResearchPolicies />} />
          <Route path="/research/supervisors" element={<ResearchSupervisors />} />
          <Route path="/research/journals" element={<Journals />} />
          <Route path="/research/conference" element={<Conference />} />
          <Route path="/research/facilities" element={<Facilities />} />
          <Route path="/research/about" element={<ResearchAbout />} />
          <Route path="/research/yearwise-details" element={<YearwiseDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
