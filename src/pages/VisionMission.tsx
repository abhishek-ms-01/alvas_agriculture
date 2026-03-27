import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./VisionMission.css";

const VisionMission = () => {
    return (
        <div className="vm-page-root">
            <Header />

            {/* Background Animation */}
            <div className="background-animation">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="vm-container">
                {/* Header */}
                <div className="vm-header">
                    <h1>🌿 Vision & Mission</h1>
                    <p>Cultivating Excellence in Agricultural Education & Innovation</p>
                </div>

                {/* Main Content Grid */}
                <div className="content-grid">
                    {/* Vision Section */}
                    <div className="vision-section">
                        <div className="organic-bg"></div>
                        <div className="corner-accent"></div>
                        
                        <div className="section-content">
                            <div className="section-header">
                                <span className="section-icon">🎯</span>
                                <h2 className="section-title">Vision</h2>
                            </div>

                            <div className="section-text">
                                <p>
                                    To emerge as a <span className="emphasis-text">beacon of agricultural excellence</span>, 
                                    fostering innovative solutions that bridge traditional wisdom with cutting-edge technology.
                                </p>
                                <p>
                                    We envision a world where <span className="emphasis-text">farmers thrive through knowledge</span>, 
                                    sustainable practices flourish, and rural communities prosper with dignity, creating 
                                    a green future for generations to come.
                                </p>
                            </div>

                            <div className="feature-tags">
                                <div className="feature-tag">🔬 Research Excellence</div>
                                <div className="feature-tag">🌱 Sustainability</div>
                                <div className="feature-tag">🤝 Rural Empowerment</div>
                                <div className="feature-tag">🌍 Global Vision</div>
                                <div className="feature-tag">💡 Innovation</div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="mission-section">
                        <div className="organic-bg"></div>
                        <div className="corner-accent"></div>
                        
                        <div className="section-content">
                            <div className="section-header">
                                <span className="section-icon">📋</span>
                                <h2 className="section-title">Mission</h2>
                            </div>

                            <div className="section-text">
                                <p>
                                    To deliver <span className="emphasis-text">world-class education</span> that empowers 
                                    agricultural professionals with modern skills, scientific knowledge, and entrepreneurial spirit.
                                </p>
                                <p>
                                    We commit to <span class="emphasis-text">advancing agricultural science</span> through 
                                    groundbreaking research, community engagement, and extension programs that transform 
                                    farming into a sustainable, profitable, and dignified profession.
                                </p>
                            </div>

                            <div className="feature-tags">
                                <div className="feature-tag">🎓 Quality Education</div>
                                <div className="feature-tag">🔍 Applied Research</div>
                                <div className="feature-tag">👨‍🌾 Farmer Support</div>
                                <div className="feature-tag">🌿 Eco-Farming</div>
                                <div className="feature-tag">📈 Growth</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default VisionMission;
