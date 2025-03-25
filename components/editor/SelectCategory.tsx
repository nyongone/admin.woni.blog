"use client";

import React, { useState } from "react";
import ChevronUp from "@/components/icons/ChevronUp";
import ChevronDown from "@/components/icons/ChevronDown";

interface Props {
  name: string;
  categories: CategoryType[];
  initialCategory?: CategoryType;
}

const SelectCategory = ({ name, categories, initialCategory }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selected, setSelected] = useState<CategoryType | null>(
    initialCategory ?? null,
  );

  return (
    <div className="relative w-full">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between text-sm font-normal"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {selected ? (
          <span className="text-zinc-700">{selected.name}</span>
        ) : (
          <span className="text-zinc-500">카테고리 선택</span>
        )}
        {expanded ? (
          <ChevronUp stroke="var(--color-zinc-700)" />
        ) : (
          <ChevronDown stroke="var(--color-zinc-700)" />
        )}
      </button>
      {expanded && (
        <ul className="absolute top-[calc(100%+12px)] w-full rounded-md bg-white shadow-sm">
          {categories.map((category) => (
            <li
              key={category.slug}
              className="flex h-8 w-full items-center justify-start p-2"
            >
              <button
                type="button"
                className="w-full cursor-pointer text-left text-sm text-zinc-700"
                onClick={() => {
                  setSelected(category);
                  setExpanded(false);
                }}
              >
                <span>{category.name} </span>
                <span className="text-xs text-zinc-500">({category.slug})</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <input
        type="hidden"
        name={name}
        defaultValue={initialCategory?.slug ?? selected?.slug ?? undefined}
      />
    </div>
  );
};

export default SelectCategory;
