"use client";
import { useRouter } from "next/navigation";
import { Route } from "next";
import Link, { LinkProps } from "next/link";

type ViewTransitionLinkProps<T extends string> = {
  href: Route<T>;
} & Omit<LinkProps<T>, "href">;

// TODO: Next.js で View Transition API が使いやすくなることを願う。

/** @deprecated */
export const ViewTransitionLink = <T extends string>(
  props: ViewTransitionLinkProps<T>
) => {
  const router = useRouter();
  return (
    <Link
      {...props}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href);
      }}
    >
      {props.children}
    </Link>
  );
};
