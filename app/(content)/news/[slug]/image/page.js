import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default function NewsDetailImagePage({ params }) {
    const newsSlug = params.slug;
    const newsItem = getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    );
}