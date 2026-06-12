import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error: string | undefined;
    id: string;
}

export default function Input({
    label, error, id, ...rest
}: InputProps) {
    return (
        <div className="relative w-full mb-5">
            <label
                className="mb-2 block text-[13px] font-medium text-secondaryText"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className={`w-full rounded-xl border bg-surface/40 px-4 py-3 text-[13.5px] text-primaryText placeholder:text-mutedText transition-all duration-200 outline-none ${
                    error
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                        : 'border-border focus:border-accent/50 focus:ring-1 focus:ring-accent/10 hover:border-borderStrong'
                }`}
                id={id}
                {...rest}
            />
            {!!error && (
                <p className="absolute -bottom-4 text-[11px] text-red-400">
                    {error}
                </p>
            )}
        </div>
    )
}