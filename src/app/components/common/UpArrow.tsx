'use client'
import Image from 'next/image'
import React from 'react'
import { useScrollSection } from '@/app/store/ScrollObserver'

export default function UpArrow() {
    const { showScrollUp } = useScrollSection();

    const scrollToTopHandler = () => {
        scrollTo(0, 0)
    }

    return (
        <button
            onClick={scrollToTopHandler}
            className={`
                group
                flex items-center justify-center
                fixed z-50
                right-5 md:right-8 lg:right-[7%] bottom-10
                w-11 h-11 md:w-12 md:h-12
                rounded-xl
                border border-border
                bg-surface/40 backdrop-blur-sm
                shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                transition-all duration-300
                hover:-translate-y-[2px] hover:border-accent/30 hover:bg-accent/5 hover:shadow-[0_8px_24px_rgba(99,102,241,0.15)]
                ${showScrollUp ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
            `}
            aria-label="Back to top"
        >
            {/* Hover accent line */}
            <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Image
                className='block dark:hidden transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:animate-none animate-bounce-arrow'
                src='/icons/double_arrow_up.svg'
                alt='upward-arrow'
                width={24}
                height={24}
            />
            <Image
                className='hidden dark:block transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:animate-none animate-bounce-arrow'
                src='/icons/double_arrow_up_white.svg'
                alt='upward-arrow'
                width={24}
                height={24}
            />

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-accent shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200 opacity-0 group-hover:opacity-100 pointer-events-none">
                Back to top
            </span>
        </button>
    )
}
