import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews() {
    return DUMMY_NEWS;
}

export function getNewsItem(slug) {
    return DUMMY_NEWS.find(newsItem => newsItem.slug === slug);
}

export function getLatestNews() {
    return DUMMY_NEWS.filter(newsItem => {
        const currentDate = new Date().toLocaleDateString();
        return currentDate > newsItem.date;
    }).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
}

export function getAllNewsYears() {
    return DUMMY_NEWS.reduce((years, newsItem) => {
        const year = new Date(newsItem.date).getFullYear();

        if (!years.includes(year)) {
            years.push(year);
        }

        return years;
    }, []).sort((a, b) => b - a);
}

export function getYearNews(year) {
    return DUMMY_NEWS.filter(newsItem => {
        const newsYear = new Date(newsItem.date).getFullYear();
        return newsYear === year;
    }).sort((a, b) => b - a);
}

export function getAllNewsMonths(year) {
    return DUMMY_NEWS.reduce((months, newsItem) => {
        const newsYear = new Date(newsItem.date).getFullYear();
        
        if (newsYear === year) {
            const month = new Date(newsItem.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        
        return months;
    }, []).sort((a, b) => b - a);
}

export function getMonthNews(year, month) {
    return DUMMY_NEWS.filter(newsItem => {
        const newsYear = new Date(newsItem.date).getFullYear();
        const newsMonth = new Date(newsItem.date).getMonth();

        return newsYear === year && newsMonth + 1 === month;
    }).sort((a, b) => b - a);
}
