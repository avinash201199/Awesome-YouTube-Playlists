import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, Star, Github, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DonatePage() {
  const ways = [
    {
      icon: Github,
      title: "Star on GitHub",
      description: "Give us a star on GitHub to help increase visibility and support the project.",
      action: "Star on GitHub",
      href: "https://github.com/avinash201199/Awesome-YouTube-Playlists",
      variant: "default" as const,
    },
    {
      icon: Coffee,
      title: "Buy Me a Coffee",
      description: "Support the maintainer with a one-time contribution to keep the project going.",
      action: "Coming Soon",
      href: "#",
      variant: "outline" as const,
    },
    {
      icon: Heart,
      title: "Sponsor on GitHub",
      description: "Become a monthly sponsor and get your name featured in the project README.",
      action: "Coming Soon",
      href: "#",
      variant: "outline" as const,
    },
  ]

  const benefits = [
    "Keeps the project maintained and updated",
    "Supports development of new features",
    "Helps cover hosting and infrastructure costs",
    "Enables faster review of community contributions",
    "Motivates continued curation of quality content",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <div className="inline-flex rounded-full bg-accent/10 p-4 mb-4">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Support the Project</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Help us keep this resource free and accessible for everyone
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <CardContent className="pt-6">
            <p className="text-base leading-relaxed text-center">
              Awesome YouTube Playlists is a <strong>free and open-source</strong> project maintained by passionate
              developers and educators. Your support helps us continue curating high-quality educational content and
              keeping this resource available to learners worldwide.
            </p>
          </CardContent>
        </Card>

        {/* Ways to Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Ways to Support</h2>
          <div className="grid gap-6">
            {ways.map((way, index) => (
              <Card
                key={way.title}
                className="animate-fade-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-lg bg-accent/10 p-3">
                      <way.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{way.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">{way.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant={way.variant} className="w-full" disabled={way.href === "#"}>
                    <a href={way.href} target="_blank" rel="noopener noreferrer">
                      {way.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Your Support Does */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">What Your Support Does</h2>
          <Card className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Support */}
        <Card className="border-accent/50 bg-accent/5 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-8 w-8 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Can't Donate?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              No problem! You can still help by starring the project on GitHub, sharing it with others, or contributing
              playlists to grow the collection.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild variant="outline">
                <Link href="/contribute">Contribute Playlist</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://github.com/avinash201199/Awesome-YouTube-Playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share Project
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Thank You */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "700ms" }}>
          <p className="text-muted-foreground">
            Thank you for being part of our community and supporting open education! 💜
          </p>
        </div>
      </div>
    </div>
  )
}
