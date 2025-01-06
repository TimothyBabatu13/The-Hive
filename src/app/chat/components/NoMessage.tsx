'use client';
import Image from "next/image"
import Form from "./Form"
import PrebuiltMessage from "./PrebuiltMessage"
import { useChatProvider } from "@/hooks/use-chat"

const NoMessage = () => {
    const { messages } = useChatProvider()
    console.log(messages.length)
  return (
    <>
        {
            messages.length === 0 ? <div className="p-4 flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 md:gap-8">
            <div className="h-full w-full">
              <div className="text-center flex flex-col items-center gap-4">
                  <Image 
                    alt="logo"
                    width={100}
                    height={100}
                    src={'/logo.png'}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-2xl">How can <span className="text-[#2f9999] font-bold inline">We</span> help you?</h3>
                    <h4 className="text-sm text-neutral-600 dark:text-neutral-400">Orchestrate a hive mind of Defi Agents to act on Solana</h4>
                  </div>
                </div>
            </div>
            <Form />
            <PrebuiltMessage />
            </div> : <div></div>
        }
    </>
  )
}

export default NoMessage