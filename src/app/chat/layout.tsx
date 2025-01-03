import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/context/theme-provider";
import { AppSidebar } from "../components/app-sidebar";
import Header from "./components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main
        className={``}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           <div className="flex items-center justify-between !w-full flex-1">
            <SidebarTrigger />
            <Header />
           </div>
            {children}
          </ThemeProvider>
      </main>
    </SidebarProvider>
    
  );
}

