import Image from 'next/image'
import Link from 'next/link'

const projectPreviews = [
  {
    href: '/selling',
    title: 'Selling Exploration',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Selling%20Exploration-tQaYUx9USOQ7yRvqr8GKvhcWUTq7pp.jpeg',
  },
  {
    href: '/web-apps',
    title: 'Web Apps',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web%20Apps-CwL92w0zAoVnKPsilTSC0ed7zgMxq9.jpg',
  },
  {
    href: '/visual',
    title: 'Visual Work',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Visual%20Work-s5A2PLMf4pg8Nmq5Y03Tc2PLdfNw93.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="max-w-[85%] space-y-6">
          <div className="relative aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/ji-portrait.jpeg"
              alt="Ji Wang portrait"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
          <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/drawing 1.JPG"
              alt="Self-portrait drawing by Ji Wang"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
            Hi, I&apos;m Ji.
          </h1>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>I spent three years in corporate banking and learned a lot about business, and about myself: I do my best work when I believe in what I&apos;m offering, and when I can build real, honest relationships with the people on both sides of the table.</p>
            <p>Alongside my job, I ran weekend experiments. I built a stall on a footbridge from a sun umbrella and sold flowers there with a rock-paper-scissors game built into the price. I also started a small premium-nuts business and learned that the best work is being a bridge, connecting people who want something with the makers who can actually offer it.</p>
            <p>Over the past year, I&apos;ve kept exploring. I made a stop-motion film about a piece of stinky tofu that crosses a mountain, built three web apps, and volunteered with at-risk children. Each was a different way of saying something, or reaching someone. The thread is that I feel most alive when I&apos;m finding new forms to express what I see and to connect with people.</p>
            <p>That&apos;s the kind of work I want to do for a company. To understand the real need behind a customer&apos;s request, and to help them find what&apos;s actually right for them. I believe results come from trust, and trust comes from showing up honestly.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/jiwang-tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              LinkedIn &rarr;
            </a>
            <a href="/Ji-Wang-CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              View my CV &rarr;
            </a>
          </div>

          <div className="mt-10 text-[14px] text-muted-foreground leading-loose space-y-1">
            <p>Currently: <span className="italic">looking for a customer success, BD, or partnerships role, ideally in Singapore</span></p>
            <p>Recently: <span className="italic">getting better at cooking for myself</span></p>
            <p>Drawing: <span className="italic">small things in pencil</span></p>
            <p>Reading: <span className="italic">The Silence of the Lambs</span></p>
          </div>
        </div>
      </section>

      <section className="mt-32 md:mt-40">
        <div className="grid md:grid-cols-3 gap-8">
          {projectPreviews.map((project) => (
            <Link key={project.href} href={project.href} className="group block">
              <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden mb-4">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}