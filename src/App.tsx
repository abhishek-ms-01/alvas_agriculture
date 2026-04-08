import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Remote branch imports
import ContactUs from "./pages/contact/ContactUs";
import Internship from "./pages/internship/Internship";
import ExposureVisit from "./pages/exposure/ExposureVisit";
import Placement from "./pages/placement/Placement";
import Research from "./pages/research/Research";
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

// Local branch imports
import ChairmanMessage from "./pages/ChairmanMessage";
import DeanMessage from "./pages/DeanMessage";
import MOU from "./pages/MOU";
import AEF from "./pages/AEF";
import Administration from "./pages/Administration";
import AboutCollege from "./pages/AboutCollege";
import VisionMission from "./pages/VisionMission";
import Milestones from "./pages/Milestones";
import CampusLife from "./pages/CampusLife";

// Admissions imports
import AdmissionKCET from "./pages/admissions/AdmissionKCET";
import AdmissionAgriQuota from "./pages/admissions/AdmissionAgriQuota";
import AdmissionManagement from "./pages/admissions/AdmissionManagement";
import DocumentsRequired from "./pages/admissions/DocumentsRequired";
import Disclaimer from "./pages/admissions/Disclaimer";
import FeesKCET from "./pages/admissions/FeesKCET";
import FeesAgriQuota from "./pages/admissions/FeesAgriQuota";
import FeesManagement from "./pages/admissions/FeesManagement";
import TuitionFees from "./pages/admissions/TuitionFees";
import ScholarshipsList from "./pages/admissions/ScholarshipsList";
import ScholarshipSchemes from "./pages/admissions/ScholarshipSchemes";

// About sub-page imports
import NAAC from "./pages/about/NAAC";
import Recognition from "./pages/about/Recognition";
import StatutoryApprovals from "./pages/about/StatutoryApprovals";
import RTI from "./pages/about/RTI";
import NCTE from "./pages/about/NCTE";
import Affiliations from "./pages/about/Affiliations";
import MandatoryDisclosure from "./pages/about/MandatoryDisclosure";

// Academics imports
import AgricultureEngineering from "./pages/academics/ug/AgricultureEngineering";
import AIML from "./pages/academics/ug/AIML";
import CSEngineering from "./pages/academics/ug/CSEngineering";
import CivilEngineering from "./pages/academics/ug/CivilEngineering";
import BScAgriculture from "./pages/academics/ug/BScAgriculture";
import BTechFoodTechnology from "./pages/academics/ug/BTechFoodTechnology";
import MBA from "./pages/academics/pg/MBA";
import MTech from "./pages/academics/pg/MTech";
import Chemistry from "./pages/academics/basic/Chemistry";
import Mathematics from "./pages/academics/basic/Mathematics";
import Physics from "./pages/academics/basic/Physics";
import English from "./pages/academics/basic/English";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* About section routes */}
          <Route path="/chairman-message" element={<ChairmanMessage />} />
          <Route path="/dean-message" element={<DeanMessage />} />
          <Route path="/mou" element={<MOU />} />
          <Route path="/aef" element={<AEF />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/about-college" element={<AboutCollege />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/campus-life" element={<CampusLife />} />

          {/* About sub-page routes */}
          <Route path="/about/naac" element={<NAAC />} />
          <Route path="/about/recognition" element={<Recognition />} />
          <Route path="/about/statutory-approvals" element={<StatutoryApprovals />} />
          <Route path="/about/rti" element={<RTI />} />
          <Route path="/about/ncte" element={<NCTE />} />
          <Route path="/about/affiliations" element={<Affiliations />} />
          <Route path="/about/mandatory-disclosure" element={<MandatoryDisclosure />} />

          {/* Academics routes */}
          <Route path="/academics/ug/bsc-agriculture" element={<BScAgriculture />} />
          <Route path="/academics/ug/btech-food-technology" element={<BTechFoodTechnology />} />
          <Route path="/academics/ug/agriculture-engineering" element={<AgricultureEngineering />} />
          <Route path="/academics/ug/ai-ml" element={<AIML />} />
          <Route path="/academics/ug/cs-engineering" element={<CSEngineering />} />
          <Route path="/academics/ug/civil-engineering" element={<CivilEngineering />} />
          <Route path="/academics/pg/mba" element={<MBA />} />
          <Route path="/academics/pg/mtech" element={<MTech />} />
          <Route path="/academics/basic/chemistry" element={<Chemistry />} />
          <Route path="/academics/basic/mathematics" element={<Mathematics />} />
          <Route path="/academics/basic/physics" element={<Physics />} />
          <Route path="/academics/basic/english" element={<English />} />

          {/* Admissions routes */}
          <Route path="/admissions/kcet" element={<AdmissionKCET />} />
          <Route path="/admissions/agri-quota" element={<AdmissionAgriQuota />} />
          <Route path="/admissions/management" element={<AdmissionManagement />} />
          <Route path="/admissions/documents" element={<DocumentsRequired />} />
          <Route path="/admissions/disclaimer" element={<Disclaimer />} />
          <Route path="/admissions/fees/kcet" element={<FeesKCET />} />
          <Route path="/admissions/fees/agri-quota" element={<FeesAgriQuota />} />
          <Route path="/admissions/fees/management" element={<FeesManagement />} />
          <Route path="/admissions/fees/tuition-2025" element={<TuitionFees />} />
          <Route path="/admissions/scholarships/list" element={<ScholarshipsList />} />
          <Route path="/admissions/scholarships/schemes" element={<ScholarshipSchemes />} />

          {/* Other section routes */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/exposure-visit" element={<ExposureVisit />} />
          <Route path="/placements" element={<Placement />} />
          <Route path="/research" element={<Research />} />
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
