import Image from 'next/image'
import React from 'react'

type Props = {}

type WorkEntry = {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
    logo: string;
    logoAlt: string;
}

const workExperience: WorkEntry[] = [
        {
        company: "Reelup Pvt. Ltd",
        role: "Senior Front End Engineer",
        period: "February, 2024 - November, 2024",
        description:
            "Led the design and development of scalable, high-performance web applications using React and Next.js. Drove frontend architecture, improved application performance, mentored engineers, and collaborated with cross-functional teams to deliver reliable, user-centric solutions.",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Redux",
            "Frontend Architecture",
            "System Design",
            "Performance Optimization",
            "Design Systems",
            "REST APIs",
            "GraphQL",
            "Testing",
            "CI/CD",
            "Shopify",
            "GitHub",
            "Agile"
        ],
        logo: "/icons/reel-up-logo.svg",
        logoAlt: "ReelUp Pvt. Ltd.",
    },
    {
        company: "Plusbooster Pvt. Ltd",
        role: "Front End Engineer",
        period: "March, 2021 - June, 2023",
        description:
            "Developed and maintained scalable front-end applications using React, Redux, and Next.js. Collaborated with cross-functional teams to deliver high-quality features and improve performance.",
        skills: [
            "React", "Redux", "Next.js", "TypeScript", "REST APIs",
            "JavaScript", "Shopify", "Polaris", "API Integration",
            "Unit Testing", "GitHub", "Jira", "SCSS"
        ],
        logo: "/icons/plusbooster.jpg",
        logoAlt: "Plusbooster Pvt. Ltd.",
    },
    {
        company: "Leap of Faith",
        role: "React Developer | Intern",
        period: "November, 2019 - May, 2020",
        description:
            "Built interactive UIs and integrated third-party APIs using React and Next.js. Gained hands-on experience with modern front-end tooling and best practices in a fast-paced startup environment.",
        skills: [
            "React", "React-Router-Dom", "JavaScript", "Next.js",
            "Bootstrap", "Material-UI", "E-Commerce", "API Integration",
            "HTML5", "CSS"
        ],
        logo: "/icons/leap_logo.jpg",
        logoAlt: "Leap of Faith",
    },
]

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
    )
}

export default function Timeline({ }: Props) {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-6">
                {workExperience.map((entry, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div
                            key={entry.company}
                            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
                        >
                            {/* Timeline dot - always visible */}
                            <div className="absolute left-[11px] top-1 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-accent bg-card md:left-1/2 md:-translate-x-1/2">
                                <div className="h-[7px] w-[7px] rounded-full bg-accent" />
                            </div>

                            {/* Spacer for mobile to push content right */}
                            <div className="block md:hidden w-10 flex-shrink-0" />

                            {/* Card */}
                            <div
                                className={`relative w-full md:w-[calc(50%_-_40px)] group rounded-xl border border-border bg-surface/40 p-3.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)] ${
                                    isLeft
                                        ? 'md:mr-auto'
                                        : 'md:ml-auto'
                                }`}
                            >
                                {/* Top accent line */}
                                <div className="absolute top-0 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="flex gap-3">
                                    {/* Logo */}
                                    <div className="hidden xs:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/40 overflow-hidden">
                                        <Image
                                            src={entry.logo}
                                            alt={entry.logoAlt}
                                            width={32}
                                            height={32}
                                            className="h-5 w-5 object-contain"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {/* Period badge */}
                                        <div className="mb-1.5 inline-flex items-center gap-1 rounded-full border border-border bg-surface/50 px-2 py-0.5">
                                            <BriefcaseIcon className="h-2.5 w-2.5 text-accent" />
                                            <span className="text-[10px] font-medium text-secondaryText">
                                                {entry.period}
                                            </span>
                                        </div>

                                        <h3 className="text-[14px] font-semibold text-primaryText leading-snug">
                                            {entry.role}
                                        </h3>
                                        <h4 className="mb-1 text-[12px] font-medium text-accent">
                                            {entry.company}
                                        </h4>

                                        <p className="mb-2 text-[12.5px] leading-[1.5] text-secondaryText">
                                            {entry.description}
                                        </p>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-1">
                                            {entry.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-md border border-border bg-surface/40 px-2 py-0.5 text-[10px] font-medium text-mutedText transition-all duration-200 hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
