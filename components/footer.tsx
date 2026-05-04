import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>JI WANG</span>
          <span>·</span>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact me
          </Link>
          <span>·</span>
          <a
            href="/Ji-Wang-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            View my CV
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            My LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
