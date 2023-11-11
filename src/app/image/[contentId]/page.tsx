import { ParallelRoutesResolver } from "@/components/ParallelRoutesResolver";
import { default as Page } from "../../page";

export default function ImagePage() {
  return (
    <>
      <Page />
      <ParallelRoutesResolver />
    </>
  );
}
