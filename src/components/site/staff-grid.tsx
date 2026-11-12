"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { staff } from "@/lib/site";
import { cn } from "@/lib/utils";

const groups = ["Everyone", "Dental Hygienists", "Dental Assistants", "Administration"];

export function StaffGrid() {
  const [active, setActive] = useState("Everyone");

  const filtered = useMemo(
    () => (active === "Everyone" ? staff : staff.filter((member) => member.group === active)),
    [active],
  );

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter staff by team">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            role="tab"
            aria-selected={active === group}
            onClick={() => setActive(group)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] transition-all",
              active === group
                ? "border-ink bg-ink text-paper"
                : "border-ink/15 text-ink/70 hover:border-ink/35 hover:text-ink",
            )}
          >
            {group}
            <span className="ml-2 opacity-50">
              {group === "Everyone" ? staff.length : staff.filter((m) => m.group === group).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((member, index) => (
            <motion.article
              layout
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.2) }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Polished Dental`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="mt-3 font-display text-xl leading-none tracking-[-0.02em] text-ink">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.14em] text-ink/70">
                {member.role}
              </p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
