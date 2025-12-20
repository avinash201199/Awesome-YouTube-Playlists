"use client"

import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitPullRequest, FileText, CheckCircle2 } from "lucide-react"

export default function ContributePage() {
  const steps = [
    {
      icon: Github,
      title: "Fork the Repository",
      description: "Start by forking the Awesome YouTube Playlists repository on GitHub to your account.",
    },
    {
      icon: FileText,
      title: "Add Your Playlist",
      description: "Add your playlist details including title, URL, category, and description to the list.",
    },
    {
      icon: GitPullRequest,
      title: "Submit a Pull Request",
      description: "Create a pull request with your changes. Our team will review and merge it.",
    },
    {
      icon: CheckCircle2,
      title: "Get Featured",
      description: "Once approved, your playlist will be featured on the website for everyone to discover!",
    },
  ]

  const guidelines = [
    "Ensure the playlist is publicly accessible on YouTube",
    "The playlist should contain at least 5 high-quality videos",
    "Provide a clear, descriptive title and accurate category",
    "Make sure the content is educational and valuable",
    "Check that the playlist isn't already listed",
    "Follow the existing format in the repository",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contribute a Playlist</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Help us grow the collection by adding valuable YouTube playlists
          </p>
        </div>

        <Card className="mb-12 border-accent/50 bg-accent/5 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <Github className="h-12 w-12 text-accent" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Contribute on GitHub</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit our GitHub repository to add your playlist and help grow this collection.
                </p>
                <Button asChild size="lg">
                  <a
                    href="https://github.com/avinash201199/Awesome-YouTube-Playlists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit GitHub Repository →
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Contribute</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-accent/10 p-3 w-fit">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution Guidelines */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contribution Guidelines</h2>
          <Card className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{guideline}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  By contributing, you agree to the project's license and code of conduct. Thank you for helping make
                  education accessible to everyone!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
