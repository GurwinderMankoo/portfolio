import Section from "../common/Section";
import Editor from "../common/Editor";
import RevealSection from "../common/RevealSection";

export default function HomeMain1() {
    return (
        <Section id="home" className="pt-[100px]">
            <div className="absolute rounded-full 
                pointer-events-none z-0 w-[400px] 
                h-[400px] dark:bg-[rgba(99,102,241,0.18)]
                top-[-100px] right-[0px] blur-[110px] dark:blur-[90px] animate-float
                [animation-delay:0s]"></div>
            <div className="absolute rounded-full pointer-events-none animate-[float_8s_ease-in-out_infinite] 
                    z-0 w-[280px] h-[280px] dark:bg-[rgba(34,211,238,0.1)] bottom-[-60px] left-[8%]
                    dark:blur-[70px] blur-[90px] [animation-delay:-3s]"
                    style={{ background: 'rgba(99,102,241,0.13)' }}></div>

            <RevealSection variant="fade-scale">
            <div className="grid grid-cols-1 md:gap-14 md:grid-cols-2 items-center w-full">
                {/* -- LEFT SIDE */}
                <div className="md:block flex items-center flex-col justify-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-4 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-indigo-400">
                            Available for new opportunities
                        </span>
                    </div>
                    <p className="mb-2.5 text-xs font-normal uppercase tracking-[2px] text-secondaryText">Hello, I&apos;m</p>
                    <h1 className="flex md:block mb-4 font-serif md:text-5xl text-3xl font-bold leading-tight tracking-tight text-primaryText">
                        <span className="mb-0 md:mb-2 md:inline-block">Gurwinder</span>
                        <span className="block ml-2 md:ml-0 text-transparent [-webkit-text-stroke:1.5px_#818cf8]">
                            <span className="relative inline-block">
                                <svg className="absolute md:left-[-12px] md:top-[-7px] left-[-10px] top-[-3px] rotate-[-45deg] w-[14px] h-[14px] md:w-[20px] md:h-[20px] text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M2 19h20v3H2v-3zM12 2l3.5 8h6l-4 5 2 8-7.5-4-7.5 4 2-8-4-5h6z"/>
                                </svg>
                                <span>S</span>
                            </span>
                            ingh
                        </span>
                    </h1>
                    <p className="mb-5 text-[15px] leading-[1.6] text-secondaryText">
                        <strong className="font-medium text-accent">Front-End Engineer</strong> · Crafting seamless web experiences
                    </p>

                    <p className="mb-9 md:max-w-[390px] max-w-[500px] text-[13.5px] font-light leading-[1.8] text-mutedText">
                        2+ years building scalable web apps with React, Next.js &amp; Redux.
                        Passionate about clean UI, performance, and developer experience.
                    </p>

                    <div className="mb-10 flex items-center gap-3">
                        <a className="inline-flex items-center gap-2 rounded-lg bg-accent px-[22px] py-[11px] text-[13.5px] font-medium text-white no-underline transition-all duration-200 hover:-translate-y-[1px] hover:bg-accentHover" href="/#projects">
                            View Projects
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                        <a className="inline-flex items-center gap-2 rounded-lg border border-borderStrong bg-transparent px-5 py-[11px] text-[13.5px] text-secondaryText no-underline transition-all duration-200 hover:-translate-y-[1px] hover:border-accent hover:text-accent" href="/resume.docx">
                            Download CV
                        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v7M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </a>
                    </div>

                    <div className="flex gap-7 border-t border-border pt-7">
                        <div className="stat-item">
                            <div className="mb-1 font-serif text-[26px] font-bold leading-none text-primaryText">2+</div>
                            <div className="text-[11px] tracking-[0.3px] text-mutedText">Years experience</div>
                        </div>
                        <div className="mt-1 h-8 w-[0.5px] self-start bg-border"></div>
                        <div className="stat-item">
                            <div className="mb-1 font-serif text-[26px] font-bold leading-none text-primaryText">10+</div>
                            <div className="text-[11px] tracking-[0.3px] text-mutedText">Projects built</div>
                        </div>
                        <div className="mt-1 h-8 w-[0.5px] self-start bg-border"></div>
                        <div className="stat-item">
                            <div className="mb-1 font-serif text-[26px] font-bold leading-none text-primaryText">7+</div>
                            <div className="text-[11px] tracking-[0.3px] text-mutedText">Tech skills</div>
                        </div>
                    </div>

                </div>

                {/* -- RIGHT SIDE */}
                <div className="relative hidden md:block">

                    {/* -- Floating chips -- */}
                    <div className="absolute z-[5] flex items-center gap-1.5 whitespace-nowrap rounded-lg border-[0.5px] border-borderStrong bg-card px-3 py-[7px] text-[11.5px] text-secondaryText shadow-[0_4px_20px_rgba(0,0,0,0.25)] light:shadow-[0_4px_20px_rgba(99,102,241,0.1)] animate-chip-float top-[-18px] right-6">
                        <span className="h-1.5 w-1.5 rounded-full" style={{background: "#34d399"}}></span>
                        Build successful
                    </div>
                    <div className="absolute z-[5] flex items-center gap-1.5 whitespace-nowrap rounded-lg border-[0.5px] border-borderStrong bg-card px-3 py-[7px] text-[11.5px] text-secondaryText shadow-[0_4px_20px_rgba(0,0,0,0.25)] light:shadow-[0_4px_20px_rgba(99,102,241,0.1)] animate-chip-float bottom-6 left-[-24px] [animation-delay:-2.5s]">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#22d3ee" }}></span>
                        TypeScript · strict mode
                    </div>

                    <Editor />

                </div>
            </div>
            </RevealSection>
            <RevealSection variant="fade-scale">
            <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 opacity-30">
                <div className="h-7 w-px animate-scroll-drop bg-gradient-to-b from-transparent to-secondaryText"></div>
                <span className="text-[10px] uppercase tracking-[2px] text-mutedText">Scroll</span>
            </div>
            </RevealSection>

            {/* <DownArrow /> */}
        </Section>
    )
}

