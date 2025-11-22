import { Button } from "./ui/button"

const WatchlistButton = ({ company }: { company: string }) => {
    return (
        <Button className="watchlist-btn">Add {company} to Watchlist</Button>
    )
}

export default WatchlistButton