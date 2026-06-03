import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DepartmentPage from "./pages/DepartmentPage.tsx";
import SalesPage from "./pages/SalesPage.tsx";
import SdrWorkerPage from "./pages/SdrWorkerPage.tsx";
import SdrWorkerFullPage from "./pages/SdrWorkerFullPage.tsx";
import SdrLeadResponsePage from "./pages/SdrLeadResponsePage.tsx";
import SdrContactEnrichmentPage from "./pages/SdrContactEnrichmentPage.tsx";
import SdrHiringSignalsPage from "./pages/SdrHiringSignalsPage.tsx";
import MarketingPage from "./pages/MarketingPage.tsx";
import FinancePage from "./pages/FinancePage.tsx";
import ContentOperationsWorkerPage from "./pages/ContentOperationsWorkerPage.tsx";
import AdvertisingWorkerPage from "./pages/AdvertisingWorkerPage.tsx";
import ContentMarketingWorkerPage from "./pages/ContentMarketingWorkerPage.tsx";
import CashFlowWorkerPage from "./pages/CashFlowWorkerPage.tsx";
import AccountsPayableWorkerPage from "./pages/AccountsPayableWorkerPage.tsx";
import AccountsReceivableWorkerPage from "./pages/AccountsReceivableWorkerPage.tsx";
import SalesPlaybookWorkerPage from "./pages/SalesPlaybookWorkerPage.tsx";
import PipelineReportingWorkerPage from "./pages/PipelineReportingWorkerPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import PlatformPage from "./pages/PlatformPage.tsx";
import UiElementsPage from "./pages/UiElementsPage.tsx";
import DeckPage from "./pages/DeckPage.tsx";
import OtherDepartmentsPage from "./pages/OtherDepartmentsPage.tsx";
import OurTeamPage from "./pages/OurTeamPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { BookDemoDialog } from "./components/BookDemoDialog";
import { WhitepaperDialog } from "./components/WhitepaperDialog";
import { DiscoveryWorkshopDialog } from "./components/DiscoveryWorkshopDialog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BookDemoDialog />
      <WhitepaperDialog />
      <DiscoveryWorkshopDialog />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/sales/sdr" element={<SdrWorkerPage />} />
          <Route path="/sales/sdr-full" element={<SdrWorkerFullPage />} />
          <Route path="/sales/sdr-lead-response" element={<SdrLeadResponsePage />} />
          <Route path="/sales/sdr-contact-enrichment" element={<SdrContactEnrichmentPage />} />
          <Route path="/sales/sdr-hiring-signals" element={<SdrHiringSignalsPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/marketing/content-operations" element={<ContentOperationsWorkerPage />} />
          {/* Legacy redirect-style alias for old SEO worker URL */}
          <Route path="/marketing/seo" element={<ContentOperationsWorkerPage />} />
          <Route path="/marketing/advertising" element={<AdvertisingWorkerPage />} />
          <Route path="/marketing/content" element={<ContentMarketingWorkerPage />} />
          <Route path="/finance/cash-flow" element={<CashFlowWorkerPage />} />
          <Route path="/finance/accounts-payable" element={<AccountsPayableWorkerPage />} />
          <Route path="/finance/accounts-receivable" element={<AccountsReceivableWorkerPage />} />
          <Route path="/sales/playbook" element={<SalesPlaybookWorkerPage />} />
          <Route path="/sales/pipeline" element={<PipelineReportingWorkerPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/ui-elements" element={<UiElementsPage />} />
          <Route path="/deck" element={<DeckPage />} />
          <Route path="/other-departments" element={<OtherDepartmentsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/:department" element={<DepartmentPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
