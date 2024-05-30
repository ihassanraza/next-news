import Link from "next/link";

import { getAllNewsYears, getAllNewsMonths } from "@/lib/news";

export default async function FilterHeader({ year, month }) {
    const availableYears = await getAllNewsYears();
    let links = availableYears;

    if (year && !month) {
        links = getAllNewsMonths(year);
    } else if(year && month) {
        links = [];
    }

    if ((year && !availableYears.includes(year)) || (month && !getAllNewsMonths(year).includes(month))) {
        throw new Error('Invalid Request!');
    }

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link href={year ? `/archive/${year}/${link}` : `/archive/${link}`}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}