import { Home, ChevronRight, Zap, Sun, Wind, Waves } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import "../../admissions/Admissions.css";

const Physics = () => (
  <div className="adm-page">
    <PageBackground count={90} color="22,101,52" opacity={0.13} />
    <Header />
    <main>
      <div className="adm-hero">
        <div className="adm-blob adm-blob-1"/><div className="adm-blob adm-blob-2"/>
        <div className="adm-hero-content">
          <div className="adm-badge"><Zap size={14}/> Basic Sciences</div>
          <h1 className="adm-title">Department of <span>Physics</span></h1>
          <p className="adm-subtitle">The Physics department delivers applied physics knowledge essential for agricultural engineering — including mechanics of farm machinery, optics for remote sensing, thermodynamics in food processing, and electronics in precision agriculture.</p>
          <div className="adm-stat-row">
            <div className="adm-stat-pill"><strong>Applied</strong> Physics</div>
            <div className="adm-stat-pill"><strong>Modern Labs</strong></div>
            <div className="adm-stat-pill"><strong>Agri-Physics</strong> Focus</div>
          </div>
        </div>
        <div className="adm-wave"><svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"/></svg></div>
      </div>
      <nav className="adm-breadcrumb"><div className="adm-breadcrumb-inner"><Home size={14}/><a href="/">Home</a><span><ChevronRight size={14}/></span><span>Academics</span><span><ChevronRight size={14}/></span><span>Basic Sciences</span><span><ChevronRight size={14}/></span><span className="adm-cur">Physics</span></div></nav>
      <div className="adm-body">
        <div className="adm-section">
          <h2 className="adm-heading">Department Overview</h2>
          <div className="adm-info-box"><h3>Physics in Agricultural Engineering</h3><p>Physics provides the scientific principles that underpin agriculture engineering. Laws of mechanics govern the design of tillage implements and tractors. Thermodynamics drives food processing and cold chain systems. Optics powers remote sensing and spectroscopy used in soil and crop health analysis. Electromagnetism enables the IoT and sensor technologies used in precision agriculture. The Physics department at Alva's bridges fundamental physics with these agricultural applications through rigorous coursework and laboratory practice.</p></div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Applied Physics Areas</h2>
          <div className="adm-grid">
            {[
              {icon:<Zap/>, title:"Mechanics & Farm Machinery", desc:"Rigid body dynamics, force analysis, stress-strain theory applied to tractor components, tillage tools, and harvesting equipment design."},
              {icon:<Sun/>, title:"Optics & Remote Sensing", desc:"Light-matter interactions, electromagnetic spectrum, multispectral imaging, NDVI physics, and drone sensor principles."},
              {icon:<Wind/>, title:"Thermodynamics & Heat Transfer", desc:"Laws of thermodynamics applied to grain dryers, cold storage systems, refrigeration cycles, and solar thermal devices in agriculture."},
              {icon:<Waves/>, title:"Electronics & Sensors", desc:"Semiconductor devices, analog/digital circuits, transducers, and IoT sensors used in soil moisture monitoring, weather stations, and smart irrigation."},
            ].map((item,i)=>(<div key={i} className="adm-card"><div className="adm-card-accent-bar"/><div className="adm-card-content"><div className="adm-card-icon">{item.icon}</div><h3 className="adm-card-title">{item.title}</h3><p className="adm-card-desc">{item.desc}</p></div></div>))}
          </div>
        </div>
        <div className="adm-section">
          <h2 className="adm-heading">Laboratory Facilities</h2>
          <ul className="adm-checklist">
            {["Engineering Physics Lab — Young's modulus, viscosity, sonometer, spectrometer","Optics Lab — diffraction grating, polarimetry, refractive index measurement","Electrical & Electronics Lab — CRO, multimeters, Wheatstone bridge, transistor characteristics","Sensor & IoT Lab — Arduino-based sensor nodes, DHT humidity sensors, soil moisture probes","Renewable Energy Lab — Solar panel characterisation, wind turbine model, solar collector"].map((doc,i)=>(<li key={i}><span className="adm-check-icon"><Zap size={14}/></span>{doc}</li>))}
          </ul>
        </div>
        <div className="adm-info-box"><h3>Renewable Energy in Agriculture</h3><p>A key area of focus for the Physics department is solar energy applications in farming — including solar-powered irrigation pumps, solar dryers, on-farm energy generation, and wind energy for rural electrification. Students participate in faculty-led consultancy projects and live installations on the college farm.</p></div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Physics;
