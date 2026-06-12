"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function ThemeSwitcher({ children }: Props) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {
                children
            }
        </ThemeProvider>
    )
}