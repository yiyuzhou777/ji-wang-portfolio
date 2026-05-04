import Image from 'next/image'

const drawings = [
  { src: '/drawing 1.JPG', alt: 'Drawing 1' },
  { src: '/drawing 2.JPG', alt: 'Drawing 2' },
  { src: '/drawing 3.JPG', alt: 'Drawing 3' },
  { src: '/drawing 4.JPG', alt: 'Drawing 4' },
  { src: '/drawing 5.JPG', alt: 'Drawing 5' },
  { src: '/drawing 6.JPG', alt: 'Drawing 6' },
]

export default function VisualPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-16 md:mb-24">
        Visual Work
      </h1>

      {/* Section 01 - Animation */}
      <section className="relative mb-24 md:mb-32">
        <span className="font-serif text-[120px] md:text-[180px] text-primary/20 leading-none absolute -top-8 md:-top-12 -left-2 md:-left-4 select-none">
          01
        </span>
        <div className="relative pt-16 md:pt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            Animation
          </h2>

          {/* Hero Frame */}
          {/* Animation Grid: Video + 2 Frames */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
            {/* Video - takes left 2 columns and spans 2 rows */}
            <div className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden">
              <video
                src="/animation-stinky-tofu.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>

            {/* Frame 1 - top right */}
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
              <Image
                src="/0animation.jpeg"
                alt="Stop-motion frame: stinky tofu at home"
                fill
                className="object-cover"
              />
            </div>

            {/* Frame 2 - bottom right */}
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
              <Image
                src="/61animation.jpeg"
                alt="Stop-motion frame: tofu among other tofu"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl space-y-4">
            <p className="text-foreground leading-relaxed">
              I wanted to make a story about something ordinary doing something extraordinary. The main character is a small grey square of stinky tofu: humble, plain, and somehow loved.
            </p>
            <p className="text-foreground leading-relaxed">
              One day, this small grey square suddenly remembers a mountain it has never crossed. From then on, no matter what it's doing, the mountain is all it can think about. So it decides to go. And it actually crosses.
            </p>
            <p className="text-foreground leading-relaxed">
              When it returns, nothing looks different. It's still a piece of stinky tofu walking among other pieces of stinky tofu. None of them know what it has done. But the tofu knows. The mountain is now part of it.
            </p>
            <p className="text-foreground leading-relaxed">
              The story is about a kind of transformation that is real but invisible. We all carry things we wish we had done. If we don't do them, we keep wishing. If we do them, the world looks at us the same as before, but we know what's different. The change is not what we look like. It's what we carry inside.
            </p>
            <p className="text-foreground leading-relaxed">
              I made it as a stop-motion: 63 frames, hand-drawn over four days. Each frame slightly different from the last. The medium felt right for the story.
            </p>
            <p className="text-sm italic text-foreground/70 pt-4">
              Music: Blue Hour by 毛一 MaoYi
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 - Drawings */}
      <section className="relative">
        <span className="font-serif text-[120px] md:text-[180px] text-primary/20 leading-none absolute -top-8 md:-top-12 -left-2 md:-left-4 select-none">
          02
        </span>
        <div className="relative pt-16 md:pt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Drawings
          </h2>
          <div className="space-y-4 mb-12">
            <p className="text-foreground leading-relaxed">
              My drawings are intuitive. I usually start from a photo, then deliberately change the scene, the action, or the proportions, adding small symbols that feel like they belong to the person or animal.
            </p>
            <p className="text-foreground leading-relaxed">
              Simple lines, exaggerated faces, sometimes features in the wrong places. I'm trying to catch the feeling of someone more than what they actually look like.
            </p>
            <p className="text-foreground leading-relaxed">
              Loose strokes, unusual angles. I'm always reaching for something between humor and innocence.
            </p>
          </div>

          {/* Drawings Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {drawings.map((drawing, index) => (
              <div
                key={index}
                className="relative aspect-square bg-secondary rounded-lg overflow-hidden"
              >
                <Image
                  src={drawing.src}
                  alt={drawing.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
