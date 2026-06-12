'use client'
import Image from 'next/image'
import React from 'react'
import Section from './Section'
import { useScrollSection } from '@/app/store/ScrollObserver'

type Props = {}

export default function UpArrow({ }: Props) {
    const { showScrollUp } = useScrollSection();

    const scrollToTopHandler = () => {
        scrollTo(0, 0)
    }

    return (
        <button onClick={scrollToTopHandler} className={`flex ${showScrollUp ? 'opacity-100' : 'opacity-0'} transition-all fixed right-5 md:right-8 lg:right-[7%] bottom-10 bg-gray-200 dark:bg-gray-900/90 w-10 h-10 shadow-[0_0_4px_rgba(0,0,0,0.4)] dark:shadow-[0_0_4px_rgba(255,255,255,0.4)] rounded-full items-center justify-center`}>
            <Image className='block dark:hidden' src='/icons/double_arrow_up.svg' alt='upward-arrow' width={30} height={30} />
            <Image className='hidden dark:block' src='/icons/double_arrow_up_white.svg' alt='upward-arrow' width={30} height={30} />
        </button>
    )
}