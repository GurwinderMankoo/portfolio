import React from 'react'
import Section from '../common/Section'
import DownloadIcon from '../common/DownloadIcon'
import RevealSection from '../common/RevealSection'

type Props = {}


const techTags = [
    "React", "Next.js", "TypeScript", "Redux",
    "Node.js", "Tailwind CSS", "Material UI", "Bootstrap"
]

export default function AboutMain({ }: Props) {
    return (
        <Section id="about" className="relative overflow-hidden">
            {/* -- Decorative background blobs -- */}
            {/* <div className="absolute pointer-events-none z-0 w-[400px] h-[400px] bg-[rgba(34,211,238,0.05)] dark:bg-[rgba(34,211,238,0.08)] top-[-80px] left-[-80px] rounded-full blur-[100px] animate-float [animation-delay:-2s]" />
            <div className="absolute pointer-events-none z-0 w-[350px] h-[350px] bg-[rgba(99,102,241,0.06)] dark:bg-[rgba(99,102,241,0.1)] bottom-[-60px] right-[-60px] rounded-full blur-[90px] animate-float [animation-delay:-5s]" /> */}

            <RevealSection variant="fade-up">
            {/* -- Section Header -- */}
            <div className="relative z-[1] mb-10 md:mb-14 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                        About
                    </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-primaryText">
                    About Me
                </h2>
            </div>

            <div className="relative z-[1] flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                {/* -- LEFT SIDE: Bio Content -- */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <div className="relative w-full max-w-[340px]">
                        {/* -- Glow behind card -- */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-cyan/20 rounded-2xl blur-2xl opacity-60" />

                        {/* -- Card -- */}
                        <div className="relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
                            {/* -- Monogram -- */}
                            <div className="mb-5 flex items-center justify-center">
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan shadow-lg">
                                    <span className="font-serif text-4xl font-bold text-white">GS</span>
                                    <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-400 border-2 border-card" />
                                </div>
                            </div>

                            {/* -- Focus Areas -- */}
                            <div className="mb-5 grid grid-cols-2 gap-2">
                                <div className="rounded-xl border border-border bg-surface/40 p-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5">
                                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                                        <svg className="h-3.5 w-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-semibold text-primaryText">Frontend Dev</div>
                                    <div className="text-[10px] leading-[1.4] text-mutedText">React, Next.js, TS</div>
                                </div>
                                <div className="rounded-xl border border-border bg-surface/40 p-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5">
                                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/10">
                                        <svg className="h-3.5 w-3.5 text-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21,15 16,10 5,21" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-semibold text-primaryText">UI/UX Design</div>
                                    <div className="text-[10px] leading-[1.4] text-mutedText">Clean, accessible interfaces</div>
                                </div>
                                <div className="rounded-xl border border-border bg-surface/40 p-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5">
                                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                                        <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-semibold text-primaryText">Performance</div>
                                    <div className="text-[10px] leading-[1.4] text-mutedText">Speed &amp; optimization</div>
                                </div>
                                <div className="rounded-xl border border-border bg-surface/40 p-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5">
                                    <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400/10">
                                        <svg className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                                        </svg>
                                    </div>
                                    <div className="text-[11px] font-semibold text-primaryText">API Integration</div>
                                    <div className="text-[10px] leading-[1.4] text-mutedText">REST, GraphQL</div>
                                </div>
                            </div>

                            {/* -- Divider -- */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px flex-1 bg-border" />
                                <span className="text-[10px] font-medium uppercase tracking-[2px] text-mutedText">Tech Stack</span>
                                <span className="h-px flex-1 bg-border" />
                            </div>

                            {/* -- Tech Badges -- */}
                            <div className="mb-5 flex flex-wrap gap-2">
                                {techTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-lg border border-border bg-surface/40 px-2.5 py-1 text-[11px] font-medium text-secondaryText transition-all duration-200 hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* -- Decorative code line -- */}
                            <div className="rounded-xl border border-border bg-card2/60 px-4 py-3 font-mono text-[11.5px]">
                                <span className="text-mutedText italic">{"// "}Always building, always learning</span>
                                <br />
                                <span className="text-syntaxKeyword">const</span>{" "}
                                <span className="text-syntaxVariable">mission</span>
                                <span className="text-secondaryText">: </span>
                                <span className="text-syntaxString">{'"'}Great UX, one component at a time{'"'}</span>
                                <span className="text-secondaryText">;</span>
                                <span className="inline-block w-[2px] h-[13px] bg-accent ml-[2px] align-middle animate-blink" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- RIGHT SIDE: Creative Profile Card -- */}
                <div className="w-full md:w-3/5">
                    <h3 className="mb-1 font-serif text-2xl md:text-3xl font-bold text-primaryText">
                        Gurwinder <span className="text-accent">Singh</span>
                    </h3>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-[12px] font-medium text-accent">Front-End Engineer</span>
                    </div>

                    <div className="space-y-4 text-[14.5px] leading-[1.8] text-secondaryText">
                        <p>
                            Greetings! I&apos;m a frontend developer with over two years of hands-on experience building modern web applications. My work is driven by a passion for crafting clean, performant interfaces that deliver exceptional user experiences.
                        </p>
                        <p>
                            Proficient in the React ecosystem — including Next.js, Redux, TypeScript, and an array of UI libraries — I bring both technical depth and a keen eye for design to every project. I thrive on turning complex requirements into polished, accessible, and responsive solutions.
                        </p>
                        <p>
                            Beyond code, I&apos;m committed to staying current with industry trends, constantly exploring new tools and patterns to sharpen my craft. Whether it&apos;s optimizing a build pipeline or refining a component library, I approach every challenge with curiosity and care.
                        </p>
                    </div>

                    <a
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[13.5px] font-medium text-white no-underline transition-all duration-200 hover:-translate-y-[1px] hover:bg-accentHover"
                        href="/resume.docx"
                        download
                    >
                        <span>Download Resume</span>
                        <DownloadIcon fill="#fff" width="14px" height="14px" />
                    </a>
                </div>
            </div>
            </RevealSection>
        </Section>
    )
}
