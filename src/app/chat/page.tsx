import Image from "next/image"
import Form from "./components/Form"

const page = () => {
  return (
    <div className="p-4 flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 md:gap-8">
     <div className="h-full w-full">
      <div className="text-center flex flex-col items-center gap-4">
          <Image 
            alt="logo"
            width={80}
            height={80}
            src={'/logo-dark.webp'}
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">How can <span style={{color:'rgb(209, 153, 0)'}} className="text-brand-600 font-bold inline">We</span> help you?</h3>
            <h4 className="text-sm text-neutral-600 dark:text-neutral-400">Orchestrate a hive mind of Defi Agents to act on Solana</h4>
          </div>
        </div>
     </div>
     <Form />
    </div>
  )
}

export default page