"use client"

import Link from "next/link"
import { BookOpen, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BookOpen className="relative h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent transition-all duration-300 group-hover:from-accent group-hover:to-primary">
                Awesome YT Playlists
              </span>
              <span className="block sm:hidden text-xl font-bold text-gradient">AYTP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-1">
              <Link
                href="/"
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:scale-105"
              >
                Categories
              </Link>
              <Link
                href="/contribute"
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:scale-105"
              >
                Contribute
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent hover:scale-105"
              >
                About
              </Link>
              <Button
                asChild
                className="ml-3 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-shadow"
              >
                <Link href="/playlists">Browse All</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition-transform hover:scale-110"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="animate-scale-in border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/contribute"
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contribute
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/playlists" onClick={() => setMobileMenuOpen(false)}>
                Browse All
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
