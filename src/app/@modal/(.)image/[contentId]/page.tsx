import { ImageFrame } from "@/components/ImageFrame";
import { Modal } from "@/components/Modal";
import { microcms } from "@/lib/microcms";

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
      fields: ["image", "title", "magicWord"],
    },
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return (
    <Modal>
      <div className="relative">
        <ImageFrame
          src={content.image.url}
          alt={content.image.url}
          className="md:aspect-square md:w-auto w-[calc(100svw-2rem)] h-[80svh] md:h-[calc(100vmin-4rem)]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gray-700/50 text-gray-200 p-2">
          <h2 className="text-sm mb-2 font-bold">{content.title}</h2>
          <p className="text-xs bg-gray-400/50 p-2 rounded border border-gray-500/10">
            {content.magicWord}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageDetailPage;
