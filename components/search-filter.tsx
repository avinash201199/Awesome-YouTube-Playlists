"use client"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { type Category, categories } from "@/lib/playlists"

interface SearchFilterProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

export function SearchFilter({ searchQuery, onSearchChange, selectedCategory, onCategoryChange }: SearchFilterProps) {
  return (
    <div className="space-y-8">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-accent" />
        <Input
          type="text"
          placeholder="Search playlists by title or category..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-14 text-base border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 focus:border-accent/50 focus:shadow-lg focus:shadow-accent/10"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-semibold text-foreground">Filter by Category</p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer text-sm px-4 py-2 transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "shadow-md shadow-accent/20"
                  : "hover:border-accent/50 hover:bg-accent/5"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
