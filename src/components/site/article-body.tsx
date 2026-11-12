import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StickyToc } from "@/components/site/sticky-toc";
import { type ContentBlock } from "@/lib/site";
import { cn, slugify, stripHtml } from "@/lib/utils";

type ProseContentProps = {
  blocks: ContentBlock[];
  images?: { src: string; alt: string }[];
  related?: { title: string; href: string; excerpt: string }[];
  showToc?: boolean;
};

export function ArticleBody({
  blocks,
  images = [],
  related = [],
  showToc = true,
}: ProseContentProps) {
  const headings = blocks
    .filter((block) => block.type === "h2" || block.type === "h3")
    .map((block) => ({
      id: slugify("html" in block ? block.html : ""),
      label: stripHtml("html" in block ? block.html : ""),
      level: block.type,
    }))
    .filter((heading) => heading.label.length > 0);

  return (
    <section className="relative bg-paper">
      <div
        className={cn(
          "shell grid gap-14 py-16 md:py-20 lg:gap-20 lg:py-24",
          showToc && headings.length > 0
            ? "lg:grid-cols-[minmax(0,1fr)_18.5rem]"
            : "lg:grid-cols-1",
        )}
      >
        <div className="min-w-0">
          <div className="prose-polished max-w-[44rem]">
            {blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>

          {images.length > 0 ? <ImageGallery images={images} /> : null}
          {related.length > 0 ? <RelatedLinks related={related} /> : null}
        </div>

        {showToc && headings.length > 0 ? (
          <aside className="order-first lg:order-last">
            <StickyToc headings={headings} />
          </aside>
        ) : null}
      </div>
    </section>
  );
}

export function ProseBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-polished max-w-[44rem]">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={slugify(block.html)} dangerouslySetInnerHTML={{ __html: block.html }} />
      );
    case "h3":
      return (
        <h3 id={slugify(block.html)} dangerouslySetInnerHTML={{ __html: block.html }} />
      );
    case "h4":
      return (
        <h4 id={slugify(block.html)} dangerouslySetInnerHTML={{ __html: block.html }} />
      );
    case "p":
      return <p dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "quote":
      return <blockquote dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "ul":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      );
    default:
      return null;
  }
}

function ImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="mt-16 border-t border-ink/10 pt-10">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/70">
        A closer look
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={image.src}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-ink/10 bg-cream",
              index === 0 ? "sm:col-span-2" : "",
            )}
          >
            <div className={index === 0 ? "relative aspect-[16/9]" : "relative aspect-[4/3]"}>
              <Image
                src={image.src}
                alt={image.alt || "Polished Dental treatment detail"}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 720px" : "(max-width: 768px) 100vw, 350px"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            {image.alt ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent px-4 pb-3 pt-10 text-[0.68rem] text-paper/80">
                {image.alt}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

function RelatedLinks({
  related,
}: {
  related: { title: string; href: string; excerpt: string }[];
}) {
  return (
    <div className="mt-16 border-t border-ink/10 pt-10">
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/70">
        Further reading
      </p>
      <div className="mt-6 grid gap-3">
        {related.map((article) => {
          const external = article.href.startsWith("http");
          return external ? (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/60 p-5 transition-all hover:border-ink/25 hover:bg-bone"
            >
              <span>
                <span className="block font-display text-xl leading-tight text-ink">
                  {article.title}
                </span>
                <span className="mt-1.5 block text-[0.78rem] leading-relaxed text-ink/70 line-clamp-2">
                  {article.excerpt}
                </span>
              </span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <Link
              key={article.href}
              href={article.href}
              className="group flex items-start justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/60 p-5 transition-all hover:border-ink/25 hover:bg-bone"
            >
              <span>
                <span className="block font-display text-xl leading-tight text-ink">
                  {article.title}
                </span>
                <span className="mt-1.5 block text-[0.78rem] leading-relaxed text-ink/70 line-clamp-2">
                  {article.excerpt}
                </span>
              </span>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-ink/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
