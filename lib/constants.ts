export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

// TradingView Charts
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark', // dark mode
    dateRange: '12M', // last 12 months
    locale: 'en', // language
    largeChartUrl: '', // link to a large chart if needed
    isTransparent: true, // makes background transparent
    showFloatingTooltip: true, // show tooltip on hover
    plotLineColorGrowing: '#0FEDBE', // line color when price goes up
    plotLineColorFalling: '#0FEDBE', // line color when price falls
    gridLineColor: 'rgba(240, 243, 250, 0)', // grid line color
    scaleFontColor: '#DBDBDB', // font color for scale
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)', // fill under line when growing
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)', // fill under line when falling
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)', // highlight color for active symbol
    tabs: [
        {
            title: 'Technology',
            symbols: [
                { s: 'NASDAQ:NVDA', d: 'Nvdia' },
                { s: 'NASDAQ:PLTR', d: 'Palantir' },
                { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
                { s: 'NASDAQ:TSLA', d: 'Tesla' },
                { s: 'NASDAQ:SOFI', d: 'SOFI' },
                { s: 'NASDAQ:HOOD', d: 'Robinhood' },
            ],
        },
        {
            title: 'Financial',
            symbols: [
                { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
                { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },
                { s: 'NYSE:BAC', d: 'Bank Amer Corp' },
                { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },
                { s: 'NYSE:C', d: 'Citigroup Inc' },
                { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
            ],
        },
        {
            title: 'Services',
            symbols: [
                { s: 'NASDAQ:AMZN', d: 'Amazon' },
                { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
                { s: 'NYSE:T', d: 'At&t Inc' },
                { s: 'NYSE:WMT', d: 'Walmart' },
                { s: 'NYSE:V', d: 'Visa' },
            ],
        },
    ],
    support_host: 'https://www.tradingview.com', // TradingView host
    backgroundColor: '#141414', // background color
    width: '100%', // full width
    height: 600, // height in px
    showSymbolLogo: true, // show logo next to symbols
    showChart: true, // display mini chart
};

export const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SPX500',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                { name: 'NYSE:JPM', displayName: 'JPMorgan Chase' },
                { name: 'NYSE:WFC', displayName: 'Wells Fargo Co New' },
                { name: 'NYSE:BAC', displayName: 'Bank Amer Corp' },
                { name: 'NYSE:HSBC', displayName: 'Hsbc Hldgs Plc' },
                { name: 'NYSE:C', displayName: 'Citigroup Inc' },
                { name: 'NYSE:MA', displayName: 'Mastercard Incorporated' },
            ],
        },
        {
            name: 'Technology',
            symbols: [
                { name: 'NASDAQ:AAPL', displayName: 'Apple' },
                { name: 'NASDAQ:GOOGL', displayName: 'Alphabet' },
                { name: 'NASDAQ:MSFT', displayName: 'Microsoft' },
                { name: 'NASDAQ:FB', displayName: 'Meta Platforms' },
                { name: 'NYSE:ORCL', displayName: 'Oracle Corp' },
                { name: 'NASDAQ:INTC', displayName: 'Intel Corp' },
            ],
        },
        {
            name: 'Services',
            symbols: [
                { name: 'NASDAQ:AMZN', displayName: 'Amazon' },
                { name: 'NYSE:BABA', displayName: 'Alibaba Group Hldg Ltd' },
                { name: 'NYSE:T', displayName: 'At&t Inc' },
                { name: 'NYSE:WMT', displayName: 'Walmart' },
                { name: 'NYSE:V', displayName: 'Visa' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Etc/UTC',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: 'true',
    locale: 'en',
    width: '100%',
    height: 400,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const TICKER_TAPE_WIDGET_CONFIG = {
    symbols: [
        {
            proName: "FOREXCOM:SPXUSD",
            title: "S&P 500 Index"
        },
        {
            proName: "BITSTAMP:BTCUSD",
            title: "Bitcoin"
        },
        {
            proName: "BITSTAMP:ETHUSD",
            title: "Ethereum"
        },
        {
            proName: "FOREXCOM:XAUUSD",
            title: "Gold"
        }
    ],
    colorTheme: "dark",
    locale: "en",
    largeChartUrl: "",
    isTransparent: true,
    showSymbolLogo: true,
    displayMode: "adaptive"
}

export const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'NVDA',
    'PLTR',
    'META',
    'SOFI',
    'HOOD',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'AAPL',

    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',

    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',

    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',

    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE',
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];

export const SCRIPT_URL = 'https://s3.tradingview.com/external-embedding/embed-widget'

export const INITIAL_STOCKS = [
    { symbol: 'META', name: 'Meta', exchange: 'NASDAQ', type: 'stock', isInWatchlist: true },
    { symbol: 'AAPL', name: 'Apple', exchange: 'NASDAQ', type: 'stock', isInWatchlist: true },
    { symbol: 'MSFT', name: 'Microsoft', exchange: 'NASDAQ', type: 'stock', isInWatchlist: false },
    { symbol: 'GOOGL', name: 'Google', exchange: 'NASDAQ', type: 'stock', isInWatchlist: true },
    { symbol: 'AMZN', name: 'Amazon', exchange: 'NASDAQ', type: 'stock', isInWatchlist: true },
]

export const WATCHLIST_TABLE_DATA = [
    {
        userId: "abv24o82905",
        symbol: "META",
        company: "Meta Platforms Inc.",
        addedAt: new Date("2024-01-15"),
        currentPrice: 485.75,
        changePercent: 2.34,
        priceFormatted: "$485.75",
        changeFormatted: "+2.34%",
        marketCap: "1.24T",
        peRatio: "32.7",
    },
    {
        userId: "abv24o82905",
        symbol: "AAPL",
        company: "Apple Inc.",
        addedAt: new Date("2024-01-10"),
        currentPrice: 182.63,
        changePercent: -1.25,
        priceFormatted: "$182.63",
        changeFormatted: "-1.25%",
        marketCap: "2.86T",
        peRatio: "29.8",
    },
    {
        userId: "abv24o82905",
        symbol: "MSFT",
        company: "Microsoft Corporation",
        addedAt: new Date("2024-01-12"),
        currentPrice: 389.47,
        changePercent: 0.89,
        priceFormatted: "$389.47",
        changeFormatted: "+0.89%",
        marketCap: "2.90T",
        peRatio: "36.4",
    },
    {
        userId: "abv24o82905",
        symbol: "GOOGL",
        company: "Alphabet Inc.",
        addedAt: new Date("2024-01-08"),
        currentPrice: 142.38,
        changePercent: -2.15,
        priceFormatted: "$142.38",
        changeFormatted: "-2.15%",
        marketCap: "1.78T",
        peRatio: "25.1",
    },
    {
        userId: "abv24o82905",
        symbol: "AMZN",
        company: "Amazon.com Inc.",
        addedAt: new Date("2024-01-05"),
        currentPrice: 155.42,
        changePercent: 1.76,
        priceFormatted: "$155.42",
        changeFormatted: "+1.76%",
        marketCap: "1.60T",
        peRatio: "78.3",
    },
    {
        userId: "abv24o82905",
        symbol: "TSLA",
        company: "Tesla Inc.",
        addedAt: new Date("2024-01-18"),
        currentPrice: 212.19,
        changePercent: -3.42,
        priceFormatted: "$212.19",
        changeFormatted: "-3.42%",
        marketCap: "675.2B",
        peRatio: "68.9",
    },
    {
        userId: "abv24o82905",
        symbol: "SOFI",
        company: "SoFi Technologies Inc.",
        addedAt: new Date("2024-01-20"),
        currentPrice: 7.84,
        changePercent: 4.25,
        priceFormatted: "$7.84",
        changeFormatted: "+4.25%",
        marketCap: "7.5B",
        peRatio: "-",
    },
    {
        userId: "abv24o82905",
        symbol: "NVDA",
        company: "NVIDIA Corporation",
        addedAt: new Date("2024-01-22"),
        currentPrice: 613.15,
        changePercent: 3.12,
        priceFormatted: "$613.15",
        changeFormatted: "+3.12%",
        marketCap: "1.51T",
        peRatio: "76.2",
    },
    {
        userId: "abv24o82905",
        symbol: "JPM",
        company: "JPMorgan Chase & Co.",
        addedAt: new Date("2024-01-14"),
        currentPrice: 172.45,
        changePercent: 0.34,
        priceFormatted: "$172.45",
        changeFormatted: "+0.34%",
        marketCap: "498.3B",
        peRatio: "10.8",
    },
    {
        userId: "abv24o82905",
        symbol: "JNJ",
        company: "Johnson & Johnson",
        addedAt: new Date("2024-01-16"),
        currentPrice: 159.72,
        changePercent: -0.56,
        priceFormatted: "$159.72",
        changeFormatted: "-0.56%",
        marketCap: "385.4B",
        peRatio: "11.2",
    },
    {
        userId: "abv24o82905",
        symbol: "V",
        company: "Visa Inc.",
        addedAt: new Date("2024-01-11"),
        currentPrice: 274.88,
        changePercent: 1.23,
        priceFormatted: "$274.88",
        changeFormatted: "+1.23%",
        marketCap: "552.1B",
        peRatio: "31.5",
    },
    {
        userId: "abv24o82905",
        symbol: "UNH",
        company: "UnitedHealth Group",
        addedAt: new Date("2024-01-09"),
        currentPrice: 521.34,
        changePercent: -1.89,
        priceFormatted: "$521.34",
        changeFormatted: "-1.89%",
        marketCap: "480.9B",
        peRatio: "21.4",
    }
]