import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <h1 className="font-bold text-xl">小酒馆</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/rain" className="transition-colors hover:text-foreground/80">雨声</Link>
        </nav>
        {/* <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
        </div> */}
      </div>
    </header>
  )
}