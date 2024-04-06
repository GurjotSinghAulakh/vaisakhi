"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "Web app",
    name: "Website maintenance for Secundo.no",
    description:
      "Aimed at regular website maintenance, enhancing functionality, user experience, and reliability through expert error fixes.",
    link: "https://secundo.no/",
    stack: [
      "PHPUnit",
      "Laravel9",
      "MySQL", 
      "PHP",
      "CSS3", 
      "Bootstrap",
    ],
    github: "#",
  },
  {
    image: "/work/2.png",
    category: "Web app",
    name: "Project Matchmaking Platform",
    description:
      "A platform linking students, professors, and companies for project collaboration with accounts, company project listings, and professor oversight.",
    link: "https://gurjotsinghaulakh.github.io/SIM-WebApp/",
    stack: [
      "Docker",
      "Laravel9",
      "MySQL", 
      "GitHub",
      "PHP", 
      "Bootstrap",
    ],
    github: "https://github.com/GurjotSinghAulakh/SIM-WebApp",
  },
  {
    image: "/work/3.png",
    category: "AI",
    name: "MVP: Image Recognition Software",
    description:
      "An MVP utilizes Google's teachable machine for training an image recognition model to identify furniture and appliances, with a website for user feedback.",
    link: "https://gurjotsinghaulakh.github.io/Image-recognition-using-tensorflow/gate1.html",
    stack: [
      "Tensorflow",
      "Python",
      "JavaScript", 
      "HTML5",
      "API",
    ],
    github: "https://github.com/GurjotSinghAulakh/Image-recognition-using-tensorflow",
  },
  {
    image: "/work/4.png",
    category: "Web app",
    name: "MVP: Stock Trading Web Application",
    description:
      "A secure, intuitive web app for real-time stock trading and portfolio management.",
    link: "#",
    stack: [
      "HTML5",
      "JavaScript",
      "API", 
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/GurjotSinghAulakh/TradingWebApplication",
  },
  {
    image: "/work/5.png",
    category: "Automation",
    name: "Data processing using Zapier",
    description:
      "The project streamlined data management and email marketing through automation with Zapier, Gmail, Google Sheets, and Mailchimp.",
    link: "#",
    stack: [
      "Zapier",
      "GoogleSheets",
      "Mailchimp", 
      "Gmail",
    ],
    github: "#",
  },
  {
    image: "/work/6.png",
    category: "Automation",
    name: "Web Scraper for finn.no",
    description:
      "The project created a scraper for finn.no to collect appliance and furniture data, aiding company decisions with detailed analysis.",
    link: "#",
    stack: [
      "Python",
      "API",
      "openpyxl", 
    ],
    github: "https://github.com/GurjotSinghAulakh/Web-Scraper-API",
  },
  {
    image: "/work/7.webp",
    category: "Automation",
    name: "Analyzing Data with Google Analytics",
    description:
      "The project utilized Google Analytics for in-depth data analysis, aiming to boost website performance and user engagement through data-driven insights.",
    link: "#",
    stack: [
      "Google Analytics",
      "API",
    ],
    github: "#",
  },
  {
    image: "/work/8.webp",
    category: "Testing",
    name: "Quality assurance for the online banking app",
    description:
      "The project tested a streamlined online banking app with Spring Boot, utilizing IntelliJ, SoapUI, Selenium, Excel, and MTM on Azure for thorough testing at all levels.",
    link: "#",
    stack: [
      "Java",
      "JUnit",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    github: "https://github.com/GurjotSinghAulakh/TestingAvProgramvare",
  },
];

//  remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is all projects then return all projects , else filter by category.
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[800px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
