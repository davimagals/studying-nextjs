import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Olá</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  );
}
