'use client';
import { Button } from "@/components/ui/button"
import { ChartCandlestick, Coins, Search } from "lucide-react"

const Messages = [
    {
        icon: Coins,
        heading: 'Trending',
        text: 'Search the trending tokens'
    },
    {
        icon: Coins,
        heading: 'Stake',
        text: 'Stake Sol for JupSOL'
    },
    {
        icon: ChartCandlestick,
        heading: 'Trade',
        text: 'Swap on Jupiter'
    },
    {
        icon: Search,
        heading: 'Search X',
        text: 'Query social media'
    },
]

const PrebuiltMessage = () => {

    const handleSendMessage = (message: string) => {
        console.log(message)
    }

  return (
    <div className="grid grid-cols-2 gap-2">
        {
            Messages.map(message => (
                <Button 
                    className="whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300  hover:bg-neutral-200/50 hover:text-neutral-900 dark:border-neutral-700 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-50 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 h-fit justify-start py-2 px-4 border border-[#e5e7eb] bg-transparent" 
                    key={crypto.randomUUID()}
                    style={{color: 'rgb(82 82 82 / 1)'}}
                    onClick={()=>handleSendMessage(message.text)}
                >
                    <div className="flex flex-col flex-1">
                        <div className="flex gap-2 items-center">
                            <message.icon />
                            <span className="text-md font-bold">{message.heading}</span>
                        </div>
                        <p className="text-xs text-left text-neutral-600 dark:text-neutral-400 hidden md:block">{message.text}</p>
                    </div>
                </Button>
            ))
        }
    </div>
  )
}

export default PrebuiltMessage