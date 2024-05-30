import { getMonthNews, getYearNews } from "@/lib/news";
import NewsList from "../news/news-list";

export default async function FilterContent({ year, month }) {
    let news;

    if (year && !month) {
        news = await getYearNews(year);
    } else if (year && month) {
        news = await getMonthNews(year, month);
    }

    let newsContent = <p>No news found for selected period.</p>;

    if (year) {
        newsContent = <NewsList news={news} />;
    }

    return newsContent;
}