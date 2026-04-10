import DepartmentPage, {
  DeptPageProps,
} from "../DepartmentPage";

const data: DeptPageProps = {
  breadcrumb: "B.Sc. (Hons) Agriculture",
  path: "UG Programmes",

  /* ─── HERO ─── */
  hero: {
    image: "https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg",
    badge: "UG Programme · B.Sc. Agriculture",
    title: (
      <>
        B.Sc. (Hons) <span>Agriculture</span>
      </>
    ),
    subtitle:
      "A 4-year ICAR honours programme covering agronomy, horticulture, soil science, plant pathology, entomology, and agricultural economics — designed to build skilled, research-ready agricultural professionals.",
    pills: [
      { value: "4 Years", label: "Duration" },
      { value: "60", label: "Seats" },
      { value: "K.S.N.U.A.H.S.,Shivamogga", label: "Affiliated" },
      { value: "ICAR", label: "Curriculum" },
    ],
  },

  /* ─── ABOUT ─── */
  about: {
    mainImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    badge1: { label: "1st in Costal Karnataka", sub: "Private Agri College" },
    badge2: { label: "K.S.N.U.A.H.S.,Shivamogga Affiliated", sub: "Top University" },
    mainDescription: "Established in 2025, our B.Sc. (Hons) Agriculture program is committed to producing the next generation agricultural leaders. We bridge the gap between traditional farming wisdom and modern technological advancements. Our curriculum is designed as per the 6TH dean committee Syllabus Approved by Indian Council of Agricultural Research (ICAR) ,NEW DELHI in order to provide students with a deep understanding of soil heath, crop / seed production, control of pest and diseases, organic farming and sustainable management practices, ensuring they are well-equipped to tackle real-world agricultural challenges.",
    cards: [
      {
        icon: "🌾",
        title: "Programme Overview",
        body: "The B.Sc. (Hons) Agriculture is the flagship UG offering of Alva's Institute of Agricultural Science & Technology. It follows the ICAR 6TH Dean's Committee curriculum ensuring national-standard quality across all agricultural universities in India.",
        wide: true,
      },
      {
        icon: "🔬",
        title: "Hands-on Learning",
        body: "Students receive training through farm practicals, field visits, crop production experiments, and internships at Krishi Vigyan Kendras (KVKs) preparing them for real-world agricultural challenges.",
      },
      {
        icon: "🚀",
        title: "Experiential Learning (ELP)",
        body: "In Year 4, every student runs a real agri-enterprise — mushroom cultivation, nursery management, vermicomposting, or dairy units — under faculty mentorship.",
      },
    ],
    stats: [
      { value: "4", label: "Year Programme" },
      { value: "60", label: "Seats Available" },
      { value: "40+", label: "Research Papers" },
      { value: "25+", label: "Years of Excellence" },
    ],
  },

  /* ─── DEAN ─── */
  dean: {
    name: "Dr. S N Vasudevan",
    title: "Dean — B.Sc. (Hons) Agriculture",
    photo: "/MSM_0722.jpg",
    experience: "40+ Years",
    qualification: "Ph.D. Agronomy",
    specialization: "Agronomy",
    publications: "200+ Papers",
    bio: "Dr. S N Vasudevan is a distinguished academician with over 40 years of experience in the field of Seed Science and Technology. He holds a Ph.D. from a premier Agricultural University, Bangalore and has published over 200 research papers in reputable National and International journals. Under his leadership, the department has established several research initiatives focusing on climate-resilient agriculture and organic farming techniques, significantly improving graduate placement outcomes.",
    quote:
      "Agriculture is not just a profession — it is a calling to steward the earth and nourish humanity. At our department, we cultivate scientists, entrepreneurs, and changemakers.",
  },

  /* ─── STAFF ─── */
  staff: [
    {
      name: "Prof. Rajesh Mehra",
      role: "Associate Professor",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      tags: ["Soil Science", "Soil Morphology", "M.Sc."],
      designation: "Associate Professor & Assistant Registrar",
      email: "rajesh.mehra@alvas.edu.in",
      joiningDate: "15-06-2010",
      education: ["Ph.D. in Soil Science (UAS Bengaluru)", "M.Sc. Agriculture (Agri. Chemistry)"],
      experience: "14+ years of teaching and research in Soil Morphology and Plant Nutrition.",
      interests: ["Remote Sensing in Agriculture", "Digital Soil Mapping"],
    },
    {
      name: "Dr. Anita Sharma",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      tags: ["Horticulture", "Floriculture", "Ph.D."],
    },
    {
      name: "Mr. Vikram Singh",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      tags: ["Agronomy", "Water Management", "M.Sc."],
    },
    {
      name: "Dr. Kavita Rao",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      tags: ["Plant Pathology", "Mycology", "Ph.D."],
    },
    {
      name: "Mr. Naresh Kumar",
      role: "Lab Instructor",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      tags: ["Field Practicals", "Soil Testing"],
    },
    {
      name: "Ms. Priya Nair",
      role: "Assistant Professor",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      tags: ["Agricultural Economics", "Extension"],
    },
  ],

  /* ─── ACTIVITIES ─── */
  activities: [
    {
      icon: "🌱",
      bg: "rgba(22,163,74,0.15)",
      title: "Kisan Mela — Farmer Fair",
      description:
        "Annual farmer fair connecting students with local farmers to exchange knowledge on modern crop varieties, organic inputs, and government scheme awareness. Over 500 farmers participate each year.",
      tag: "Annual Event",
    },
    {
      icon: "🧪",
      bg: "rgba(59,130,246,0.15)",
      title: "Soil Health Camp",
      description:
        "Students conduct free soil testing camps in nearby villages, providing detailed soil health card reports and crop-specific nutrient management recommendations to farming communities.",
      tag: "Community Service",
    },
    {
      icon: "🏆",
      bg: "rgba(250,204,21,0.15)",
      title: "Agri Quiz & Science Fair",
      description:
        "Inter-department quiz competitions on agricultural science, followed by a science fair where students present innovative agri-solutions including drone-based monitoring and bio-pesticide formulations.",
      tag: "Academic",
    },
    {
      icon: "🌿",
      bg: "rgba(168,85,247,0.15)",
      title: "Organic Farming Workshop",
      description:
        "Hands-on workshops on vermicomposting, bio-fertiliser production, and zero-budget natural farming (ZBNF) techniques conducted by expert practitioners and NABARD officials.",
      tag: "Workshop",
    },
    {
      icon: "📸",
      bg: "rgba(239,68,68,0.15)",
      title: "Field Visit & Industrial Tour",
      description:
        "Annual industrial exposure visits to KVKs, ICAR research stations, agro-processing units, and progressive farms across Karnataka giving students first-hand industry exposure.",
      tag: "Industrial Visit",
    },
    {
      icon: "🎓",
      bg: "rgba(20,184,166,0.15)",
      title: "Alumni Interaction Meet",
      description:
        "Regular meets with alumni working in government services, research institutions, and agri-business to mentor current students on career paths, competitive exams, and entrepreneurship.",
      tag: "Career",
    },
  ],

  /* ─── GALLERY ─── */
  gallery: [
    {
      src: "/agriculture%20filed.jpeg",
      alt: "Crop Production Fields",
      caption: "Crop Production Field Practicals",
      span: true,
      placeholder: "🌾",
      bg: "linear-gradient(135deg, #052e16, #14532d)",
    },
    {
      src: "/horticulture3.jpeg",
      alt: "Horticulture Unit",
      caption: "Horticulture Demonstration Plot",
      placeholder: "🌿",
      bg: "linear-gradient(135deg, #14532d, #15803d)",
    },
    {
      src: "/apiculture.jpeg",
      alt: "Apiculture Unit",
      caption: "Apiculture — Bee Keeping Unit",
      placeholder: "🐝",
      bg: "linear-gradient(135deg, #713f12, #92400e)",
    },
    {
      src: "/nursary.jpg",
      alt: "Nursery",
      caption: "Plant Nursery & Propagation Unit",
      placeholder: "🌱",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
    {
      src: "/technologidrone.jpeg",
      alt: "Agri Technology",
      caption: "Drone-Based Precision Agriculture",
      placeholder: "🚁",
      bg: "linear-gradient(135deg, #1e3a5f, #0c4a6e)",
    },
    {
      src: "/A.I.E.T%20CAMPUS%20-2026-185.jpg",
      alt: "Campus Event",
      caption: "Annual Kisan Mela",
      placeholder: "🌻",
      bg: "linear-gradient(135deg, #422006, #78350f)",
    },
  ],
};

const BScAgriculture = () => <DepartmentPage {...data} />;
export default BScAgriculture;
