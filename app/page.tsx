"use client"

import { useState } from "react"
import { BibleReader } from "@/components/bible-reader"
import { NavigationMenu } from "@/components/navigation-menu"
import { SearchScreen } from "@/components/search-screen"

export default function Home() {
  const [currentView, setCurrentView] = useState<"reader" | "menu" | "search">("reader")
  const [currentChapter, setCurrentChapter] = useState("ዕ(1)") // Psalm 1 in Amharic

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/monk-reading-background.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-purple-800/80" />

      <div className="relative z-10">
        {currentView === "reader" ? (
          <BibleReader
            chapter={currentChapter}
            onMenuOpen={() => setCurrentView("menu")}
            onSearchOpen={() => setCurrentView("search")}
            onChapterChange={setCurrentChapter}
          />
        ) : currentView === "menu" ? (
          <NavigationMenu
            onClose={() => setCurrentView("reader")}
            onChapterSelect={(chapter) => {
              setCurrentChapter(chapter)
              setCurrentView("reader")
            }}
          />
        ) : (
          <SearchScreen
            onClose={() => setCurrentView("reader")}
            onResultSelect={(book, chapter) => {
              setCurrentChapter(`${book}(${chapter})`)
              setCurrentView("reader")
            }}
          />
        )}
      </div>
    </div>
  )
}
