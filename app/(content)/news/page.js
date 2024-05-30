import { getAllNews } from '@/lib/news';
import NewsList from "@/components/news/news-list";

export default async function NewsPage() {
    const allNews = await getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={allNews} />
        </>
    );
}