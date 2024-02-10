// components/Navbar.tsx
"use client";
import Link from "next/link";
import AvatarMenu from "./AvatarMenu";
import { useEffect, useState } from "react";
import { MountainIcon } from "lucide-react";

const Navbar = () => {
    const [menuState, setMenuState] = useState<boolean>(true);
    const [userProfileImage, setUserProfileImage] = useState(
        "https://picsum.photos/30"
    );

    function toggleMenu() {
        setMenuState(!menuState);
    }

    // useEffect(() => {
    //     first;

    //     return () => {
    //         second;
    //     };
    // }, [third]);

    // ... (existing code)

    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 left-0 bg-inherit border-0 border-b-2 border-b-slate-300">
                <Link className="flex items-center justify-center" href="/">
                    <MountainIcon className="h-6 w-6" />
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/features"
                    >
                        Features
                    </Link>

                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="/contact"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <div className="hidden">
                <div className="flex flex-row-reverse items-baseline gap-2">
                    <div>
                        <h1>CareCraft</h1>
                    </div>
                    <button className="" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">
                            {menuState ? "Close" : "Menu"}
                        </span>
                    </button>
                </div>
                <div
                    className={`fixed top-24 left-0 h-full  ${
                        menuState ? "" : "hidden"
                    }`}
                >
                    <nav className={`bg-slate-300  h-full top-0 left-0 p-4`}>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={"/listProduct"}>listProduct</Link>
                            </li>
                            <li>
                                <Link href={"/auth"}>Auth</Link>
                            </li>
                            <li>
                                <Link href={"/auth/login"}>Login</Link>
                            </li>
                            <li>
                                <Link href={"/auth/register"}>Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <AvatarMenu userProfileImage={userProfileImage} />
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    // Fetch user profile image from the server
    const res = await fetch("/api/profile");
    const data = await res.json();
    return {
        props: {
            userProfileImage: data.profileImage,
        },
    };
}

export default Navbar;
