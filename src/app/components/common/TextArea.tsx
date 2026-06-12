import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error: string | undefined;
    label: string;
    id: string;
}

export default function TextArea({ error, label, id, ...rest }: TextAreaProps) {
    return (
        <div className='relative w-full mb-5'>
            <label
                htmlFor={id}
                className="mb-2 block text-[13px] font-medium text-secondaryText"
            >
                {label}
            </label>
            <textarea
                id={id}
                className={`w-full rounded-xl border bg-surface/40 px-4 py-3 text-[13.5px] text-primaryText placeholder:text-mutedText transition-all duration-200 outline-none resize-y min-h-[100px] ${
                    error
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20'
                        : 'border-border focus:border-accent/50 focus:ring-1 focus:ring-accent/10 hover:border-borderStrong'
                }`}
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