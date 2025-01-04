'use client';
import { User } from "lucide-react"
import LoadingMessage from "./loading-message";

const Message = ( { id, content } : {
    id: string,
    content: string
}) => {
    return(
        <div 
            className="flex w-full px-2 py-4 max-w-full last:border-b-0 first:pt-0 flex-col gap-2 md:flex-row md:gap-4 md:px-4 border-b border-gray-200 dark:border-neutral-700 "
            style={{borderBottomColor: 'rgb(229, 231, 235)'}}
        >
            <div 
                className="flex items-center md:items-start gap-4"
            >
                <div 
                    className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                >
                    <User />
                </div>
            </div>
            <div 
                className="md:pt-2 w-full max-w-full md:flex-1 md:w-0 overflow-hidden flex flex-col gap-2"
            >
                <div
                    className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 flex flex-col gap-4"
                >
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

const Messages = () => {
    const isThinking = true
  return (
    <div className="">
        <Message id="" content="Hell"/>
        {isThinking && <LoadingMessage />}
    </div>
  )
}

export default Messages