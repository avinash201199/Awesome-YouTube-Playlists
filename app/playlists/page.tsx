"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { PlaylistCard } from "@/components/playlist-card"
import { SearchFilter } from "@/components/search-filter"
import { playlists, type Category } from "@/lib/playlists"

export default function PlaylistsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredPlaylists = useMemo(() => {
    return playlists.filter((playlist) => {
      const matchesSearch = playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || playlist.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">All Playlists</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse through {playlists.length} curated YouTube playlists
          </p>
        </div>

        <div className="mb-12">
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredPlaylists.length} of {playlists.length} playlists
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlaylists.length > 0 ? (
            filteredPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-lg text-muted-foreground">No playlists found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
