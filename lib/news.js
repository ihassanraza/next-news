import sql from 'better-sqlite3';

const db = sql('data.db');

import { DUMMY_NEWS } from "@/dummy-news";

export async function getAllNews() {
    const allNews = db.prepare("SELECT * FROM news ORDER BY date DESC").all();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return allNews
}

export async function getNewsItem(slug) {
    const newsItem = db.prepare("SELECT * FROM news WHERE slug = ? ORDER BY date DESC").get(slug);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return newsItem;
}

export async function getLatestNews() {
    const latestNews = db.prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3").all();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return latestNews;
}

export async function getAllNewsYears() {
    const years = db.prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news").all().map((year) => year.year);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return years;
}

export async function getYearNews(year) {
    const yearNews = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC").all(year);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return yearNews;
}

export function getAllNewsMonths(year) {
    const months = db.prepare("SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?").all(year).map((month) => month.month);
    return months;
}

export async function getMonthNews(year, month) {
    const monthNews = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC").all(year, month);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return monthNews;
}
