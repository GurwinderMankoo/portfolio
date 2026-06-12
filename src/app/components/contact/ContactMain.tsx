import React from 'react'
import Section from '../common/Section'
import CustomForm from './CustomForm'
import RevealSection from '../common/RevealSection'

type Props = {}

const contactInfo = [
    {
        label: "Email",
        value: "gurwinderinuk@gmail.com",
        href: "mailto:gurwinderinuk@gmail.com",
        color: "from-accent/20 to-accent/5",
        iconColor: "text-accent",
        bgIcon: "bg-accent/10",
    },
    {
        label: "Phone",
        value: "+44 7435 160562",
        href: "tel:+447435160562",
        color: "from-emerald-400/20 to-emerald-400/5",
        iconColor: "text-emerald-400",
        bgIcon: "bg-emerald-400/10",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/gurwinder-singh-883956182",
        href: "http://linkedin.com/in/gurwinder-singh-883956182",
        color: "from-cyan/20 to-cyan/5",
        iconColor: "text-cyan",
        bgIcon: "bg-cyan/10",
    },
] as const

function MailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
        </svg>
    )
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
    )
}

function LinkedInIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

function LocationIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
    "Email": MailIcon,
    "Phone": PhoneIcon,
    "LinkedIn": LinkedInIcon,
}

export default function ContactMain({ }: Props) {
    return (
        <Section id="contact" className="relative overflow-hidden">
            {/* -- Decorative background blobs -- */}
            {/* <div className="absolute pointer-events-none z-0 w-[500px] h-[500px] bg-[rgba(99,102,241,0.06)] dark:bg-[rgba(99,102,241,0.1)] top-[-100px] left-[-100px] rounded-full blur-[120px] animate-float [animation-delay:0s]" />
            <div className="absolute pointer-events-none z-0 w-[400px] h-[400px] bg-[rgba(34,211,238,0.04)] dark:bg-[rgba(34,211,238,0.07)] bottom-[-80px] right-[-80px] rounded-full blur-[100px] animate-float [animation-delay:-3s]" /> */}

            <RevealSection variant="fade-up">
            {/* -- Section Header -- */}
            <div className="relative z-[1] mb-12 md:mb-16 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                        Contact
                    </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-primaryText">
                    Get In Touch
                </h2>
                <p className="mx-auto mt-3 max-w-[480px] text-[13.5px] font-light leading-[1.8] text-mutedText">
                    Have a project in mind or just want to say hi? Fill out the form and I&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <div className="relative z-[1] flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* -- LEFT: Contact Info Card -- */}
                <div className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0">
                    <div className="relative">
                        {/* Glow behind card */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 via-accent/5 to-cyan/15 rounded-2xl blur-3xl opacity-70" />

                        <div className="relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm shadow-[0_8px_32px_-4px_rgba(99,102,241,0.12),0_2px_8px_rgba(0,0,0,0.08)]">
                            {/* Card header */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                                    <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[15px] font-semibold text-primaryText">Contact Info</h3>
                                    <p className="text-[12px] text-mutedText">Reach out anytime</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {contactInfo.map((item) => {
                                    const IconComponent = iconMap[item.label]
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target={item.label === "LinkedIn" ? "_blank" : undefined}
                                            rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                                            className="group flex items-center gap-3 rounded-xl border border-border bg-surface/40 p-3.5 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5"
                                        >
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bgIcon} transition-colors duration-200 group-hover:scale-105`}>
                                                {IconComponent && <IconComponent className={`h-[18px] w-[18px] ${item.iconColor}`} />}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[11px] font-medium uppercase tracking-[1px] text-mutedText">
                                                    {item.label}
                                                </p>
                                                <p className="truncate text-[13px] font-medium text-primaryText transition-colors duration-200 group-hover:text-accent">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Divider */}
                            <div className="my-5 flex items-center gap-3">
                                <span className="h-px flex-1 bg-border" />
                                <span className="text-[10px] font-medium uppercase tracking-[2px] text-mutedText">Location</span>
                                <span className="h-px flex-1 bg-border" />
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/40 p-3.5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10">
                                    <LocationIcon className="h-[18px] w-[18px] text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-medium uppercase tracking-[1px] text-mutedText">Location</p>
                                    <p className="text-[13px] font-medium text-primaryText">United Kingdom</p>
                                </div>
                            </div>

                            {/* Decorative availability chip */}
                            <div className="mt-5 rounded-xl border border-border bg-card2/60 px-4 py-3 font-mono text-[11.5px]">
                                <span className="text-mutedText italic">{"// "}Status</span>
                                <br />
                                <span className="text-syntaxKeyword">const</span>{" "}
                                <span className="text-syntaxVariable">availability</span>
                                <span className="text-secondaryText">: </span>
                                <span className="text-syntaxType">Status</span>
                                <span className="text-secondaryText"> = </span>
                                <span className="text-syntaxString">{'"'}Open to work{'"'}</span>
                                <span className="text-secondaryText">;</span>
                                <span className="inline-block w-[2px] h-[13px] bg-accent ml-[2px] align-middle animate-blink" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- RIGHT: Form -- */}
                <div className="flex-1">
                    <div className="relative">
                        {/* Glow behind card */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-cyan/10 rounded-2xl blur-3xl opacity-60" />

                        <div className="relative rounded-2xl border border-border bg-card/40 p-6 md:p-8 backdrop-blur-sm shadow-[0_8px_32px_-4px_rgba(99,102,241,0.08),0_2px_8px_rgba(0,0,0,0.06)]">
                        {/* Form header */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                                <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-[15px] font-semibold text-primaryText">Send a Message</h3>
                                <p className="text-[12px] text-mutedText">I&apos;ll respond within 24 hours</p>
                            </div>
                        </div>

                        <CustomForm />
                        </div>
                    </div>
                </div>
            </div>
            </RevealSection>
        </Section>
    )
}
