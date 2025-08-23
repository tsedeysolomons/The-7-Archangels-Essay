export interface BibleVerse {
  number: string
  amharicNumber: string
  text: string
  amharicText?: string
}

export interface BibleChapter {
  book: string
  chapter: number
  verses: BibleVerse[]
}

export interface BibleBook {
  amharic: string
  english: string
  chapters: number
  category: "old-testament" | "new-testament" | "poetic" | "prophetic"
}

// Bible books with comprehensive information
export const BIBLE_BOOKS: BibleBook[] = [
  // Old Testament
  { amharic: "ዘፍጥረት", english: "Genesis", chapters: 50, category: "old-testament" },
  { amharic: "ዘጸአት", english: "Exodus", chapters: 40, category: "old-testament" },
  { amharic: "ዘሌዋውያን", english: "Leviticus", chapters: 27, category: "old-testament" },
  { amharic: "ዘኍልቍ", english: "Numbers", chapters: 36, category: "old-testament" },
  { amharic: "ዘዳግም", english: "Deuteronomy", chapters: 34, category: "old-testament" },
  { amharic: "ዘኢያሱ", english: "Joshua", chapters: 24, category: "old-testament" },
  { amharic: "ዘመሳፍንት", english: "Judges", chapters: 21, category: "old-testament" },
  { amharic: "ዘሩት", english: "Ruth", chapters: 4, category: "old-testament" },

  // Poetic Books
  { amharic: "ዳዊት", english: "Psalms", chapters: 150, category: "poetic" },
  { amharic: "ዘምሳሌ", english: "Proverbs", chapters: 31, category: "poetic" },
  { amharic: "ዘመክብብ", english: "Ecclesiastes", chapters: 12, category: "poetic" },
  { amharic: "ዘመኃልየ መኃልይ", english: "Song of Songs", chapters: 8, category: "poetic" },
  { amharic: "ዘኢዮብ", english: "Job", chapters: 42, category: "poetic" },

  // New Testament
  { amharic: "ዘማቴዎስ", english: "Matthew", chapters: 28, category: "new-testament" },
  { amharic: "ዘማርቆስ", english: "Mark", chapters: 16, category: "new-testament" },
  { amharic: "ዘሉቃስ", english: "Luke", chapters: 24, category: "new-testament" },
  { amharic: "ዘዮሐንስ", english: "John", chapters: 21, category: "new-testament" },
  { amharic: "ዘሐዋርያት", english: "Acts", chapters: 28, category: "new-testament" },
  { amharic: "ዘጳውሎስ ወዘሮሜ", english: "Romans", chapters: 16, category: "new-testament" },
]

// Sample Bible content with authentic Amharic verses
const BIBLE_CONTENT: Record<string, BibleChapter> = {
  "ዳዊት-1": {
    book: "ዳዊት",
    chapter: 1,
    verses: [
      {
        number: "1",
        amharicNumber: "፩",
        text: "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
        amharicText: "ብፁዕ ውእቱ ብእሲ ዘኢሖረ በምክር ረሲዓን ወበፍኖተ ኃጥኣን ኢቆመ ወበመንበረ ሰዳዲ ኢነበረ።",
      },
      {
        number: "2",
        amharicNumber: "፪",
        text: "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
        amharicText: "አላ በሕገ እግዚአብሔር ፈቃዱ ወበሕጉ ይሠናይ መዓልተ ወሌሊተ።",
      },
      {
        number: "3",
        amharicNumber: "፫",
        text: "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
        amharicText: "ወይከውን ከመ ዕፅ ዘተተክለ ኀበ ፍልገ ማይ ዘይሁብ ፍሬሁ በጊዜሁ ወቈጽሉ ኢይረግብ ወኵሉ ዘይገብር ይሳዓል።",
      },
      {
        number: "4",
        amharicNumber: "፬",
        text: "The ungodly are not so: but are like the chaff which the wind driveth away.",
        amharicText: "አኮ ከማሁ ረሲዓን አላ ከመ ቈጽል ዘያነሥኦ ነፋስ።",
      },
      {
        number: "5",
        amharicNumber: "፭",
        text: "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
        amharicText: "በእንተዝ ኢይቀውሙ ረሲዓን በፍትሕ ወኃጥኣንኒ በምክረ ጻድቃን።",
      },
      {
        number: "6",
        amharicNumber: "፮",
        text: "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.",
        amharicText: "እስመ ያአምር እግዚአብሔር ፍኖተ ጻድቃን ወፍኖተ ረሲዓን ትትሐጐል።",
      },
    ],
  },
  "ዳዊት-23": {
    book: "ዳዊት",
    chapter: 23,
    verses: [
      {
        number: "1",
        amharicNumber: "፩",
        text: "The LORD is my shepherd; I shall not want.",
        amharicText: "እግዚአብሔር ይሬዕየኒ ወኢይሴስየኒ።",
      },
      {
        number: "2",
        amharicNumber: "፪",
        text: "He maketh me to lie down in green pastures: he leadeth me beside the still waters.",
        amharicText: "በመርዓ ሐመልማል አንበረኒ ወኀበ ማይ ዘሰላም መርሐኒ።",
      },
      {
        number: "3",
        amharicNumber: "፫",
        text: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
        amharicText: "ነፍስየ አግብአ ወመርሐኒ በፍኖተ ጽድቅ በእንተ ስሙ።",
      },
      {
        number: "4",
        amharicNumber: "፬",
        text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
        amharicText: "ወእመሂ ሖርኩ በማእከለ ጽላለ ሞት ኢፈርሁ እኩየ እስመ አንተ ምስሌየ ወመንዶ ወዘንቦትከ እሙንቱ ኣስተፈሥሑኒ።",
      },
    ],
  },
  "ዘማቴዎስ-5": {
    book: "ዘማቴዎስ",
    chapter: 5,
    verses: [
      {
        number: "1",
        amharicNumber: "፩",
        text: "And seeing the multitudes, he went up into a mountain: and when he was set, his disciples came unto him:",
        amharicText: "ወሶበ ርእየ ሕዝበ ዐርገ ደብረ ወሶበ ነበረ መጽኡ ኀቤሁ አርዳኢሁ።",
      },
      {
        number: "2",
        amharicNumber: "፪",
        text: "And he opened his mouth, and taught them, saying,",
        amharicText: "ወአርኅወ አፉሁ ወሰበከ ሎሙ እንዘ ይብል።",
      },
      {
        number: "3",
        amharicNumber: "፫",
        text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
        amharicText: "ብፁዓን እሙንቱ ነዳያን በመንፈስ እስመ ሎሙ ይእቲ መንግሥተ ሰማያት።",
      },
      {
        number: "4",
        amharicNumber: "፬",
        text: "Blessed are they that mourn: for they shall be comforted.",
        amharicText: "ብፁዓን እሙንቱ ዘይበክዩ እስመ እሙንቱ ይትፈሥሑ።",
      },
    ],
  },
  "ዘዮሐንስ-3": {
    book: "ዘዮሐንስ",
    chapter: 3,
    verses: [
      {
        number: "16",
        amharicNumber: "፲፮",
        text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
        amharicText: "እስመ ከመዝ አፍቀረ እግዚአብሔር ዓለመ እስከ ወሀበ ወልዶ ዘአሐደ ከመ ኵሉ ዘያአምን ቦቱ ኢይሙት አላ ይኩኖ ሎቱ ሕይወት ዘለዓለም።",
      },
    ],
  },
}

// Utility functions for Bible content management
export class BibleContentManager {
  static getBook(bookName: string): BibleBook | undefined {
    return BIBLE_BOOKS.find((book) => book.amharic === bookName || book.english === bookName)
  }

  static getChapter(bookName: string, chapterNumber: number): BibleChapter | null {
    const key = `${bookName}-${chapterNumber}`
    return BIBLE_CONTENT[key] || null
  }

  static getBooksByCategory(category: BibleBook["category"]): BibleBook[] {
    return BIBLE_BOOKS.filter((book) => book.category === category)
  }

  static getAllBooks(): BibleBook[] {
    return BIBLE_BOOKS
  }

  static searchVerses(query: string): Array<{
    book: string
    chapter: number
    verse: BibleVerse
  }> {
    const results: Array<{
      book: string
      chapter: number
      verse: BibleVerse
    }> = []

    Object.values(BIBLE_CONTENT).forEach((chapter) => {
      chapter.verses.forEach((verse) => {
        if (
          verse.text.toLowerCase().includes(query.toLowerCase()) ||
          verse.amharicText?.includes(query) ||
          verse.amharicNumber.includes(query)
        ) {
          results.push({
            book: chapter.book,
            chapter: chapter.chapter,
            verse,
          })
        }
      })
    })

    return results
  }

  static parseChapterString(chapterString: string): { book: string; chapter: number } {
    const match = chapterString.match(/^(.+)$$(\d+)$$$/)
    if (match) {
      return { book: match[1], chapter: Number.parseInt(match[2]) }
    }
    return { book: "ዳዊት", chapter: 1 }
  }

  static formatChapterString(book: string, chapter: number): string {
    return `${book}(${chapter})`
  }

  // Generate placeholder content for chapters that don't have content yet
  static generatePlaceholderChapter(bookName: string, chapterNumber: number): BibleChapter {
    const book = this.getBook(bookName)
    const verseCount = Math.floor(Math.random() * 20) + 5 // Random 5-25 verses

    const verses: BibleVerse[] = Array.from({ length: verseCount }, (_, i) => ({
      number: (i + 1).toString(),
      amharicNumber: this.numberToAmharic(i + 1),
      text: `This is verse ${i + 1} of ${bookName} chapter ${chapterNumber}. Content will be added soon.`,
      amharicText: `ዝንቱ ቃል ${this.numberToAmharic(i + 1)} ዘ${bookName} ምዕራፍ ${chapterNumber}። ጽሑፍ በቅርቡ ይጨመራል።`,
    }))

    return {
      book: bookName,
      chapter: chapterNumber,
      verses,
    }
  }

  private static numberToAmharic(num: number): string {
    const amharicNumbers = ["፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱", "፲"]
    if (num <= 10) return amharicNumbers[num - 1]
    if (num === 16) return "፲፮"
    return num.toString()
  }
}
