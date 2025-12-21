import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, Zap, Users, Twitter } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Curated Content",
      description:
        "Only high quality playlists that actually teach, not random long videos or clickbait.",
    },
    {
      icon: Target,
      title: "Structured Learning",
      description:
        "Everything is organized by topic so you can follow a clear learning path.",
    },
    {
      icon: Zap,
      title: "Always Free",
      description:
        "All resources are free YouTube playlists with no subscriptions or hidden costs.",
    },
    {
      icon: Users,
      title: "Community Powered",
      description:
        "Playlists are added and improved continuously based on learner feedback.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-20 text-center animate-fade-in-up">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awesome YouTube Playlists
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection of the best free YouTube playlists to help you
            learn faster, smarter, and without distractions
          </p>
        </div>

        <Card className="mb-20 animate-fade-in-up shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Why this platform exists</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              The internet has endless learning content, but finding the right
              playlists takes time and effort. Awesome YouTube Playlists solves
              this by collecting only the best structured playlists across tech,
              business, design, and personal growth
            </p>
            <p>
              Instead of jumping between random videos, you get organized
              learning resources that help you build real skills step by step
            </p>
            <p>
              Whether you are a beginner or already experienced, this platform
              helps you save time and focus purely on learning
            </p>
          </CardContent>
        </Card>

        <div className="mb-24 grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group animate-fade-in-up transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-3 inline-flex rounded-xl bg-accent/10 p-3 w-fit group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-in-up shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <p className="text-base leading-relaxed">
              Hi, I am the creator of Awesome YouTube Playlists. I actively
              curate and share learning resources, roadmaps, and tools to help
              students and professionals grow in tech and beyond
            </p>
            <p className="text-base leading-relaxed">
              I believe consistent learning and sharing valuable resources can
              change careers. This platform is an extension of that belief
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://x.com/AvinashSingh_20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
                Follow me on X
              </a>
              <span className="text-sm">
                I regularly share playlists, learning tips, and career insights
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
