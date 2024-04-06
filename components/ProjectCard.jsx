import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { useRouter } from 'next/navigation';
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  // Create onClick handler for whole card
  // const handleCardClick = () => {
  //   router.push(`/projectdetails/${project.id}`); // Use ID for unique routing
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const tagsPerPage = 3;
  const maxTags = 10; // Max tags to display
  
  // Calculate the slice of tags to display
  const indexOfLastTag = currentPage * tagsPerPage;
  const indexOfFirstTag = indexOfLastTag - tagsPerPage;
  const currentTags = project.stack && Array.isArray(project.stack) ? project.stack.slice(indexOfFirstTag, indexOfLastTag) : [];
  
  // Change page function (only two pages supported with max 10 tags)
  const paginate = () => {
    setCurrentPage(prevPage => prevPage === 1 ? 2 : 1);
  };


  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image  */}
        <div className="relative w-full h-[300px] flex  items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            {project.link !== "#" && (
              <Link
                target="_blank"
                href={project.link}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon className="text-white" />
              </Link>
            )}
            {project.github !== "#" && (
              <Link
                target="_blank"
                href={project.github}
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
              >
                <Github className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="mb-2 line-clamp-2 text-lg lg:text-xl">{project.name}</h4>        
        <p className="text-muted-foreground text-lg line-clamp-5 mb-2">{project.description}</p>
        <div>
          {currentTags.map((item, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {item}
            </span>
          ))}
          {project.stack && project.stack.length > maxTags && (
            <button onClick={paginate}>Toggle Tags</button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
