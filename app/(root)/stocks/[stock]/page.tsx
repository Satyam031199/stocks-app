import TradingViewWidget from "@/components/TradingViewWidget";
import WatchlistButton from "@/components/WatchlistButton";
import { CANDLE_CHART_WIDGET_CONFIG, COMPANY_FINANCIALS_WIDGET_CONFIG, SCRIPT_URL, SYMBOL_INFO_WIDGET_CONFIG, TECHNICAL_ANALYSIS_WIDGET_CONFIG } from "@/lib/constants";

const Page = async ({ params }: { params: Promise<{ stock: string }> }) => {
    const { stock } = await params;
    return (
        <div className="flex min-h-screen home-wrapper">
            <section className="grid w-full gap-8 home-section">
                {/* Left column */}
                <div className="md:col-span-2 xl:col-span-2 space-y-5">
                    <TradingViewWidget
                        scriptUrl={`${SCRIPT_URL}-symbol-info.js`}
                        config={SYMBOL_INFO_WIDGET_CONFIG(stock)}
                    />
                    <TradingViewWidget
                        scriptUrl={`${SCRIPT_URL}-advanced-chart.js`}
                        config={CANDLE_CHART_WIDGET_CONFIG(stock)}
                        className="custom-chart"
                    />
                </div>
                {/* Right column */}
                <div className="md:col-span-1 xl:col-span-1 space-y-5">
                    <div className="flex items-center justify-between">
                        <WatchlistButton company={stock} />
                    </div>
                    <TradingViewWidget
                        scriptUrl={`${SCRIPT_URL}-technical-analysis.js`}
                        config={TECHNICAL_ANALYSIS_WIDGET_CONFIG(stock)}
                    />
                    <TradingViewWidget
                        scriptUrl={`${SCRIPT_URL}-financials.js`}
                        config={COMPANY_FINANCIALS_WIDGET_CONFIG(stock)}
                    />
                </div>
            </section>
        </div>
    )
}

export default Page;
