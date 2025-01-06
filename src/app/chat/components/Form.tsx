
'use client';

import { useChatProvider } from "@/hooks/use-chat";
import {  FormEvent, useRef, useState } from "react";

const Form = () => {
    const { submitForm, isThinking } = useChatProvider();
    const [inputValue, setIsInputValue] = useState<string>('')
    
    const validateInput = () => {
        if(!!!inputValue.trim()) return;
        return inputValue
    }
    const resetValue = () => {
        setIsInputValue('');
    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const value = validateInput();
        if(!value) return;
        await submitForm(value)
        resetValue()
    }

   const reff = useRef<HTMLFormElement | null>(null)


  return (
    <div className="flex flex-col w-full">
        <form 
            onSubmit={handleSubmit}
            ref={reff}
            className={"w-full rounded-md flex flex-col overflow-hidden transition-colors duration-200 ease-in-out border border-transparent shadow-lg bg-neutral-100 focus-within:border-[#2f9999] dark:bg-neutral-800/50 " + ``}
        >
            <textarea /*tabindex="0" */ 
                onChange={(e) => setIsInputValue(e.target.value)}
                value={inputValue}
                placeholder="Ask the truthmatrix anything..." 
                className="w-full max-h-60 resize-none bg-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none dark:placeholder:text-neutral-400" 
                style={{"height": "44px !important"}}
            >
                
            </textarea>
            <div 
                className={"flex items-center justify-end px-2 pb-2 "}
            >
                <button 
                    className={"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:focus-visible:ring-neutral-300 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-black dark:text-white h-8 w-8 "} disabled={isThinking} type="submit" /*disabled=""*/ 
                    data-state="closed"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-down-right w-4 h-4 text-neutral-600 dark:text-neutral-400">
                        <polyline points="15 10 20 15 15 20"></polyline>
                        <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form