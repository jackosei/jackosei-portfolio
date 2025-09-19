"use client"

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  link: string;
  github: string;
  inProgress?: boolean;
}

interface SimpleWorkSliderProps {
  projects: Project[];
}

export default function SimpleWorkSlider({ projects }: SimpleWorkSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    setIsClient(true);
    
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsToShow);

  const nextSlide = () => {
    if (!isClient) return;
    setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };

  const prevSlide = () => {
    if (!isClient) return;
    setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };

  const goToSlide = (index: number) => {
    if (!isClient) return;
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className="card-hover group overflow-hidden flex flex-col p-0 h-full">
            <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg rounded-b-none">
              <div className="w-full h-full bg-muted animate-pulse" />
            </div>
            <div className="flex flex-col flex-1 p-6 sm:p-8">
              <div className="h-6 bg-muted rounded animate-pulse mb-4" />
              <div className="h-4 bg-muted rounded animate-pulse mb-2" />
              <div className="h-4 bg-muted rounded animate-pulse mb-4" />
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-muted rounded animate-pulse" />
                <div className="h-6 w-20 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <AnimateIn
                delay={index * 0.1}
                className="card-hover group overflow-hidden flex flex-col p-0 h-full"
              >
                {/* Media section */}
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg rounded-b-none">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
                    {project.inProgress && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-[10px] sm:text-xs font-semibold rounded-full shadow">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        In Progress
                      </span>
                    )}
                    {project.categories?.length > 0 && (
                      <span className="inline-block px-2 py-1 bg-accent-highlight text-accent-highlight-foreground text-xs rounded-full">
                        {project.categories[0]}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Content section */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-accent-highlight transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent-highlight hover:text-accent-highlight/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8 sm:mt-12">
        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent-highlight w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={prevSlide}
            className="p-2"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="secondary"
            size="sm"
            onClick={nextSlide}
            className="p-2"
            aria-label="Next projects"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Screen Reader Only - All Projects List for SEO */}
      <div className="sr-only">
        <h3>All Selected Work Projects</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p>Categories: {project.categories.join(', ')}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
              <a href={project.link}>View Project</a>
              {project.github !== "#" && <a href={project.github}>View Code</a>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
