import { NinjaCover } from "@/components/NinjaCover";
import Link from "next/link";

export default function OriginalCover() {
  return <main style={{ padding: "32px", maxWidth: "1440px", margin: "0 auto" }}><NinjaCover /><Link href="/#work">← Back to work</Link></main>;
}
