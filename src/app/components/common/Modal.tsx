"use client"
import { useModal } from '@/app/store/ModalProvider'
import React from 'react'

type Props = {
    title: string,
    description: string,
    technologies: string[],
    url: string
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

function CloseIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    )
}

export default function Modal({ title = "Title", description, technologies, url }: Props) {

    const { closeModal } = useModal();

    return (
        <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-card shadow-[0_8px_32px_-4px_rgba(99,102,241,0.12),0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                        <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21,15 16,10 5,21" />
                        </svg>
                    </div>
                    <h3 className="text-[17px] font-semibold text-primaryText">
                        {title}
                    </h3>
                </div>
                <button
                    onClick={closeModal}
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-mutedText transition-all duration-200 hover:bg-surface hover:text-primaryText"
                >
                    <CloseIcon className="h-4 w-4" />
                </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-5">
                <p className="mb-5 text-[14px] leading-[1.7] text-secondaryText">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mb-5">
                    <h4 className="mb-2.5 text-[12px] font-medium uppercase tracking-[1px] text-mutedText">
                        Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="rounded-md border border-border bg-surface/40 px-2.5 py-1 text-[11px] font-medium text-secondaryText"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Project link */}
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-accentHover"
                    >
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                        View Project
                    </a>
                )}
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end border-t border-border px-6 py-3">
                <button
                    onClick={closeModal}
                    type="button"
                    className="rounded-lg border border-border px-4 py-2 text-[12.5px] font-medium text-secondaryText transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                    Close
                </button>
            </div>
        </div>
    )
}
