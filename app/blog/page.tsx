import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { blogPosts } from "@/lib/data";

const categories = ["All", "Technology", "Development", "Security", "E-commerce", "Design"];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our <span className="text-green-500">Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Insights, tutorials, and updates from our team of experts
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-black/40 border-green-500/20 overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge
                    className="absolute top-4 left-4 bg-green-500 hover:bg-green-600"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white font-medium">{post.author.name}</p>
                      <p className="text-gray-400 text-sm">{post.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-black/40 border-green-500/20 overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <Badge
                    className="absolute top-4 left-4 bg-green-500 hover:bg-green-600"
                    variant="secondary"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white text-sm font-medium">{post.author.name}</p>
                      <p className="text-gray-400 text-xs">{post.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-green-500/10 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <div className="absolute inset-0 hero-gradient" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stay Updated with Our Newsletter
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Get the latest insights, tutorials, and updates delivered directly to your inbox.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-md bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
                />
                <Button className="bg-green-500 hover:bg-green-600 text-black whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}