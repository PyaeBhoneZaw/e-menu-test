import React from 'react';
import Link from 'next/link';

const LowerNavBar: React.FC = () => {
    return (
        <nav className="bg-cyan-600 p-3 sticky top-0 z-10 font-semibold">
            <div className="container mx-auto overflow-x-auto">
                <div className="flex items-center justify-center md:justify-between">
                    <div>
                        <ul className="flex space-x-4 whitespace-nowrap">
                            <li>
                                <Link href="#">
                                    Juice
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Noodles
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Food
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Appetizer
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Set Menu
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Traditional Food
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LowerNavBar;
