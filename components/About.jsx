"use client"

import Image from "next/image";
import { skills } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {Button, Tooltip } from '@nextui-org/react';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Gurjot Singh Aulakh",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+47 973 87 540",
  },
  {
    icon: <MailIcon size={20} />,
    text: "gurjot.singh.aulakh28@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 11th Apr, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master's in Artificial Intelligence (AI)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Oslo, Norway, Europe",
  },
];

const certificationData = [
  {
    title: "certifications",
    data: [
      { 
        title: "edX Verified Certificate for Introduction to Prompt Engineering",
        company: "edX",
        date: "Jan 2024",
        credential_id: "6c4eac918f57470aa55db87d87fc5088",
        link: "https://courses.edx.org/certificates/6c4eac918f57470aa55db87d87fc5088",
      },
      { 
        title: "ISTQB Certified Tester Foundation Level",
        company: "ISTQB® - International Software Testing Qualifications Board",
        date: "Oct 2023",
        credential_id: "23-CTFL-234803-12",
        link: "https://zertdb.isqi.org/en/certification/verification/t/%21_ue_Ea_NMC2eHR5%21%24o%24",
      },
      { 
        title: "Introduction to Generative AI Learning Path",
        company: "Google Cloud Skills Boost",
        date: "Sep 2023",
        credential_id: "5070b35b-5c77-4f5b-8b98-447fc30edc81",
        link: "https://www.cloudskillsboost.google/public_profiles/5070b35b-5c77-4f5b-8b98-447fc30edc81",
      },
      { 
        title: "Laravel 9",
        company: "Udemy",
        date: "Des 2022",
        credential_id: "UC-2a7c7b0c-6d11-4bdb-84e8-409099e3dd16",
        link: "ude.my/UC-2a7c7b0c-6d11-4bdb-84e8-409099e3dd16",
      },
      { 
        title: "The DevOps Academy",
        company: "Eficode",
        date: "Aug 2022",
        credential_id: "1e1elQyzKf8GIeYli5CzBW272k0Wzz0jQ",
        link: "https://drive.google.com/file/d/1e1elQyzKf8GIeYli5CzBW272k0Wzz0jQ/view",
      },
      { 
        title: "AWS - Certificate Of Attendance",
        company: "Amazon Web Services (AWS)",
        date: "Jun 2022",
        credential_id: "a717b14265ee0192",
        link: "https://assets.awscloud.com/p/rp/a717b14265ee0192.png?mi-awsomeday-name=Gurjot%20Singh%20Aulakh",
      },
      { 
        title: "Deep Learning with PyTorch : Image Segmentation",
        company: "Coursera",
        date: "Jun 2022",
        credential_id: "J4ZSNGX38UVK",
        link: "https://www.coursera.org/account/accomplishments/certificate/J4ZSNGX38UVK",
      },
      { 
        title: "Programming Foundations: Fundamentals",
        company: "LinkedIn",
        date: "Jun 2022",
        credential_id: "a717b14265ee0192",
        link: "https://assets.awscloud.com/p/rp/a717b14265ee0192.png?mi-awsomeday-name=Gurjot%20Singh%20Aulakh",
      },
      { 
        title: "MATLAB Onramp",
        company: "MATLAB Coding",
        date: "Mar 2021",
        credential_id: "d6292085-2b9f-491f-97cd-144daff551d7",
        link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=d6292085-2b9f-491f-97cd-144daff551d7",
      },
      { 
        title: "SQL for Data Science",
        company: "Coursera",
        date: "Feb 2021",
        credential_id: "UNMFD3RKASW2",
        link: "https://www.coursera.org/account/accomplishments/certificate/UNMFD3RKASW2",
      },
    ],
  },
]

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Oslo Metropolitan University (Oslo)",
        qualification: "Bachelors in Computer Science", 
        years: "2020 - 2023",
      },
      {
        university: "Norwegian University of Science and Technology (NTNU)",
        qualification: "Masters in Artificial Intelligence (AI)",
        years: "2023 - Present",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Technical Tester",
        role: "SpareBank 1 Forsikring (Contract)",
        years: "Sep 2023 - Present",
      },
      {
        company: "QA Test Engineer",
        role: "SOCO Norge AS",
        years: "Aug 2023 - Present",
      },
      {
        company: "MentorNorge AS",
        role: "Tutor",
        years: "Aug 2021 - Jun 2023",
      },
      {
        company: "Secundo.no",
        role: "Backend Developer",
        years: "Jan 2023 - Apr 2023",
      },
      {
        company: "Secundo.no",
        role: "Junior AI Developer",
        years: "Aug 2022 - Des 2022",
      },
      {
        company: "Secundo.no",
        role: "Fullstack Developer",
        years: "Mar 2022 - Aug 2022",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Orakel",
        years: "Jan 2022 - Jan 2023",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Teacher Assistent in Algorithms and Data Structures",
        years: "Aug 2022 - Des 2022",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Teacher Assistent in Discrete Mathematics",
        years: "Aug 2022 - Des 2022 & Aug 2021 - Des 2021",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Innovation Camp - Mentor",
        years: "Aug 2022 - Aug 2022",
      },
      {
        company: "KIWI Minipris Drammen",
        role: "Lock Manager",
        years: "Mar 2019 - Aug 2022",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Student Ambassador - Dept. of TKD",
        years: "Feb 2022 - May 2022",
      },
      {
        company: "Oslo Metropolitan University (Oslo)",
        role: "Teacher Assistent in Programming (JAVA)",
        years: "Aug 2021 - Des 2021",
      },
      {
        company: "Privatundervisning AS",
        role: "Tutor",
        years: "Feb 2021 - Aug 2021",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML , CSS, JavaScript ",
      },
      {
        name: "React , Next , Bootstrap",
      },
      {
        name: "Typescript ,Tailwind , Sass CSS ",
      },
      {
        name: "Redux, MUI , shadcn-UI, Prisma ",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/docker.svg",
      },
      {
        imgPath: "/about/firebase.svg",
      },
    ],
  },
];


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //  console.log(getData(qualificationData , 'experience'))
  return (
    <section className="xl:h-[auto] pb-12 sm:pt-1 xl:py-24 pt-10">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto pt-2">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* tabs  */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[720px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="certifications">
                Certifications
                </TabsTrigger>
              </TabsList>
              {/* tabs content  */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                    Superior Service Quality Maintained for More Than 3 Years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary ">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages  */}
                    <div className="flex  flex-col gap-y-2">
                      <div className="text-primary">Languages Skill</div>
                      <div className="border-b border-border">
                        Norwegian, English , Punjabi, Hindi , Urdu
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper  */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education  */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-7">What I Use Everyday</h3>
                    {/* skills  */}
                    <div className="mb-16">
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List  */}
                      <div className="mt-10 flex flex-wrap sm:gap-12 gap-4 justify-center items-center">

                      {skills.map((skills) => (
                        <div className="block-container w-20 h-20" key={skills.name}>
                            <div className="rounded-xl "/>
                            <Tooltip content={skills.name}  className='border border-primary bg-transparent text-primary rounded-md'>
                                <Button className="border backdrop-blur-2xl dark:bg-zinc-800/10 dark:border-neutral-800/60 rounded-xl flex justify-center items-center h-20 w-20" >
                                    <Image 
                                        src={skills.imageUrl}
                                        alt={skills.name} 
                                        // className="w-1/2 h-1/2 object-contain"
                                        className="w-16 h-16 object-contain"
                                        />
                                </Button>
                            </Tooltip>
                           
                        </div>
                       
                    ))}
                    </div>
                    </div>
                    
                  </div>
                </TabsContent>
                <TabsContent value="certifications">
                  {/* certifications  */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <ShieldCheck size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(certificationData, "certifications").title}
                        </h4>
                      </div>
                      {/* list  */}
                      <div className="flex flex-col gap-y-8">
                        {getData(certificationData, "certifications").data.map(
                          (item, index) => {
                            const { title, company, date, credential_id, link } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className=" font-semibold text-xl leading-none mb-2">
                                    {title}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    Credential ID: <a target="_blank" href={link}>{credential_id}</a>
                                    
                                  </div>
                                  <div className="text-base font-medium">
                                  Issued {date}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
