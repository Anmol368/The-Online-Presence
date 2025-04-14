"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import StarImg from "../../public/images/v1/star2.png";
import FadeInStagger from "../animation/FadeInStagger";
import PricingCardSEOMPB from "./PricingCardSEOMPB";
import PricingCardSEOMLB from "./PricingCardSEOMLB";
import PricingCardSEOMRB from "./PricingCardSEOMRB";

const pricingPlanDataMPB = [
  {
    id: crypto.randomUUID(),
    title: "Start",
    price: [
      { id: 1, value: 99 },
      {
        id: 2,
        value: 149,
      },
    ],
    description:
      "Standard package offers a range of services and features to rank websites",
    description2:
      "Features :",
    features: [
      "10 Keywords",
      "10 Quality Backlinks",
      "Keyword Research & Analysis",
      "Title & Meta Description",
      "Google Analytics Setup",
    ],
    highlighted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Kick Start",
    price: [
      { id: 1, value: 199 },
      {
        id: 2,
        value: 249,
      },
    ],
    description:
      "Smart package offers a set of services aimed for better rankings",
    description2:
      "Features : Start +",
    features: [
      "15 Keywords",
      "15 Quality Backlinks",
      "Competitor Analysis",
      "Image Alt Tag Optimization",
      "Website Speed Optimization",
    ],
    highlighted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Boost",
    price: [
      { id: 1, value: 299 },
      {
        id: 2,
        value: 349,
      },
    ],
    description:
      "Enterprise package typically includes a comprehensive set of more features",
      description2:
      "Features : Start + Kick Start +",
    features: [
      "20 Keywords",
      "20 Quality Backlinks",
      "Canonical Tag Optimization",
      "Page Indexing Checkup",
      "Robot.txt File Creation",
    ],
    highlighted: false,
  },
];
const pricingPlanDataMLB = [
  {
    id: crypto.randomUUID(),
    title: "Smart",
    price: [
      { id: 1, value: 499 },
      {
        id: 2,
        value: 599,
      },
    ],
    description:
      "Standard package offers a range of services and features to rank websites",
    description2:
      "Features : Mom & Pop +",
    features: [
      "25 Keywords",
      "40 Quality Backlinks",
      "Duplicate Content Checkup",
      "Heading Tags Optimization",
      "XML Sitemap Checkup",
    ],
    highlighted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Standard",
    price: [
      { id: 1, value: 799 },
      {
        id: 2,
        value: 899,
      },
    ],
    description:
      "Smart package offers a set of services aimed for better rankings",
    description2:
      "Features : Mom & Pop + Smart",
    features: [
      "35 Keywords",
      "50 Quality Backlinks",
      "Google Panelty Check",
      "Content Optimization",
      "On-site Blog Creation",
    ],
    highlighted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Advanced",
    price: [
      { id: 1, value: 1499 },
      {
        id: 2,
        value: 1599,
      },
    ],
    description:
      "Enterprise package typically includes a comprehensive set of more features",
    description2:
      "Features : Mom & Pop + Smart + Standard",
    features: [
      "60 Keywords",
      "70 Quality Backlinks",
      "Backlinks Analysis",
      "SEO Friendly URL Setup",
      "Google Webmaster Tool Setup",
    ],
    highlighted: false,
  },
];
const pricingPlanDataMRB = [
  {
    id: crypto.randomUUID(),
    title: "SEOfy",
    price: [
      { id: 1, value: 1999 },
      {
        id: 2,
        value: 2499,
      },
    ],
    description:
      "Standard package offers a range of services and features to rank websites",
    description2:
      "Features : Mom & Pop + Intermediate +",
    features: [
      "100 Keywords",
      "100 Quality Backlinks",
      "Search Engine Submissions",
      "Social Bookmarkings",
      "Profile Creations",
    ],
    highlighted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Aimer",
    price: [
      { id: 1, value: 2999 },
      {
        id: 2,
        value: 3499,
      },
    ],
    description:
      "Smart package offers a set of services aimed for better rankings",
    description2:
      "Features : Mom & Pop + Intermediate + SEOfy",
    features: [
      "150 Keywords",
      "150 Quality Backlinks",
      "Business Listing",
      "Classified Submissions",
      "Infographic Submissions",
    ],
    highlighted: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Ranker",
    price: [
      { id: 1, value: 3999 },
      {
        id: 2,
        value: 4499,
      },
    ],
    description:
      "Enterprise package typically includes a comprehensive set of more features",
    description2:
      "Features : Mom & Pop + Intermediate + SEOfy + Aimer +",
    features: [
      "200 Keywords",
      "200 Quality Backlinks",
      "Guest Postings",
      "Broken Links Checkup",
      "Platform Friendly Setup",
    ],
    highlighted: false,
  },
];

const tabs = [
  { id: "tab1", label: "Mom & Pop Business" },
  { id: "tab2", label: "Intermediate Business" },
  { id: "tab3", label: "Market Ruler" },
];


function PricingPlan({ title }) {
  const frequencies = [
    { id: 1, label: "Annually" },
    { id: 2, label: "Monthly" },
  ];

  const [frequency, setFrequency] = useState(frequencies[0]);
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedTab, setSelectedTab] = useState();

  function handleChange(e) {
    if (e.target.checked) {
      setFrequency(frequencies[1]);
    } else {
      setFrequency(frequencies[0]);
    }
  }

  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-pricing-title">
          <h2>
            Pick from one of our {title} packages
            <span className="aximo-title-animation"></span>
          </h2>
        </div>
        <div className="pricing-btn">
          <label>Billed monthly</label>
          <div className="toggle-btn">
            <input
              className="form-check-input btn-toggle price-deck-trigger"
              type="checkbox"
              onChange={handleChange}
            />
          </div>
          <label>Billed annually</label>
        </div>
        <div className="pricing-tabs">
          <div className="pricing-tab">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`pricing-tab-btn ${
                  activeTab === tab.id ? "pricing-tab-btn-active" : ""
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="row" id="table-price-value">
          { activeTab === "tab1" ? ( pricingPlanDataMPB.map((plan, index) => (
            <FadeInStagger
              className="col-xl-4 col-md-6"
              key={plan.id}
              index={index}
            >      
              <PricingCardSEOMPB plan={plan} frequency={frequency} />
        
            </FadeInStagger>
          ))) : activeTab === "tab2" ? ( pricingPlanDataMLB.map((plan, index) => (
            <FadeInStagger
              className="col-xl-4 col-md-6"
              key={plan.id}
              index={index}
            >      
              <PricingCardSEOMLB plan={plan} frequency={frequency} />
        
            </FadeInStagger>
          ))) : activeTab === "tab3" ? ( pricingPlanDataMRB.map((plan, index) => (
            <FadeInStagger
              className="col-xl-4 col-md-6"
              key={plan.id}
              index={index}
            >      
              <PricingCardSEOMRB plan={plan} frequency={frequency} />
        
            </FadeInStagger>
          ))) : ""}
        </div>
      </div>
    </div>
  );
}
export default PricingPlan;
