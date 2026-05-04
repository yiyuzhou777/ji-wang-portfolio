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
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Left Column - Image */}
        <div className="max-w-[85%]">
          <div className="relative aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JI%27s%20portrait2-LvRmk9PSerVXz4vrACqGIztRUag1NG.jpeg"
              alt="Ji Wang portrait"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
        </div>

        {/* Right Column - Introduction */}
        <div className="md:pt-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
            Hi, I&apos;m Ji.
          </h1>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              I like figuring out how selling works. I&apos;ve run a pop-up using a sun umbrella as a table, sold premium nut gifts to hundreds of people, and tried opening new distribution channels.
            </p>
            <p>
              When I&apos;m not selling, I make things. I build web apps and stop-motion animation.
            </p>
          </div>
          <div className="mt-8 text-[14px] text-muted-foreground leading-loose space-y-1">
            <p>
              Currently: <span className="italic">looking for sales, BD, or customer success roles</span>
            </p>
            <p>
              Recently: <span className="italic">relearning how to cook for myself</span>
            </p>
            <p>
              Drawing: <span className="italic">small things in pencil</span>
            </p>
            <p>
              Reading: <span className="italic">The Silence of the Lambs</span>
            </p>
          </div>
        </div>
      </section>

      {/* Project Previews */}
      <section className="mt-24 md:mt-32">
        <div className="grid md:grid-cols-3 gap-8">
          {projectPreviews.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
