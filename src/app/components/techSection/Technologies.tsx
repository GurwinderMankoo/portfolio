import React from 'react'
import Section from '../common/Section'
import Image from 'next/image'
import RevealSection from '../common/RevealSection'

type Props = {}

type TechItem = {
    name: string;
    icon: string;
    category: string;
    proficiency: number; // 1-5
    color: string; // accent color for the card
}

const technologies: TechItem[] = [
    // Frontend Core
    { name: "HTML5", icon: "/icons/html5.svg", category: "Frontend Core", proficiency: 5, color: "#f97316" },
    { name: "CSS", icon: "/icons/css.svg", category: "Frontend Core", proficiency: 5, color: "#3b82f6" },
    { name: "JavaScript", icon: "/icons/javascript.svg", category: "Frontend Core", proficiency: 5, color: "#eab308" },
    { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend Core", proficiency: 4, color: "#22d3ee" },

    // Frameworks & Libraries
    { name: "React", icon: "/icons/react.svg", category: "Frameworks & Libraries", proficiency: 4, color: "#06b6d4" },
    { name: "Next.js", icon: "/icons/nextjs.svg", category: "Frameworks & Libraries", proficiency: 4, color: "#ffffff" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg", category: "Frameworks & Libraries", proficiency: 4, color: "#7c3aed" },
    { name: "Sass", icon: "/icons/sass.svg", category: "Frameworks & Libraries", proficiency: 3, color: "#ec4899" },

    // State & Tooling
    { name: "Redux", icon: "/icons/redux.svg", category: "State & Tooling", proficiency: 3, color: "#a855f7" },
]

const categories = ["Frontend Core", "Frameworks & Libraries", "State & Tooling"] as const;

export default function Technologies({ }: Props) {
    return (
        <Section id="technologies" className="relative overflow-hidden">
            {/* -- Decorative background blobs -- */}
            <div className="absolute pointer-events-none z-0 w-[500px] h-[500px] bg-[rgba(99,102,241,0.07)] dark:bg-[rgba(99,102,241,0.12)] top-[-120px] right-[-120px] rounded-full blur-[120px] animate-float [animation-delay:0s]" />
            <div className="absolute pointer-events-none z-0 w-[350px] h-[350px] bg-[rgba(34,211,238,0.05)] dark:bg-[rgba(34,211,238,0.08)] bottom-[-80px] left-[-80px] rounded-full blur-[100px] animate-float [animation-delay:-4s]" />

            <RevealSection variant="fade-right">
            {/* -- Section Header -- */}
            <div className="relative z-[1] mb-12 md:mb-16 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                        Technologies
                    </span>
                </div>
                <h2 className="mb-3 font-serif text-3xl md:text-4xl font-bold tracking-tight text-primaryText">
                    Tech Stack
                </h2>
                <p className="mx-auto max-w-[480px] text-[13.5px] font-light leading-[1.8] text-mutedText">
                    Core technologies and tools I work with daily to build modern, scalable web applications.
                </p>
            </div>

            {/* -- Technology Grid by Category -- */}
            <div className="relative z-[1] space-y-10 md:space-y-14">
                {categories.map((category) => {
                    const items = technologies.filter((t) => t.category === category);
                    return (
                        <div key={category}>
                            {/* Category Label */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px flex-1 bg-border" />
                                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[2px] text-secondaryText">
                                    {category}
                                </span>
                                <span className="h-px flex-1 bg-border" />
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                                {items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="group relative flex flex-col items-center rounded-xl border border-border bg-surface/40 p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[3px] hover:border-accent/30 hover:bg-accentGlow/20 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)]"
                                    >
                                        {/* Top accent line */}
                                        <div
                                            className="absolute top-0 left-4 right-4 h-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
                                        />

                                        {/* Icon container */}
                                        <div
                                            className="relative  mb-3 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl border border-border/60 bg-card/40 p-3 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                                        >
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={40}
                                                height={40}
                                                className="h-7 w-7 md:h-8 md:w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Name */}
                                        <span className="mb-2.5 text-[13px] font-medium text-primaryText transition-colors duration-300 group-hover:text-accent">
                                            {tech.name}
                                        </span>

                                        {/* Proficiency dots */}
                                        <div className="flex items-center gap-[3px]">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span
                                                    key={i}
                                                    className={`h-[3px] w-[14px] rounded-full transition-all duration-300 ${
                                                        i < tech.proficiency
                                                            ? "bg-accent/60 group-hover:bg-accent"
                                                            : "bg-border"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
            </RevealSection>
        </Section>
    )
}
