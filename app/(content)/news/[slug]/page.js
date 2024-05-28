import Link from "next/link";
import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

export default function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article>
            <header>
                <Link href={`/news/${newsSlug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </Link>
                <h1>{newsItem.title}</h1>
                <time datetime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    );
}