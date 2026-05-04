import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-16 md:mb-24">
        Contact
      </h1>

      <div className="max-w-xl">
        <p className="text-foreground leading-relaxed mb-8">
          I&apos;m always interested in hearing about new opportunities in sales, business
          development, and customer success. Feel free to reach out if you&apos;d like to
          connect.
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="font-serif text-lg text-foreground mb-2">Email</h2>
            <a
              href="mailto:yiyuzhou777@gmail.com"
              className="text-primary hover:underline transition-colors"
            >
              yiyuzhou777@gmail.com
            </a>
          </div>

          <div>
            <h2 className="font-serif text-lg text-foreground mb-2">LinkedIn</h2>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              linkedin.com/in/jiwang
            </a>
          </div>

          <div>
            <h2 className="font-serif text-lg text-foreground mb-2">Resume</h2>
            <a
              href="/Ji-Wang-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              View my CV &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
