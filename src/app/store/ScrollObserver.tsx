'use client'

import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type ScrollObserverStateType = {
    activeSection: string,
    setActiveSection: Dispatch<SetStateAction<string>>,
    showScrollUp: boolean
}

type Props = {
    children: React.ReactNode
}

export const ScrollObserverState = createContext<ScrollObserverStateType>({ activeSection: 'home', setActiveSection: () => null, showScrollUp: false });

export const useScrollSection = () => useContext(ScrollObserverState)

export default function ScrollObserverProvider({ children }: Props) {

    const [activeSection, setActiveSection] = useState('home');
    const [showScrollUp, setShowScrollUp] = useState(false);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            return;
        }

        //create new instance and pass a callback function
        const observer = new IntersectionObserver((entries) => {
            const firstEntry = entries[0];

            if (!firstEntry) {
                return;
            }

            if (firstEntry.target.id !== "home") {
                setShowScrollUp(true)
            } else {
                setShowScrollUp(false)
            }
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, { root: null, threshold: 1, rootMargin: '200px' });

        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll('[data-section]')

        sections.forEach((section) => {
            observer.observe(section);
        });
        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <ScrollObserverState.Provider
            value={{
                activeSection,
                setActiveSection,
                showScrollUp
            }}
        >
            {
                children
            }
        </ScrollObserverState.Provider>
    )
}
