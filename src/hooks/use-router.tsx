import { useTransition } from "react";
import { useRouter as useNextRouter } from "next/navigation";

// TODO: use View Transition API

/**
 * @deprecated
 */
export const useRouter = () => {
  const [, startTransition] = useTransition();
  const router = useNextRouter();

  function safeViewTransition(fn: (...args: any) => any) {
    if ((document as any).startViewTransition !== undefined) {
      (document as any).startViewTransition(fn);
    } else {
      startTransition(fn);
    }
  }

  return {
    ...router,
    back: () => {
      safeViewTransition(() => router.back());
    },
    forward: () => {
      safeViewTransition(() => router.forward());
    },
    push: <T extends string>(...args: Parameters<typeof router.push<T>>) => {
      safeViewTransition(() => router.push(...args));
    },
    replace: <T extends string>(
      ...args: Parameters<typeof router.replace<T>>
    ) => {
      safeViewTransition(() => router.replace(...args));
    },
  };
};
