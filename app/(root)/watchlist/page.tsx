import { WATCHLIST_TABLE_DATA } from "@/lib/constants"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { getGeneralMarketNews } from "@/lib/actions/finnhub.actions";

async function getData(): Promise<StockWithData[]> {
    return WATCHLIST_TABLE_DATA;
}

export default async function DemoPage() {
    const [data, news] = await Promise.all([
        getData(),
        getGeneralMarketNews()
    ])
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
            <h2 className="watchlist-title mb-4">Market News</h2>
            <div className="watchlist-news">
                {news.map((item) => (
                    <div key={item.datetime} className="news-item">
                        <h3 className="news-title">{item.headline}</h3>
                        <p className="news-summary">{item.summary}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    )
}