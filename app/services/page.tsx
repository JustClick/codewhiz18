import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

const features = {
  "Web Development": [
    "Custom website development",
    "E-commerce solutions",
    "Progressive Web Apps (PWA)",
    "Website maintenance & support",
    "Performance optimization",
    "SEO implementation",
  ],
  "App Development": [
    "Native iOS & Android apps",
    "Cross-platform development",
    "App maintenance & updates",
    "UI/UX design",
    "App store optimization",
    "Push notification systems",
  ],
  "Software Solutions": [
    "Custom software development",
    "Enterprise solutions",
    "Legacy system modernization",
    "API development & integration",
    "Database design",
    "Cloud migration",
  ],
  "Restaurant Management": [
    "POS system integration",
    "Online ordering platform",
    "Table reservation system",
    "Inventory management",
    "Staff scheduling",
    "Analytics & reporting",
  ],
  "Cloud Infrastructure": [
    "Cloud architecture design",
    "Migration services",
    "Performance optimization",
    "Security implementation",
    "Monitoring & maintenance",
    "Disaster recovery",
  ],
  "Cybersecurity": [
    "Security audits",
    "Penetration testing",
    "Compliance consulting",
    "Security training",
    "Incident response",
    "Security monitoring",
  ],
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive digital solutions tailored to your business needs. From web development to cybersecurity, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const serviceFeatures = features[service.name as keyof typeof features] || [];

              return (
                <Card key={service.name} className="bg-black/40 border-green-500/20 overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <Icon className="h-6 w-6 text-green-500" />
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    {serviceFeatures.length > 0 && (
                      <div className="space-y-3">
                        {serviceFeatures.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
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
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Let's discuss how our services can help you achieve your business goals. Get in touch for a free consultation.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="bg-green-500 hover:bg-green-600 text-black" size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" size="lg" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}