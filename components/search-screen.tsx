"use client"

import { useState } from "react"
import { Search, ArrowLeft, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BibleContentManager } from "@/lib/bible-data"

interface SearchResult {
  book: string
  chapter: number
  verse: any
}

interface SearchScreenProps {
  onClose: () => void
  onResultSelect: (book: string, chapter: string) => void
}

export function SearchScreen({ onClose, onResultSelect }: SearchScreenProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<SearchResult>>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsSearching(true)

    setTimeout(() => {
      if (query.trim()) {
        const results = BibleContentManager.searchVerses(query)
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
      setIsSearching(false)
    }, 300)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  const handleResultClick = (result: SearchResult) => {
    onResultSelect(result.book, result.chapter.toString())
    onClose()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-800 to-purple-800">
      {/* Header */}
      <div className="flex items-center gap-4 px-4 py-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={onClose}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-xl font-semibold flex-1">ፍለጋ</h1>
      </div>

      {/* Search Input */}
      <div className="px-4 pb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <Input
            type="text"
            placeholder="ቃል፣ ምዕራፍ ወይም መጽሐፍ ፈልግ..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 pr-10 py-3 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/10"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto">
        {isSearching ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-white/60">ፍለጋ...</div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-4">
            <div className="text-white/80 text-sm mb-4">{searchResults.length} ውጤት ተገኝቷል</div>
            {searchResults.map((result, index) => (
              <button
                key={index}
                onClick={() => handleResultClick(result)}
                className="w-full text-left p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-yellow-300 font-bold text-lg min-w-[24px] mt-1">
                    {result.verse.amharicNumber}
                  </span>
                  <div className="flex-1">
                    <div className="text-white/80 text-sm mb-2">
                      {result.book} {result.chapter}:{result.verse.number}
                    </div>
                    {result.verse.amharicText && (
                      <p className="text-white text-base leading-relaxed mb-2">{result.verse.amharicText}</p>
                    )}
                    <p className="text-white/70 text-sm leading-relaxed">{result.verse.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-white/40 mb-4" />
            <div className="text-white/60 text-lg mb-2">ምንም ውጤት አልተገኘም</div>
            <div className="text-white/40 text-sm">የተለየ ቃል ወይም ሐረግ ይሞክሩ</div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="h-12 w-12 text-white/40 mb-4" />
            <div className="text-white/60 text-lg mb-2">ፍለጋ ይጀምሩ</div>
            <div className="text-white/40 text-sm max-w-xs">ቃል፣ ምዕራፍ ወይም መጽሐፍ ስም በመተየብ ፍለጋ ይጀምሩ</div>
          </div>
        )}
      </div>
    </div>
  )
}
