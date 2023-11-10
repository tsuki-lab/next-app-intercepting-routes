import { ImageFrame } from "@/components/ImageFrame";
import { microcms } from "@/lib/microcms";
import Link from "next/link";

export default async function Home() {
  const { contents } = await microcms.getAll({
    endpoint: "viejr3qf",
    queries: {
      fields: ["image", "id"],
    },
  });
  return (
    <main className="p-4">
      <ul className="flex gap-4 flex-wrap lg:justify-start justify-center md:max-w-[62rem] mx-auto">
        {contents.map((content) => (
          <li key={content.id}>
            <Link href={`/image/${content.id}`} prefetch>
              <ImageFrame
                src={content.image.url}
                alt={content.image.url}
                className="md:w-80 w-[calc(100svw-2rem)] aspect-[9/16] rounded-lg animate-fade-in-bottom h-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
