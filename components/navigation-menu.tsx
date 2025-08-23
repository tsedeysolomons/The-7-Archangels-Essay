"use client"

import { Globe, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BibleContentManager } from "@/lib/bible-data"

interface NavigationMenuProps {
  onClose: () => void
  onChapterSelect: (chapter: string) => void
}

export function NavigationMenu({ onClose, onChapterSelect }: NavigationMenuProps) {
  const oldTestamentBooks = BibleContentManager.getBooksByCategory("old-testament")
  const poeticBooks = BibleContentManager.getBooksByCategory("poetic")
  const newTestamentBooks = BibleContentManager.getBooksByCategory("new-testament")

  const handleBookSelect = (bookName: string) => {
    onChapterSelect(BibleContentManager.formatChapterString(bookName, 1))
  }

  return (
    <div className="min-h-screen flex flex-col bible-gradient page-transition">
      {/* Enhanced hero image section */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="/images/monk-reading-background.jpg"
          alt="Monk reading in ancient stone chamber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

        {/* Header Icons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 bible-button rounded-xl">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 bible-button rounded-xl">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Enhanced verse overlay with better shadows */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-lg font-medium mb-3 leading-relaxed text-shadow-strong">
            በድንግልነት ለዘላለም እንዲኖሩ በከንቱ ተስፋ
            <br />
            እንዳይሰጡ
          </p>
          <p className="text-sm opacity-90 font-light text-shadow-soft">ማክስኅ ምዕራፍ ጽ.ዕ 60.4</p>
        </div>
      </div>

      {/* Enhanced menu content with better styling */}
      <div className="flex-1 menu-gradient overflow-y-auto">
        <div className="px-6 py-8">
          {/* Old Testament Section */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4 opacity-90 text-shadow-soft">ዘቀዳማዊ ኪዳን</h2>
            <div className="space-y-2">
              {oldTestamentBooks.map((book, index) => (
                <button
                  key={index}
                  onClick={() => handleBookSelect(book.amharic)}
                  className="menu-item block w-full text-left text-white text-lg py-3 px-4 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-shadow-soft">{book.amharic}</span>
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity text-shadow-soft">
                      {book.chapters} ምዕራፍ
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Poetic Books Section */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4 opacity-90 text-shadow-soft">መዝሙራት</h2>
            <div className="space-y-2">
              {poeticBooks.map((book, index) => (
                <button
                  key={index}
                  onClick={() => handleBookSelect(book.amharic)}
                  className="menu-item block w-full text-left text-white text-lg py-3 px-4 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-shadow-soft">{book.amharic}</span>
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity text-shadow-soft">
                      {book.chapters} ምዕራፍ
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* New Testament Section */}
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4 opacity-90 text-shadow-soft">ዘሐዲስ ኪዳን</h2>
            <div className="space-y-2">
              {newTestamentBooks.map((book, index) => (
                <button
                  key={index}
                  onClick={() => handleBookSelect(book.amharic)}
                  className="menu-item block w-full text-left text-white text-lg py-3 px-4 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-shadow-soft">{book.amharic}</span>
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity text-shadow-soft">
                      {book.chapters} ምዕራፍ
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom navigation */}
      <div className="flex justify-center items-center py-4 glass-effect">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/20 text-lg font-medium bible-button rounded-xl"
          onClick={onClose}
        >
          ቅጥፍ
        </Button>
      </div>
    </div>
  )
}
