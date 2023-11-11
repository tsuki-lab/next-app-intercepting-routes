"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { Route } from "next";

export const Modal = <L extends string, P extends string>({
  children,
  leavedPathname,
  pathname: modalPathname,
  ...props
}: {
  children: React.ReactNode;
  leavedPathname: Route<L>;
  pathname: Route<P>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpenFlag] = useState(true);
  const onLeave = useCallback(
    (e: MouseEvent | Event) => {
      e.preventDefault();
      router.push(leavedPathname);
      setOpenFlag(false);
    },
    [leavedPathname, router]
  );

  useEffect(() => {
    if (pathname === modalPathname) {
      setOpenFlag(true);
    }
  }, [modalPathname, pathname]);

  return (
    <Dialog.Root defaultOpen open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-modal fixed inset-0 animate-fade-in" />
        <Dialog.Content
          className="animate-fade-in top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-20"
          onEscapeKeyDown={(e) => onLeave(e)}
          onPointerDownOutside={(e) => onLeave(e)}
        >
          <div className="bg-white rounded relative">
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={(e) => onLeave(e)}
                className="z-10 absolute rounded-md p-4 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 top-0 right-0"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Close>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
