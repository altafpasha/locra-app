import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { blogPosts } from "@/lib/blog-data";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Guides & Planning Tips | Locra AI Blog",
  description:
    "Discover practical travel guides, Instagram travel inspiration workflows, and tips on building smarter itineraries with Locra AI.",
  alternates: {
    canonical: "https://locra.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 bg-app">
      <Container size="xl">
        <SectionHeader
          badge="Guides & Inspiration"
          badgeVariant="accent"
          title="The Locra Travel Journal"
          description="Actionable advice, itinerary breakdowns, and product tips to help you travel smarter."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl glass-card overflow-hidden card-hover-lift flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs text-white/45 mb-3">
                  <span className="font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-md border border-accent/25">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-white/65 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 bg-white/[0.03] border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="font-medium text-white/70">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-accent flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
