import { Suspense } from "react";

import FilterHeader from "@/components/filter/filter-header";
import FilterContent from "@/components/filter/filter-content";

export default async function NewsYearPage({ params }) {
    const newsYear = params.filter?.[0];
    const newsMonth = params.filter?.[1];

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <FilterHeader year={newsYear} month={newsMonth} />
            <FilterContent year={newsYear} month={newsMonth} />
        </Suspense>
    );
}