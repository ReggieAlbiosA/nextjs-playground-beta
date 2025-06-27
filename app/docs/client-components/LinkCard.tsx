"use client";

import Link from "next/link";
import { NavItem } from "../types/nav";
import { ArrowRight } from "lucide-react";

interface LinkCardProps {
  item: NavItem;
}

export function LinkCard({ item }: LinkCardProps) {
  return (
    <Link
      href={item.url}
      className="
        block p-6 rounded-lg transition-all duration-300
        bg-card text-card-foreground 
        border border-border 
        hover:bg-accent hover:text-accent-foreground hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <ArrowRight className="w-5 h-5 text-muted-foreground transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
      </div>
      {item.description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {item.description}
        </p>
      )}
    </Link>
  );
}