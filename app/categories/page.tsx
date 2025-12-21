import type React from "react"
import { Navbar } from "@/components/navbar"
import { categories, playlists } from "@/lib/playlists"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Brain,
  Code,
  Cloud,
  Database,
  Palette,
  Briefcase,
  Shield,
  Globe,
  User,
  GraduationCap,
} from "lucide-react"

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "AI & Machine Learning": Brain,
  Programming: Code,
  "Cloud & DevOps": Cloud,
  "Data Science": Database,
  "Design & Creative": Palette,
  "Business & Finance": Briefcase,
  Cybersecurity: Shield,
  "Web Development": Globe,
  "Personal Development": User,
  Academic: GraduationCap,
}

export default function CategoriesPage() {
  const categoryStats = categories
    .filter((cat) => cat !== "All")
    .map((category) => ({
      name: category,
      encoded: encodeURIComponent(category),
      count: playlists.filter((p) => p.category === category).length,
      Icon: categoryIcons[category] || Code,
    }))

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Browse by Category
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore playlists organized by topic
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryStats.map((category, index) => (
            <Link
              key={category.name}
              href={`/categories/${category.encoded}`}
            >
              <Card
                className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <category.Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {category.name}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {category.count}{" "}
                        {category.count === 1 ? "playlist" : "playlists"}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-accent">
                    Explore →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
