"use client";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

export const Modal = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-modal fixed inset-0 animate-fade-in" />
        <Dialog.Content
          className="animate-fade-in top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-20"
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            router.back();
          }}
          onPointerDownOutside={(e) => {
            e.preventDefault();
            router.back();
          }}
          onTouchStart={(e) => {
            console.log(e);
          }}
        >
          <div className="bg-white rounded relative">
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
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
