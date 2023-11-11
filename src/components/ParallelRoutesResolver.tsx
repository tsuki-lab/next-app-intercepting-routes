"use client";
import { Route } from "next";
import { usePathname, useRouter } from "next/navigation";

export const ParallelRoutesResolver = () => {
  const router = useRouter();
  const pathname = usePathname() as Route<string>;
  router.replace(pathname);
  return null;
};
