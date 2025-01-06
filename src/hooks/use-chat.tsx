'use client';

import { createContext, useContext, useState } from "react";

interface contextProps {
    isThinking: boolean,
    submitForm: () => Promise<void>,
    messages: [] 

}
const context = createContext< contextProps | null>(null)

const wait = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const ChatProvider = ({ children } : {
    children: React.ReactNode
}) => {

    /* isThinking is used to track if message is being fetched from backend
        so that loading indicator will be shown.
    */
    const [isThinking, setIsThinking] = useState<boolean>(false);
    
    const submitForm = async () => {
        setIsThinking(true);
        await wait(5000);
        setIsThinking(false);
    }

    const value: contextProps = {
        isThinking,
        submitForm,
        messages: []
    }
  return (
    <context.Provider 
        value={value}
    >
        {children}
    </context.Provider>
  )
}

export default ChatProvider;

export const useChatProvider = () : contextProps=> {
    const Context = useContext(context);
    if(Context === null) {
        throw new Error('Error')
    };
    return Context as contextProps;
}