import Image from 'next/image'
import Link from 'next/link'

const smallerProjects = [
  {
    name: 'Birthday Gift App',
    description: 'A personalized birthday greeting experience',
    image: '/birthday gift.jpeg',
    href: '/web-apps/birthday-gift',
  },
  {
    name: 'Kana Self-Test Tool',
    description: 'Practice Japanese hiragana and katakana',
    image: '/kana.jpeg',
    href: '/web-apps/kana-tool',
  },
]

export default function WebAppsPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-16 md:mb-24">
        Web Apps
      </h1>

      {/* Featured Project */}
      <section className="mb-20 md:mb-28">
        <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden mb-8">
          <Image
            src="/heartguess.jpeg"
            alt="Featured web app project"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Heartguess Game
          </h2>
          <p className="italic text-muted-foreground mb-6">
            A two-player browser game about reading your friend's mind, and trying not to get poisoned.
          </p>
          <p className="text-foreground leading-relaxed mb-8">
            Two modes: blueberries with LEGO characters, or poop with dogs. Each player secretly poisons one item. Then you take turns eating, hoping you don't pick the wrong one. The whole game is about reading patterns. I built it for the small in-between moments with friends.
          </p>
          <Link
            href="/web-apps/multiplayer-game"
            className="text-primary hover:underline transition-colors"
          >
            View details &rarr;
          </Link>
        </div>
      </section>

      {/* Smaller Projects */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {smallerProjects.map((project) => (
            <article key={project.name} className="group">
              <div className="relative aspect-[4/3] bg-secondary rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-3">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="text-primary hover:underline transition-colors text-sm"
              >
                View details &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
