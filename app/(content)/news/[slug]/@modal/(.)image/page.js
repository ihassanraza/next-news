'use client';

import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function InterceptedImage({ params }) {
    const newsSlug = params.slug;
    const newsItem = getNewsItem(newsSlug);
    const router = useRouter();

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="modal-backdrop" onClick={router.back}>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </div>
    );
}