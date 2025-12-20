"use client"

import { use, useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { PlaylistCard } from "@/components/playlist-card"
import { playlists } from "@/lib/playlists"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params)
  const category = decodeURIComponent(resolvedParams.slug)
  const [searchQuery, setSearchQuery] = useState("")

  const categoryPlaylists = useMemo(() => {
    return playlists.filter(
      (playlist) => playlist.category === category && playlist.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [category, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/categories">← Back to Categories</Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{category}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {categoryPlaylists.length} {categoryPlaylists.length === 1 ? "playlist" : "playlists"} available
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryPlaylists.length > 0 ? (
            categoryPlaylists.map((playlist, index) => (
              <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-lg text-muted-foreground">No playlists found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
