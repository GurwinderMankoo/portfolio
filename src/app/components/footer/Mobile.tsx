'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

const PHONE_NUMBER = '+447435160562'

export default function Mobile({ }: Props) {

    const [copied, setCopied] = useState(false)

    const copyNumber = () => {
        navigator.clipboard.writeText(PHONE_NUMBER)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative">
            <a
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/40 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 hover:-translate-y-[1px]"
                onClick={copyNumber}
                role='button'
                title={`Copy (${PHONE_NUMBER})`}
            >
                <Image
                    src='/icons/mobile.svg'
                    alt="Mobile"
                    width={18}
                    height={18}
                />
            </a>

            {/* Copied tooltip */}
            {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-accent shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-opacity duration-200">
                    Copied!
                </span>
            )}
        </div>
    )
}
