"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { PlaylistCard } from "@/components/playlist-card"
import { SearchFilter } from "@/components/search-filter"
import { playlists, type Category } from "@/lib/playlists"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, TrendingUp, BookOpen, ArrowRight, Zap, Search } from "lucide-react"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const filteredPlaylists = useMemo(() => {
    return playlists.filter((playlist) => {
      const matchesSearch = playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || playlist.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const featuredPlaylists = playlists.slice(0, 6)
  const stats = [
    { label: "Total Playlists", value: playlists.length, icon: BookOpen },
    { label: "Categories", value: "15", icon: TrendingUp },
    { label: "Free Resources", value: "100%", icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              <span>240+ Curated Learning Playlists</span>
            </div>

            <h1
              className="text-balance text-5xl font-bold tracking-tight animate-fade-in-up sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              <span className="text-gradient">Awesome YouTube</span>
              <br />
              <span className="text-foreground">Playlists</span>
            </h1>

            <p
              className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "200ms" }}
            >
              Master programming, AI, design, business and more with carefully curated YouTube playlists. Your journey
              to expertise starts here.
            </p>

            <div
              className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Button size="lg" className="group h-12 px-8 text-base shadow-lg shadow-accent/20" asChild>
                <Link href="#explore">
                  Explore Playlists
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>

          <div className="mt-24 grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group animate-fade-in-up rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-card hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
                  <stat.icon className="h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Featured Collection</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Start Your Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Popular courses handpicked to kickstart your learning adventure
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlaylists.map((playlist, index) => (
            <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="group h-12 px-8 text-base bg-transparent" asChild>
            <Link href="/playlists">
              View All Playlists
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="explore" className="border-t border-border/50 bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Explore All Playlists</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Search and filter through our entire collection of learning resources
            </p>
          </div>

          <div className="mb-12 mx-auto max-w-3xl">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPlaylists.length > 0 ? (
              filteredPlaylists.map((playlist, index) => (
                <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-lg font-medium text-foreground">No playlists found</p>
                <p className="mt-2 text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
