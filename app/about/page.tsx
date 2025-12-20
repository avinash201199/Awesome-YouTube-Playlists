import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, Zap, Users } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Curated Content",
      description: "Every playlist is handpicked to ensure high-quality educational content across diverse topics.",
    },
    {
      icon: Target,
      title: "Organized Learning",
      description: "Playlists are categorized and tagged to help you find exactly what you need to learn.",
    },
    {
      icon: Zap,
      title: "Always Free",
      description: "All resources are completely free YouTube playlists - no subscriptions, no paywalls.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by learners, for learners. We're constantly adding new playlists based on demand.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Awesome YouTube Playlists</h1>
          <p className="mt-4 text-lg text-muted-foreground">Your gateway to free, high-quality educational content</p>
        </div>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none mb-12 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-pretty text-base leading-relaxed">
                Awesome YouTube Playlists is a comprehensive, open-source database of curated YouTube playlists covering
                a wide range of topics from programming and artificial intelligence to business, design, and personal
                development.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed">
                We believe that education should be accessible to everyone. That's why we've gathered over 150 free
                YouTube playlists to help you master new skills, advance your career, or explore new interests.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed">
                Whether you're a beginner starting your learning journey or an experienced professional looking to
                expand your knowledge, you'll find valuable resources organized and ready for you. This project is
                maintained by the community and contributions are always welcome!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-2 inline-flex rounded-lg bg-accent/10 p-3 w-fit">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
