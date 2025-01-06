'use client';
import { User } from "lucide-react"
import LoadingMessage from "./loading-message";
import { useChatProvider } from "@/hooks/use-chat";
import Form from "./Form";
import Image from "next/image";

const Message = ( { id, content } : {
    id: 'ai' | 'user',
    content: string
}) => {
    return(
        <div className="flex items-center border-b border-gray-200 dark:border-neutral-700">
            <div className={"mr-auto " + `${id === 'user' && 'flex-1'}`}> </div>
            <div 
                className="flex flex-1 w-full px-2 py-4 max-w-full last:border-b-0 first:pt-0 flex-col gap-2 md:flex-row md:gap-4 md:px-4 border-b border-gray-200 dark:border-neutral-700"
                style={{borderBottomColor: 'rgb(229, 231, 235)'}}
            >   
                <div className="mr-auto"></div>
                <div 
                    className="flex items-center md:items-start gap-4"
                >
                    <div 
                        className="flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                    >
                        {
                            id === 'ai' ? <Image src={'/logo.PNG'} className="h-full w-full" alt="logo" height={24} width={24} /> : <User />
                        }
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
        </div>
    )
}

const Messages = () => {
    const { isThinking, messages } = useChatProvider()
    
  return (
    <>
        {
            !!messages.length ? (
                <div className="max-h-full h-[84vh] relative overflow-y-scroll no-scrollbar">
                    {
                        messages.map(message => (
                            <Message 
                                key={crypto.randomUUID()}
                                content={message.content}
                                id={message.id}
                            />
                        ))
                    }
                    {isThinking && <LoadingMessage />}
                    <div className="absolute w-full bottom-0">
                        <Form />
                    </div>
                </div>
            ) : (<div></div>) 
        }
        
    </>
  )
}

export default Messages