"use client";

import { usePathname } from "next/navigation";

export default function ReviewNotFound() {
  const pathname = usePathname();

  return <h1>404 Review not found {pathname}</h1>;
}
