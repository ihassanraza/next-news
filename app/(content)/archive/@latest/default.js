import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </>
    );
}