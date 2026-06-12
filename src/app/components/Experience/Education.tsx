import Image from 'next/image'
import React from 'react'

type Props = {}

type EducationEntry = {
    institution: string;
    degree: string;
    period: string;
    description: string;
    logo: string;
    logoAlt: string;
}

const educationData: EducationEntry[] = [
    {
        institution: "Maharaja Ranjit Singh Punjab Technical University",
        degree: "Msc. Information Technology",
        period: "May, 2017 - June, 2019",
        description:
            "Advanced studies in information technology with a focus on software development, database management, and modern computing practices.",
        logo: "/icons/mrsptu.jpg",
        logoAlt: "Maharaja Ranjit Singh Punjab Technical University",
    },
    {
        institution: "Mata Gujri College, Fatehgarh Sahib",
        degree: "B.sc Computer Science",
        period: "May, 2009 - June, 2014",
        description:
            "Foundational education in computer science covering programming fundamentals, data structures, algorithms, and computer systems.",
        logo: "/icons/mata_gujri_college_fatehgarh_sahib_logo.jpg",
        logoAlt: "Mata Gujri College, Fatehgarh Sahib",
    },
]

function GraduationIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    )
}

export default function Education({ }: Props) {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-6">
                {educationData.map((entry, index) => {
                    const isLeft = index % 2 === 0

                    return (
                        <div
                            key={entry.institution}
                            className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[11px] top-1 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-cyan bg-card md:left-1/2 md:-translate-x-1/2">
                                <div className="h-[7px] w-[7px] rounded-full bg-cyan" />
                            </div>

                            {/* Mobile spacer */}
                            <div className="block md:hidden w-10 flex-shrink-0" />

                            {/* Card */}
                            <div
                                className={`relative w-full md:w-[calc(50%_-_40px)] group rounded-xl border border-border bg-surface/40 p-3.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-[1px] hover:border-cyan/30 hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)] ${
                                    isLeft
                                        ? 'md:mr-auto'
                                        : 'md:ml-auto'
                                }`}
                            >
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
                                            <GraduationIcon className="h-2.5 w-2.5 text-cyan" />
                                            <span className="text-[10px] font-medium text-secondaryText">
                                                {entry.period}
                                            </span>
                                        </div>

                                        <h3 className="text-[14px] font-semibold text-primaryText leading-snug">
                                            {entry.institution}
                                        </h3>
                                        <h4 className="mb-1 text-[12px] font-medium text-cyan">
                                            {entry.degree}
                                        </h4>

                                        <p className="text-[12.5px] leading-[1.5] text-secondaryText">
                                            {entry.description}
                                        </p>
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
