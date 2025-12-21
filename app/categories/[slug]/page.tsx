import { Navbar } from "@/components/navbar"
import { playlists, categories } from "@/lib/playlists"
import { PlaylistCard } from "@/components/playlist-card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")

export function generateStaticParams() {
  return categories
    .filter((cat) => cat !== "All")
    .map((category) => ({
      slug: toSlug(category),
    }))
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string }
}) {
  const matchedCategory = categories.find(
    (category) => toSlug(category) === params.slug
  )

  if (!matchedCategory) {
    notFound()
  }

  const category = matchedCategory

  const categoryPlaylists = playlists.filter(
    (playlist) => playlist.category === category
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/categories"
            className="hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">
            {category}
          </span>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {category}
          </h1>
          <p className="text-lg text-muted-foreground">
            {categoryPlaylists.length}{" "}
            {categoryPlaylists.length === 1 ? "playlist" : "playlists"} in this
            category
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryPlaylists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              index={index}
            />
          ))}
        </div>

        {categoryPlaylists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No playlists found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
