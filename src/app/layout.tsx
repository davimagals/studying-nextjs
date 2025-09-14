export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>HEADER</header>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
