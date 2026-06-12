import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import NavLinks from "./NavLinks";

type Props = {};

export type link = {
    label: string,
    url: string,
    id: number
}

export const links: link[] = [
    {
        label: 'Home',
        url: '#home',
        id: 1
    },
    {
        label: 'About',
        url: '#about',
        id: 2
    },
    {
        label: 'Experience',
        url: '#experience',
        id: 4
    },
    {
        label: 'Projects',
        url: '#projects',
        id: 5
    },
    {
        label: 'Contact',
        url: '#contact',
        id: 6
    },
]

function Navbar({ }: Props) {
    return (
        <Nav>
            <div className="max-w-screen-lg+ flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="#" scroll={true} className="flex items-center">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-700">
                        {"<"}Gurwinder {"/>"}
                    </span>
                </Link>
                <NavLinks />
            </div>
        </Nav>

    );
}

export default Navbar;
