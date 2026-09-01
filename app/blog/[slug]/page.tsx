import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { blogPosts } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowLeft, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Locra AI`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `https://locra.app/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 bg-app">
      <Container size="md">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/45 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-bold mb-4 border border-accent/25">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-white/65 mt-4 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10 text-xs text-white/45">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 overflow-hidden relative">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <span className="font-bold text-white block">
                  {post.author.name}
                </span>
                <span className="text-white/45">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span>•</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <article className="max-w-none text-white/75 text-base sm:text-lg leading-relaxed space-y-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-white/75 [&_strong]:text-white">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        </article>

        {/* Post Footer Callout */}
        <div className="mt-14 p-8 rounded-3xl glass-strong text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              Try it yourself
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              Ready to turn your saved places into a real trip?
            </h4>
            <p className="text-xs text-white/45 mt-1">
              Download Locra AI on iOS and Android to import Reels and build your itinerary.
            </p>
          </div>
          <Link
            href="/#download-app"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-soft to-accent text-[#1A0F02] px-5 py-3 text-sm font-bold shrink-0 transition-all accent-glow hover:brightness-110"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Locra Free</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
