import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { services, testimonials } from "@/lib/data";
import ScrollIndicator from "@/components/scroll-indicator";
import StatsCounter from "@/components/stats-counter";

const stats = [
  { id: 1, name: "Happy Clients", value: "500+" },
  { id: 2, name: "Projects Completed", value: "1200+" },
  { id: 3, name: "Awards Won", value: "25" },
  { id: 4, name: "Countries Reached", value: "30+" },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero section content remains the same */}
        <div className="absolute inset-0 hero-gradient animate-glow" />
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-green-500/20"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
            Empowering Businesses with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Digital Solutions
            </span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Your Partner for Web Development, Software Innovation, and Digital Excellence
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 border-y border-green-500/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatsCounter key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-black/40">
        {/* Services section content remains the same */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.name}
                    className="service-card bg-black/40 border-green-500/20 overflow-hidden group"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="h-6 w-6 text-green-500" />
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-black/60">
        {/* Testimonials section content remains the same */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hear from the businesses we've helped transform
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <Card className="p-6 bg-black/40 border-green-500/20 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-green-500/20"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.content}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-green-500/10 border-green-500/20 text-white hover:bg-green-500/20" />
            <CarouselNext className="bg-green-500/10 border-green-500/20 text-white hover:bg-green-500/20" />
          </Carousel>
        </div>
      </section>
    </>
  );
}