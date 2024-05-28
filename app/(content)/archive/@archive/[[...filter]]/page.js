import Link from "next/link";

import { getAllNewsYears, getAllNewsMonths, getYearNews, getMonthNews } from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default function NewsYearPage({ params }) {
    const newsYear = params.filter?.[0];
    const newsMonth = params.filter?.[1];

    let news;
    let links = getAllNewsYears();
    let content = <p>No news found for selected period.</p>;

    if (newsYear && !newsMonth) {
        links = getAllNewsMonths(+newsYear);
        news = getYearNews(+newsYear);
    }

    if (newsYear && newsMonth) {
        links = [];
        news = getMonthNews(+newsYear, +newsMonth);
    }

    if (newsYear) {
        content = <NewsList news={news} />;
    }

    if ((newsYear && !getAllNewsYears().includes(+newsYear)) || (newsMonth && !getAllNewsMonths(+newsYear).includes(+newsMonth))) {
        throw new Error('Invalid Request!');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <Link href={newsYear ? `/archive/${newsYear}/${link}` : `/archive/${link}`}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </header>
            {content}
        </>
    );
}