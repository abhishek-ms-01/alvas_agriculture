import DepartmentPage, {
  DeptPageProps,
} from "../DepartmentPage";

const data: DeptPageProps = {
  breadcrumb: "B.Tech Food Technology",
  path: "UG Programmes",

  /* ─── HERO ─── */
  hero: {
    image: "https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg",
    badge: "UG Programme · B.Tech Food Technology",
    title: (
      <>
        B.Tech <span>Food Technology</span>
      </>
    ),
    subtitle:
      "A 4-year AICTE-approved engineering programme bridging agricultural production and food processing — covering food chemistry, microbiology, processing engineering, packaging, and quality assurance.",
    pills: [
      { value: "4 Years", label: "Duration" },
      { value: "60", label: "Seats" },
      { value: "AICTE", label: "Approved" },
      { value: "FSSAI", label: "Compliant" },
    ],
  },

  /* ─── ABOUT ─── */
  about: {
    mainImage: "/ai.png",
    badge1: { label: "CFTRI Collaboration", sub: "Technical Guidance" },
    badge2: { label: "95% Placement", sub: "Top Food Industries" },
    mainDescription: "The B.Tech. in Food Technology at Alva's is a dynamic program designed to master the chemistry and engineering of food. We combine theoretical knowledge with extensive hands-on experience in our state-of-the-art laboratories. Our graduates are industry-ready professionals, capable of innovating in food safety, processing, and preservation to meet the growing global demand for high-quality and sustainable nutritional solutions.",
    cards: [
      {
        icon: "🏭",
        title: "Programme Overview",
        body: "The B.Tech Food Technology programme at Alva's Institute bridges agricultural production with the food processing industry. It is a 4-year undergraduate engineering degree, AICTE approved and UAS Dharwad affiliated, covering food chemistry, microbiology, processing engineering, packaging, quality assurance, and food regulatory affairs.",
        wide: true,
      },
      {
        icon: "🔬",
        title: "State-of-the-Art Labs",
        body: "Students access food processing pilot plants, spray dryers, freeze dryers, packaging analysis equipment, sensory evaluation panels, and HACCP-certified microbiology laboratories.",
      },
      {
        icon: "🤝",
        title: "Industry Internships",
        body: "Mandatory 2-month industry internship in Year 4 with MoU-linked companies like Nestlé, ITC, Britannia, and regional FSSAI-approved food testing labs.",
      },
    ],
    stats: [
      { value: "4", label: "Year Programme" },
      { value: "60", label: "Seats Available" },
      { value: "25+", label: "Research Papers" },
      { value: "18+", label: "Years of Excellence" },
    ],
  },

  /* ─── DEAN ─── */
  dean: {
    name: "Dr. S N Vasudevan",
    title: "Dean — Food Technology & Engineering",
    photo: "/MSM_0722.jpg",
    experience: "18+ Years",
    qualification: "Ph.D. Food Technology",
    specialization: "Food Processing",
    publications: "25+ Papers",
    bio: "Dr. S N Vasudevan is an expert in Food Processing and Preservation with over 18 years of academic and research experience. She holds a Ph.D. in Food Technology and has been at the forefront of developing innovative food preservation techniques. Her research focuses on value addition to traditional crops and developing sustainable packaging solutions for the food industry. She has mentored numerous projects that have won accolades at national-level symposiums and successfully guided students to top positions in FSSAI, Nestlé, and CFTRI.",
    quote:
      "Food technology is the bridge between the farm and the fork. We train engineers who ensure that every grain harvested reaches the consumer safely, nutritiously, and sustainably.",
  },

  /* ─── STAFF ─── */
  staff: [
    {
      name: "Dr. Neeraja Reddy",
      role: "Associate Professor",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      tags: ["Food Microbiology", "Safety", "Ph.D."],
      designation: "Associate Professor & Lab In-charge",
      email: "neeraja.reddy@alvas.edu.in",
      joiningDate: "10-08-2015",
      education: ["Ph.D. in Food Technology (CFTRI)", "M.Tech. (Food Safety)"],
      experience: "9+ years in Food Microbiology and Quality Assurance.",
      interests: ["Probiotics", "Food Safety Standards"],
    },
    {
      name: "Prof. Michael D'Souza",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      tags: ["Dairy Tech", "Process Eng.", "M.Tech."],
    },
    {
      name: "Ms. Shalini Gupta",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      tags: ["Fruit & Veg Tech", "Post-Harvest", "M.Tech."],
    },
    {
      name: "Dr. Rahul Verma",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      tags: ["Nutraceuticals", "Functional Foods", "Ph.D."],
    },
    {
      name: "Mr. Sandeep Patil",
      role: "Lab Instructor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      tags: ["Food Quality Analysis", "Instrumentation"],
    },
    {
      name: "Ms. Ananya Das",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      tags: ["Beverage Tech", "Packing Science", "M.Tech."],
    },
  ],

  /* ─── ACTIVITIES ─── */
  activities: [
    {
      icon: "🍱",
      bg: "rgba(239,68,68,0.15)",
      title: "National Food Festival",
      description:
        "Annual showcase where students present self-developed food products — ready-to-eat meals, fortified snacks, herbal beverages — to industry judges, FSSAI officials, and media.",
      tag: "Annual Event",
    },
    {
      icon: "🏭",
      bg: "rgba(22,163,74,0.15)",
      title: "Industrial Visit Program",
      description:
        "Structured visits to food processing plants including dairy plants, beverage factories, FSSAI testing laboratories, and export-oriented agro-processing units across Karnataka.",
      tag: "Industrial Visit",
    },
    {
      icon: "📋",
      bg: "rgba(59,130,246,0.15)",
      title: "FSSAI Awareness Drive",
      description:
        "Students conduct drives in local markets to educate vendors and small food businesses about FSSAI licensing, food labelling requirements, and hygiene standards compliance.",
      tag: "Community",
    },
    {
      icon: "🧬",
      bg: "rgba(168,85,247,0.15)",
      title: "Product Development Hackathon",
      description:
        "48-hour interdisciplinary hackathon encouraging students to ideate, develop, and pitch marketable food products addressing real consumer problems — nutrition gap, shelf life, or food waste.",
      tag: "Innovation",
    },
    {
      icon: "🎓",
      bg: "rgba(250,204,21,0.15)",
      title: "Expert Lecture Series",
      description:
        "Monthly guest lectures by food scientists, FSSAI officers, startup founders, and R&D heads from leading food companies providing industry insights and career guidance.",
      tag: "Academic",
    },
    {
      icon: "🏆",
      bg: "rgba(20,184,166,0.15)",
      title: "Inter-College Food Science Quiz",
      description:
        "State-level food science quiz competition organised by the department, attracting teams from across Karnataka and fostering healthy academic competition among agri-food students.",
      tag: "Competition",
    },
  ],

  /* ─── GALLERY ─── */
  gallery: [
    {
      src: "/LAB1.jpeg",
      alt: "Food Processing Lab",
      caption: "Pilot Plant — Food Processing Unit",
      span: true,
      placeholder: "🏭",
      bg: "linear-gradient(135deg, #450a0a, #7f1d1d)",
    },
    {
      src: "/LAB2.jpeg",
      alt: "Laboratory Analysis",
      caption: "Food Quality & Analysis Lab",
      placeholder: "🔬",
      bg: "linear-gradient(135deg, #0a2e05, #14532d)",
    },
    {
      src: "/agriculture%20field2.jpeg",
      alt: "Raw Material",
      caption: "Farm-to-Fork Raw Material Sourcing",
      placeholder: "🌾",
      bg: "linear-gradient(135deg, #422006, #78350f)",
    },
    {
      src: "/agrimarkeing.jpeg",
      alt: "Agri Marketing",
      caption: "Agricultural Marketing & Value Chain",
      placeholder: "📦",
      bg: "linear-gradient(135deg, #1e3a8a, #1e40af)",
    },
    {
      src: "/PLACEMENT.jpg",
      alt: "Placements",
      caption: "Industry Placements & Internships",
      placeholder: "🎓",
      bg: "linear-gradient(135deg, #312e81, #3730a3)",
    },
    {
      src: "/A.I.E.T%20CAMPUS%20-2026-186.jpg",
      alt: "Campus Activities",
      caption: "Academic Events & Competitions",
      placeholder: "🏆",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
  ],
};

const BTechFoodTechnology = () => <DepartmentPage {...data} />;
export default BTechFoodTechnology;
