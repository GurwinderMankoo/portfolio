import React from 'react'
import Image from 'next/image'
import Mobile from './Mobile'
import RevealSection from '../common/RevealSection'

type Props = {}

const quickLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
]

function HeartIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
    )
}

export default function FooterMain({ }: Props) {
    return (
        <footer className="max-w-screen-lg+ mx-auto px-4 pt-10 pb-6">
            <RevealSection variant="fade-in">
            {/* Divider with gradient */}
            <div className="mb-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
                {/* Brand */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-cyan">
                            <span className="font-serif text-sm font-bold text-white">GS</span>
                        </div>
                        <span className="font-serif text-lg font-bold text-primaryText">Gurwinder</span>
                    </div>
                    <p className="max-w-[240px] text-[12.5px] leading-[1.7] text-secondaryText">
                        Front-End Engineer crafting modern web experiences with React, Next.js, and TypeScript.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-mutedText">Links</h4>
                    <ul className="flex flex-col items-center md:items-start gap-1.5">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-[13px] text-secondaryText transition-colors duration-200 hover:text-accent"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="mb-3 text-[11px] font-medium uppercase tracking-[2px] text-mutedText">Connect</h4>
                    <div className="flex items-center gap-2">
                        <a
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/40 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-[1px]"
                            href="mailto:gurwinderinuk@gmail.com"
                            title="gurwinderinuk@gmail.com"
                        >
                            <Image
                                src='/icons/gmail-new.svg'
                                alt="Gmail"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/40 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-[1px]"
                            href="http://linkedin.com/in/gurwinder-singh-883956182"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <Image
                                src='/icons/linked-in.svg'
                                alt="LinkedIn"
                                width={18}
                                height={18}
                            />
                        </a>
                        <Mobile />
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 sm:flex-row sm:justify-between">
                <p className="text-[12px] text-mutedText">
                    © {new Date().getFullYear()} Gurwinder Singh. All rights reserved.
                </p>
                <p className="inline-flex items-center gap-1 text-[12px] text-mutedText">
                    Built with
                    <HeartIcon className="h-3 w-3 text-red-400" />
                    using Next.js & Tailwind
                </p>
            </div>
            </RevealSection>
        </footer>
    )
}
