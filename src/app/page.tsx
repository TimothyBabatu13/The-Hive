
import { BorderBeam } from "./components/BorderBeam";
import { GetStartedButton } from "./components/buttons";
import GraphComponent from "./components/GraphComponent/GraphComponent";


export default function Home() {
  return (
    <div className="text-center pt-16 w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-bold text-[#2f9999]">Meet The Hive</h1>
        <h2>A modular network of interoperable Defi agents</h2>
        <GetStartedButton />
      </div>
      <div className="w-full flex-1 max-w-2xl rounded-md border border-neutral-200 dark:border-neutral-700 relative">
        <GraphComponent />
        <BorderBeam />
      </div>
    </div>
  );
}
