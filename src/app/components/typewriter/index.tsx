"use client"

import React, { useEffect, useRef, useState } from 'react'

type Props = {
    keywords: string[]
}

export default function Typwriter({ keywords = [] }: Props) {

    const [keys, setKeys] = useState('');
    const speed = useRef<number>(200)
    const words = keywords.join('|')

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

    useEffect(() => {
        const keywordList = words.split('|').filter(Boolean)

        if (keywordList.length === 0) {
            setKeys('')
            return
        }

        let isActive = true

        const wordTyper = async () => {
            let keywordIndex = 0

            while (isActive) {
                const currentWord = keywordList[keywordIndex] ?? ''

                for (let i = 0; i < currentWord.length && isActive; i++) {
                    setKeys(currentWord.substring(0, i + 1))
                    await sleep(speed.current)
                }

                await sleep(speed.current * 6)

                for (let i = currentWord.length; i >= 0 && isActive; i--) {
                    setKeys(i === 0 ? '' : currentWord.substring(0, i - 1))
                    await sleep(speed.current / 4)
                }

                keywordIndex = keywordIndex === keywordList.length - 1 ? 0 : keywordIndex + 1
            }
        }

        wordTyper()

        return () => {
            isActive = false
        }
    }, [words])

    return (
        <h3 className={`typewriter text-lg sm:text-lg md:text-xl after:dark:border-white`}>
            {
                keys
            }
        </h3>
    )
}
