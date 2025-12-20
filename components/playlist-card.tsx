import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, PlayCircle } from "lucide-react"
import type { Playlist } from "@/lib/playlists"
import Link from "next/link"

interface PlaylistCardProps {
  playlist: Playlist
  index?: number
}

export function PlaylistCard({ playlist, index = 0 }: PlaylistCardProps) {
  return (
    <Card
      className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <CardHeader className="space-y-3 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <PlayCircle className="relative h-6 w-6 flex-shrink-0 text-accent transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            {playlist.category}
          </Badge>
        </div>
        <CardTitle className="line-clamp-2 text-lg leading-snug group-hover:text-accent transition-colors duration-300">
          {playlist.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <Link
          href={playlist.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent/80 transition-all duration-300 hover:text-accent hover:gap-3 group/link"
        >
          Watch Playlist
          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
