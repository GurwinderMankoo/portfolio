'use client'

import { useEffect, useRef, useState } from 'react'

type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'fade-in'

interface RevealSectionProps {
    children: React.ReactNode
    variant?: AnimationVariant
    className?: string
    delay?: number
}

const variantClasses: Record<AnimationVariant, string> = {
    'fade-up': 'sm:animate-reveal-up',
    'fade-left': 'sm:animate-reveal-left',
    'fade-right': 'sm:animate-reveal-right',
    'fade-scale': 'sm:animate-reveal-scale',
    'fade-in': 'sm:animate-reveal-fade',
}

export default function RevealSection({
    children,
    variant = 'fade-up',
    className = '',
    delay = 0,
}: RevealSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        console.log(isVisible, "isVisible")
    }, [isVisible])

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? variantClasses[variant] : 'opacity-0'}`}
            style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    )
}
