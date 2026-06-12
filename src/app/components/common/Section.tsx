import React from 'react'

type Props = {
    children: React.ReactNode,
    id?: string,
    className?: string,
}

export default function Section({ children, id = "id", className = "" }: Props) {
    return (
        <div data-section id={id} className={`max-w-screen-lg+ pl-4 pt-20 pr-4 m-auto ${className}`}>
            {
                children
            }
        </div>
    )
}