import React from 'react'
import Section from '../common/Section'
import ProjectCardContainer from '../common/ProjectCardContainer'
import RevealSection from '../common/RevealSection'

import FodaneWebsite from "../../../../public/projects/fodane-website.png";
import ReelUpWebsite from "../../../../public/projects/reelup-website.png";
import ReelUP from "../../../../public/projects/reelup-app.png"
import Fodane from "../../../../public/projects/fodane.png"
import COD from "../../../../public/projects/COD-form.png"
import ShopHub from "../../../../public/projects/theshophub.png"
import LlmTextGenerator from "../../../../public/projects/llm-text-generator.png"

type Props = {}

export const projects = [
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 2,
        url: 'https://apps.shopify.com/reelup',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ],
        img: ReelUP
    },
    {
        name: 'ReelUp',
        content: 'Shopify embaded app created using many library',
        id: 6,
        url: 'https://reelup.io/',
        technologies: [
            'NextJs',
            'Increment Site Genration',
            "MDX"
        ],
        img: ReelUpWebsite
    },
    {
        name: 'Fodane',
        content: 'Shopify embaded app created contain 50 apps in a single app',
        id: 4,
        url: 'https://apps.shopify.com/fodane',
        technologies: [
            'React Js', 'React-Router-Dom', 'Shopify-Polaris', 'Shopify-App-Bridge', 'Context API', 'TypeScript', 'Scss'
        ],
        img: Fodane
    },

    {
        name: 'ShopHub',
        content: 'A modern e-commerce platform with product browsing, cart, wishlist, and checkout flow.',
        id: 3,
        url: 'https://theshophub.vercel.app/',
        technologies: [
            'Next Js', 'React Js',
            'TypeScript', 'Schadcn/ui', 'Context API',
            'Prisma', 'Tailwind CSS', 'postgresql',
            'vercel', 'google auth', 'stripe', 'webhooks'
        ],
        img: ShopHub
    },
    {
        name: 'llms.txt Generator',
        content: 'A no-code tool that generates an llms.txt file to help AI search engines and LLM crawlers understand and index a website.',
        id: 4,
        url: 'https://llmoptimize.vercel.app/',
        technologies: [
            'Next Js', 'React Js', 'TypeScript', 'Tailwind CSS',
            'vercel', 'AI-powered tool', 'puppeteer', 'openai',
        ],
        img: LlmTextGenerator
    },
    {
        name: 'Fodane Website',
        content: 'Static site created using nextjs',
        id: 5,
        url: 'https://fodane.app/',
        technologies: [
            'Next Js',
            'Increment Site Genration',
        ],
        img: FodaneWebsite
    },
]

export default function ProjectsMain({ }: Props) {
    return (
        <Section id="projects" className="relative overflow-hidden">
            {/* -- Decorative background blobs -- */}
            <div className="absolute pointer-events-none z-0 w-[500px] h-[500px] bg-[rgba(99,102,241,0.06)] dark:bg-[rgba(99,102,241,0.1)] top-[-80px] right-[-80px] rounded-full blur-[120px] animate-float [animation-delay:0s]" />
            <div className="absolute pointer-events-none z-0 w-[350px] h-[350px] bg-[rgba(34,211,238,0.04)] dark:bg-[rgba(34,211,238,0.07)] bottom-[-60px] left-[-60px] rounded-full blur-[90px] animate-float [animation-delay:-3s]" />

            <RevealSection variant="fade-scale">
                {/* -- Section Header -- */}
                <div className="relative z-[1] mb-12 md:mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[11px] font-medium uppercase tracking-[2px] text-accent">
                            Projects
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-primaryText">
                        Featured Work
                    </h2>
                    <p className="mx-auto mt-3 max-w-[480px] text-[13.5px] font-light leading-[1.8] text-mutedText">
                        A selection of projects I&apos;ve built — from Shopify apps to full-stack web applications.
                    </p>
                </div>

                {/* -- Project Grid -- */}
                <div className="relative z-[1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {projects.map((project) => (
                        <ProjectCardContainer project={project} key={project.id} />
                    ))}
                </div>
            </RevealSection>
        </Section>
    )
}
