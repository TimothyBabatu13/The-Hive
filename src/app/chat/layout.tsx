import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/context/theme-provider";
import { AppSidebar } from "../components/app-sidebar";
import Header from "./components/header";
// import { DM_Mono } from "next/font/google";

// const DMMONO = DM_Mono({
//   variable: "--font-dm_mono",
//   subsets: ["latin"],
//   weight: ['300', '400', '500']
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={``}>
      <SidebarProvider>
      <AppSidebar />
      <main
        className={`w-full`}
      >
        <div
          // style={{boxShadow: '(0 0 #0000, 0 0 #0000), 0 0 #0000, 0 0 #0000),  0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)'}} 
          className="m-2 border  border-[#e5e7eb] rounded-[6px]">
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <div className="flex items-center justify-between p-4 !w-full flex-1  border-b">
              <div className="flex gap-2 items-center">
                <SidebarTrigger />
                <div data-orientation="vertical" role="none" className="shrink-0 bg-neutral-200 dark:bg-neutral-800 w-[1px] h-4"></div>
              </div>
              <Header />
            </div>
              {children}
            </ThemeProvider>
        </div>
      </main>
    </SidebarProvider>
    </div>
    
  );
}

