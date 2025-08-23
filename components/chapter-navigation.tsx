"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BibleContentManager } from "@/lib/bible-data"

interface ChapterNavigationProps {
  currentChapter: string
  onChapterSelect: (chapter: string) => void
  onClose: () => void
}

export function ChapterNavigation({ currentChapter, onChapterSelect, onClose }: ChapterNavigationProps) {
  const { book: currentBook, chapter: currentChapterNum } = BibleContentManager.parseChapterString(currentChapter)
  const currentBookData = BibleContentManager.getBook(currentBook)

  const handleChapterSelect = (chapterNum: number) => {
    onChapterSelect(BibleContentManager.formatChapterString(currentBook, chapterNum))
    onClose()
  }

  if (!currentBookData) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end page-transition">
      <div className="w-full menu-gradient rounded-t-3xl max-h-[80vh] flex flex-col glass-effect">
        {/* Enhanced header with better styling */}
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <div>
            <h2 className="text-white text-xl font-semibold text-shadow-soft">{currentBook}</h2>
            <p className="text-white/70 text-sm text-shadow-soft">{currentBookData.chapters} ምዕራፍ</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 bible-button rounded-xl"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Enhanced chapter grid with better animations */}
        <ScrollArea className="flex-1 p-6">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: currentBookData.chapters }, (_, i) => i + 1).map((chapterNum) => (
              <button
                key={chapterNum}
                onClick={() => handleChapterSelect(chapterNum)}
                className={`
                  chapter-grid-item aspect-square rounded-xl flex items-center justify-center text-lg font-medium
                  ${
                    chapterNum === currentChapterNum
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-500 text-purple-900 active shadow-lg"
                      : "glass-light text-white hover:bg-white/30"
                  }
                `}
              >
                {chapterNum}
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
