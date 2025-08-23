"use client"

import { useState } from "react"
import { Search, Globe, MoreVertical, Menu, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChapterNavigation } from "@/components/chapter-navigation"
import { BibleContentManager } from "@/lib/bible-data"

interface BibleReaderProps {
  chapter: string
  onMenuOpen: () => void
  onSearchOpen: () => void
  onChapterChange: (chapter: string) => void
}

export function BibleReader({ chapter, onMenuOpen, onSearchOpen, onChapterChange }: BibleReaderProps) {
  const [showChapterNav, setShowChapterNav] = useState(false)

  // Using the new Bible content management system
  const { book: currentBook, chapter: currentChapterNum } = BibleContentManager.parseChapterString(chapter)
  const currentBookData = BibleContentManager.getBook(currentBook)
  const chapterContent = BibleContentManager.getChapter(currentBook, currentChapterNum)

  // Get verses from content manager or generate placeholder
  const verses =
    chapterContent?.verses || BibleContentManager.generatePlaceholderChapter(currentBook, currentChapterNum).verses

  // Navigation functions
  const goToPreviousChapter = () => {
    if (currentChapterNum > 1) {
      onChapterChange(BibleContentManager.formatChapterString(currentBook, currentChapterNum - 1))
    }
  }

  const goToNextChapter = () => {
    if (currentBookData && currentChapterNum < currentBookData.chapters) {
      onChapterChange(BibleContentManager.formatChapterString(currentBook, currentChapterNum + 1))
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bible-gradient page-transition">
        {/* Enhanced header with better button effects */}
        <div className="flex justify-between items-center px-4 py-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 bible-button rounded-xl"
            onClick={onMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="text-white text-2xl font-bold tracking-wide text-shadow-soft">ስኅ</div>

          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 bible-button rounded-xl"
              onClick={onSearchOpen}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 bible-button rounded-xl">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 bible-button rounded-xl">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Enhanced main content with better typography */}
        <div className="flex-1 px-6 py-6">
          <h1 className="text-white text-3xl font-light text-center mb-12 tracking-wide text-shadow-soft">
            {currentBook} ምዕራፍ {currentChapterNum}
          </h1>

          <div className="space-y-6 max-w-2xl mx-auto">
            {verses.map((verse, index) => (
              <div key={index} className="verse-container">
                <div className="flex gap-4 items-start">
                  <span className="verse-number font-bold text-xl min-w-[32px] mt-1 flex-shrink-0">
                    {verse.amharicNumber}
                  </span>
                  <div className="flex-1">
                    {/* Display both Amharic and English text when available */}
                    {verse.amharicText && (
                      <p className="text-white text-lg leading-relaxed font-light tracking-wide mb-3 text-shadow-soft">
                        {verse.amharicText}
                      </p>
                    )}
                    <p className="text-white/90 text-base leading-relaxed font-light tracking-wide text-shadow-soft">
                      {verse.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced bottom navigation with glass effect */}
        <div className="flex justify-between items-center px-4 py-4 glass-effect">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 text-lg font-medium flex items-center gap-2 bible-button rounded-xl"
            onClick={goToPreviousChapter}
            disabled={currentChapterNum <= 1}
          >
            <ChevronLeft className="h-5 w-5" />
            ዕላፍ
          </Button>

          <button
            className="text-white text-center hover:bg-white/20 rounded-xl px-4 py-2 bible-button"
            onClick={() => setShowChapterNav(true)}
          >
            <div className="text-base font-medium text-shadow-soft">{currentBook}</div>
            <div className="text-sm opacity-80 text-shadow-soft">ምዕራፍ {currentChapterNum}</div>
          </button>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 bible-button rounded-xl">
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 text-lg font-medium flex items-center gap-2 bible-button rounded-xl"
              onClick={goToNextChapter}
              disabled={!currentBookData || currentChapterNum >= currentBookData.chapters}
            >
              ቅጥፍ
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {showChapterNav && (
        <ChapterNavigation
          currentChapter={chapter}
          onChapterSelect={onChapterChange}
          onClose={() => setShowChapterNav(false)}
        />
      )}
    </>
  )
}
