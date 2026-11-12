"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { type BlogPost } from "@/lib/site";
import { cn, formatDate } from "@/lib/utils";

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );

  const filtered = useMemo(() => {
    const term = deferredQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.summary.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [posts, deferredQuery, category]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-ink/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink/70" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the journal…"
            aria-label="Search articles"
            className="h-11 w-full rounded-full border border-ink/15 bg-paper pl-11 pr-4 text-sm text-ink placeholder:text-ink/70 focus-visible:border-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/20"
          />
        </div>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.14em] transition-all",
                category === item
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 text-ink/70 hover:border-ink/35 hover:text-ink",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/70">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>

      {filtered.length ? (
        <div className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-ink/15 p-10 text-center">
          <p className="font-display text-2xl text-ink">Nothing here yet.</p>
          <p className="mt-2 text-sm text-ink/70">
            Try a different search or topic — or browse every article.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-5 rounded-full border border-ink/20 px-4 py-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/office/polished-dental-blog/${post.slug}`}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
        <Image
          src={post.hero}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-ink/70 backdrop-blur-sm">
          {post.category}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/70">
        <span>{formatDate(post.date)}</span>
        <span className="size-0.5 rounded-full bg-ink/30" />
        <span>{post.read}</span>
      </div>
      <h3 className="mt-2.5 font-display text-2xl leading-[1.1] tracking-[-0.025em] text-ink transition-colors group-hover:text-pine">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-[0.82rem] leading-relaxed text-ink/70">
        {post.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.54rem] uppercase tracking-[0.16em] text-clay-deep">
        Read the note
        <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
