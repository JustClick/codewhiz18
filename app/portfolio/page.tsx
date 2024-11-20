import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Bistro Bliss",
    category: "Restaurant Management",
    description: "All-in-one restaurant management platform including POS, online ordering, and table reservation systems. Increased operational efficiency by 45% for client.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2340&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    metrics: ["45% efficiency increase", "2.5x revenue growth", "98% customer satisfaction"],
    link: "#"
  },
  {
    name: "TrendyMart",
    category: "E-commerce",
    description: "High-performing e-commerce platform with advanced inventory management and seamless payment processing integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    metrics: ["300% increase in sales", "65% better conversion", "2M+ products listed"],
    link: "#"
  },
  {
    name: "HealthWave",
    category: "Healthcare",
    description: "Mobile app for booking medical consultations, managing health records, and tracking medications.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2340&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "Node.js"],
    metrics: ["50k+ active users", "4.8 App Store rating", "98% booking rate"],
    link: "#"
  },
  {
    name: "EduTech Pro",
    category: "Education",
    description: "Comprehensive learning management system with live classes, assessments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2340&auto=format&fit=crop",
    tags: ["Vue.js", "Python", "Django", "WebRTC"],
    metrics: ["100k+ students", "95% completion rate", "4.9/5 rating"],
    link: "#"
  },
  {
    name: "SmartHome Hub",
    category: "IoT",
    description: "IoT platform for smart home device management with real-time monitoring and automation.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2340&auto=format&fit=crop",
    tags: ["React", "Node.js", "MQTT", "WebSocket"],
    metrics: ["1M+ devices connected", "40% energy savings", "99.9% uptime"],
    link: "#"
  },
  {
    name: "FinTrack Pro",
    category: "Finance",
    description: "Financial management platform with AI-powered insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Angular", "Python", "TensorFlow", "PostgreSQL"],
    metrics: ["$2B+ processed", "30% cost reduction", "5x faster reporting"],
    link: "#"
  }
];

const categories = ["All", "Restaurant", "E-commerce", "Healthcare", "Education", "IoT", "Finance"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our <span className="text-green-500">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-green-500/20 text-white hover:bg-green-500/10 hover:border-green-500/40"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="bg-black/40 border-green-500/20 overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-green-500 text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold text-white mt-1">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-green-500/10 rounded-lg p-3 text-center"
                      >
                        <p className="text-green-500 text-sm font-medium">{metric}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/5 text-white/80 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black" asChild>
                    <Link href={project.link}>
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-green-500/10 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <div className="absolute inset-0 hero-gradient" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Let's turn your vision into reality. Our team is ready to help you create your next successful project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="bg-green-500 hover:bg-green-600 text-black" size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" size="lg" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}