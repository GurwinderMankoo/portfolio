import React from "react";
import Section from "../common/Section";
import Tabs from "../common/Tabs";
import Education from "./Education";
import Work from "./Work";
import RevealSection from "../common/RevealSection";

const tabs = [
    {
        name: 'Work',
        content: <Work />,
        id: 'work'
    },
    {
        name: 'Education',
        content: <Education />,
        id: 'education'
    }
]

export default function Experience() {
    return (
        <Section id="experience" className="relative overflow-hidden">
            {/* -- Decorative background blobs -- */}
            <div className="absolute pointer-events-none z-0 w-[450px] h-[450px] bg-[rgba(99,102,241,0.06)] dark:bg-[rgba(99,102,241,0.1)] top-[-80px] right-[-80px] rounded-full blur-[110px] animate-float [animation-delay:0s]" />
            <div className="absolute pointer-events-none z-0 w-[350px] h-[350px] bg-[rgba(34,211,238,0.04)] dark:bg-[rgba(34,211,238,0.07)] bottom-[-60px] left-[-60px] rounded-full blur-[90px] animate-float [animation-delay:-3s]" />

            <RevealSection variant="fade-left">
            {/* -- Section Header -- */}
            <div className="relative z-[1] mb-12 md:mb-14 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                        Experience
                    </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-primaryText">
                    My Journey
                </h2>
                <p className="mx-auto mt-3 max-w-[480px] text-[13.5px] font-light leading-[1.8] text-mutedText">
                    My professional experience and educational background in software engineering and web development.
                </p>
            </div>

            <div className="relative z-[1]">
                <Tabs tabs={tabs} preActive="work" />
            </div>
            </RevealSection>
        </Section>
    )
}
