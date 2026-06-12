import React from 'react'
import Image, { StaticImageData } from 'next/image'

export type Project = {
    url: string,
    id: number,
    name: string,
    content: string,
    technologies: string[],
    img: StaticImageData
}

type Props = {
    project: Project,
    onClick: () => void,
}

function ExternalLinkIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    )
}

export default function ProjectCard({ project, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className="group relative flex flex-col rounded-xl border border-border bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] overflow-hidden cursor-pointer"
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />

            {/* Image container */}
            <div className="relative h-44 w-full overflow-hidden bg-card/60">
                <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
                <h3 className="mb-1 text-[15px] font-semibold text-primaryText transition-colors duration-200 group-hover:text-accent">
                    {project.name}
                </h3>
                <p className="mb-3 text-[12.5px] leading-[1.6] text-secondaryText line-clamp-2 flex-1">
                    {project.content}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-border bg-surface/40 px-2 py-0.5 text-[10px] font-medium text-mutedText transition-all duration-200 group-hover:border-accent/30 group-hover:text-accent"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="rounded-md border border-border bg-surface/40 px-2 py-0.5 text-[10px] font-medium text-mutedText">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* View project link */}
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                    <span>View Details</span>
                    <ExternalLinkIcon className="h-3 w-3" />
                </div>
            </div>
        </div>
    )
}
