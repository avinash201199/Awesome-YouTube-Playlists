import Link from "next/link"
import { BookOpen, Github, Heart, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <BookOpen className="relative h-7 w-7 text-accent transition-transform group-hover:scale-110" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Awesome YouTube Playlists
              </span>
            </Link>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
              A curated collection of 240+ YouTube playlists covering programming,
              AI, design, business, and more. Free, open source, and community driven.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="https://github.com/avinash201199/Awesome-YouTube-Playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-all hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Quick Links</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-accent">Home</Link></li>
              <li><Link href="/playlists" className="text-muted-foreground hover:text-accent">All Playlists</Link></li>
              <li><Link href="/categories" className="text-muted-foreground hover:text-accent">Categories</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-accent">About</Link></li>
            </ul>
          </div>

          {/* Lets Code */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Lets Code</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="https://www.lets-code.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent"
                >
                  Visit Lets Code
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li><Link href="https://www.lets-code.co.in/startups-list/" target="_blank" className="text-muted-foreground hover:text-accent">Startups List</Link></li>
              <li><Link href="https://www.lets-code.co.in/interview/interviewquestions/" target="_blank" className="text-muted-foreground hover:text-accent">Interview Questions</Link></li>
              <li><Link href="https://www.lets-code.co.in/articles/roadmap/" target="_blank" className="text-muted-foreground hover:text-accent">Career Roadmaps</Link></li>
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Contribute</h3>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/contribute" className="text-muted-foreground hover:text-accent">Add a Playlist</Link></li>
              <li>
                <Link
                  href="https://github.com/avinash201199/Awesome-YouTube-Playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent"
                >
                  GitHub Repository
                </Link>
              </li>
              <li><Link href="/donate" className="text-muted-foreground hover:text-accent">Support Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by the community
          </p>
          <p>© 2025 Awesome YouTube Playlists. Free forever.</p>
        </div>
      </div>
    </footer>
  )
}
