'use client'
import React, { useEffect, useState } from 'react'

type Tab = {
    name: string;
    content: React.ReactNode | string,
    id: string
}

type Props = {
    tabs: Tab[],
    preActive?: string
}

export default function Tabs({ tabs, preActive = 'work' }: Props) {

    const [active, setActive] = useState<string>('work');

    const activeHandler = (id: string): void => {
        setActive(id)
    }

    useEffect(() => {
        setActive(preActive)
    }, [preActive])

    return (
        <>
            <div className="flex items-center justify-center gap-1 rounded-xl border border-border bg-surface/30 p-1 w-fit mx-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        role="tab"
                        onClick={() => activeHandler(tab.id)}
                        className={`relative rounded-lg px-5 py-2 text-[13px] font-medium transition-all duration-200 ${
                            active === tab.id
                                ? 'bg-accent text-white shadow-[0_2px_8px_rgba(99,102,241,0.25)]'
                                : 'text-secondaryText hover:text-primaryText hover:bg-surface/50'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className='mt-8'>
                {tabs.map((tab) => (
                    tab.id === active && (
                        <React.Fragment key={tab.id}>
                            {tab.content}
                        </React.Fragment>
                    )
                ))}
            </div>
        </>
    )
}
