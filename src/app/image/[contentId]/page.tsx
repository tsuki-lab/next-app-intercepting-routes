import { ImageFrame } from "@/components/ImageFrame";
import { microcms } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

type ImageDetailPageProps = {
  params: {
    contentId: string;
  };
};

const ImageDetailPage = async ({ params }: ImageDetailPageProps) => {
  const content = await microcms.getListDetail({
    endpoint: "viejr3qf",
    contentId: params.contentId,
    queries: {
      fields: ["image", "revisedAt", "title", "magicWord"],
    },
  });
  const revisedDate = new Date(content.revisedAt!);
  return (
    <main className="pb-16">
      <div className="lg:flex justify-between lg:max-w-fit mx-auto px-4">
        <div className="lg:px-4 py-2 lg:min-w-[380px] lg:max-w-md">
          <h1 className="text-xl font-bold">{content.title}</h1>
          <div className="lg:px-0 md:px-2">
            <time className="text-xs">
              {revisedDate.getFullYear()}/{revisedDate.getMonth() + 1}/
              {revisedDate.getDate()}
            </time>
            <h2 className="font-bold mb-2 mt-4">Magic Word</h2>
            <div className="bg-gray-100 rounded py-4 px-2 text-sm border border-gray-200">
              <p>{content.magicWord}</p>
            </div>
          </div>
        </div>
        <ImageFrame
          src={content.image.url}
          alt={content.image.url}
          priority
          className="lg:min-h-[calc(100svh-6rem)] md:aspect-square aspect-[9/16] lg:aspect-[9/16]"
        />
      </div>

      <Link
        href="/"
        className="mt-8 mx-auto px-4 py-1 rounded bg-slate-400 hover:bg-stale-600 block text-white font-bold w-fit"
      >
        back to top
      </Link>
    </main>
  );
};

export default ImageDetailPage;
