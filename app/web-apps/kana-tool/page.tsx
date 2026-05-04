import Image from 'next/image'
import Link from 'next/link'

export default function KanaToolPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
        Kana Self-Test Tool
      </h1>
      <p className="text-lg text-muted-foreground mb-10">
        Practice and master Japanese hiragana and katakana characters
      </p>

      {/* Hero Screenshot */}
      <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden mb-10">
        <Image
          src="/kana.jpeg"
          alt="Kana self-test tool hero screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Try it live button */}
      <div className="mb-16">
        <Link
          href="https://kana-learning-eight.vercel.app/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Try it live &rarr;
        </Link>
      </div>

      {/* Why I built it */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Why I built it
        </h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            I'd been studying Japanese on and off for fun, and I kept getting stuck on the same hurdle: the kana table. I knew the shapes when I looked at them, but I couldn't recall them quickly without staring. The apps I tried wanted me to click each character one at a time to check what it sounded like. That wasn't testing me. It was just letting me look.
          </p>
          <p>
            I wanted something closer to flashcards. A character appears, you commit to whether you know it or not, and you move on. Quick, no thinking room, the kind of recall that builds real memory.
          </p>
          <p>
            I made this after the birthday gift app, partly because I wanted another excuse to vibe code, and partly because I genuinely wanted the tool.
          </p>
        </div>
      </section>

      {/* What it does */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          What it does
        </h2>
        <div className="space-y-8">
          <p className="text-foreground leading-relaxed">
            You start by choosing what you want to practice: hiragana only, katakana only, or both mixed. Then you pick a session size: how many cards you want to see this round. Tap begin practice.
          </p>

          {/* Screenshot 1 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/kana2.jpeg"
              alt="Kana tool screenshot 1"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            The cards appear one at a time, in random order. Each card shows the character. Tap to flip it, and the reading appears on the back. Two buttons sit below: got it, or struggling. If you got it, the card disappears and the next one comes up. If you're struggling, the card goes back into the deck and shows up again later in the same session.
          </p>

          {/* Screenshot 2 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/kana3.jpeg"
              alt="Kana tool screenshot 2"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            A small button labeled grid view sits on each card. Tap it to see where this character lives in the full kana table. It helps you remember by position, not just in isolation.
            At the top of the screen, a progress bar shows how many of the 46 you've marked as got it.
          </p>

          {/* Screenshot 3 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/kana4.jpeg"
              alt="Kana tool screenshot 3"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            There's no timer, no score, no wrong-answer counter. Studying shouldn't feel like a test. The honesty of "I know this" or "I don't" is enough.
          </p>
          
                    {/* Screenshot 4 */}
                    <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/kana5.jpeg"
              alt="Kana tool screenshot 3"
              fill
              className="object-cover"
            />
          </div>
          
        </div>
      </section>

      {/* Problems I ran into */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Problems I ran into
        </h2>
        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            The website itself wasn't hard to build. The hard part was the cards. Making the appearance and the interaction feel smooth.
          </p>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The flicker after got it
            </h3>
            <p>
              When you tapped got it and the next card came up, the back of the new card would flash for a split second before the front settled in. The reveal was happening in the wrong order. The character should appear first, then the reading should be hidden until you flip. I had to describe this carefully, that the flash was from the wrong face being shown briefly during the transition.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The card sliding right
            </h3>
            <p>
              The first version animated the card sliding off to the right after got it, like swiping. It looked dynamic, but it actually slowed me down. Every time, my eye would track the card off-screen before the next one appeared. I wanted got it to feel like an instant decision. The card shouldn't go anywhere. It should just be replaced.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Now it's too fast
            </h3>
            <p>
              Once I removed the slide, the cards started flipping past each other almost instantly. Now the problem was the opposite. Too quick, no time for the brain to register what just happened. I added a small pause between cards, just enough that each card feels like its own moment.
            </p>
          </div>

          <p>
            The website was simple. The card interaction was where most of my time went. Getting something to feel smooth and effortless takes a lot of small adjustments most people never notice.
          </p>
        </div>
      </section>
      {/* Back link */}
      <Link
        href="/web-apps"
        className="text-primary hover:underline transition-colors"
      >
        &larr; Back to Web Apps
      </Link>
    </div>
  )
}
