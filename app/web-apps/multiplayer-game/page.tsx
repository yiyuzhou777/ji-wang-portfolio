import Image from 'next/image'
import Link from 'next/link'

export default function MultiplayerGamePage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
        Heartguess Game
      </h1>
      <p className="text-lg text-muted-foreground mb-10">
        A two-player browser game about reading your friend's mind, and trying not to get poisoned.
      </p>

      {/* Hero Screenshot */}
      <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden mb-10">
        <Image
          src="/heartguess.jpeg"
          alt="Heartguess game hero screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Try it live button */}
      <div className="mb-16">
        <Link
          href="https://heartguess-game.vercel.app/"
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
            Before there was an app, my friends and I already played a version of this game in real life. We'd grab a handful of blueberries or strawberries, secretly mark a few as "poisoned," and take turns eating them. The thrill was in trying to read what the other person picked.
          </p>
          <p>
            I made the online version mostly because I wanted to see if I could. My earlier two web apps: a birthday gift and a Kana Self-Test Tool were small and single-player. HeartGuess was an attempt at something more ambitious: real-time, two-player, with shared state between two browsers.
          </p>
          <p>
            I added a second mode where the items are poop and the characters are dogs, just because it was funny. The blueberry version is the proper one. The poop version is for laughing with friends.
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
            Each player joins the room and gives themselves a name. (My friends and I usually pick something silly.) One player creates the room and shares a link; the other clicks the link to join.
          </p>

          {/* Screenshot 1 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/heartguess2.jpeg"
              alt="Game screenshot 1"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            Then the round begins. Pick a mode: blueberries (with LEGO characters), or poop (with dogs). The tray fills with items: they look like blueberries or like poop, depending on the mode, just in different colors. Each player secretly picks one item to poison. You can poison any item you want, including one your opponent might end up needing to eat.
          </p>

          {/* Screenshot 2 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/heartguess3.jpeg"
              alt="Game screenshot 2"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            Once both have poisoned, the eating phase starts. Players take turns choosing an item to eat. You're trying to avoid your opponent's poison. You're also trying not to accidentally pick your own. (Misclicks happen. So does running out of time: if you take more than five seconds, the system picks for you, and sometimes it picks badly.) When someone eats poison, the round ends.
          </p>

          {/* Screenshot 3 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/heartguess4.jpeg"
              alt="Game screenshot 3"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            The strategy is simple in description and harder in practice. Where would my opponent put their poison? What would they think I'd avoid? What's actually safe? The fun is that the answer is rarely what you think, and sometimes you both poison the same thing.
          </p>

          {/* Screenshot 4 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/heartguess5.jpeg"
              alt="Game screenshot 4"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            Best of five wins the match. Each mode has its own victory animation.
          </p>

          {/* Screenshot 5 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/heartguess6.jpeg"
              alt="Game screenshot 5"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problems I ran into */}
      {/* Problems I ran into */}
      {/* Problems I ran into */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          Problems I ran into
        </h2>
        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            The first version worked. The interesting problems were everywhere else.
          </p>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Testing without a second player
            </h3>
            <p>
              This was a two-player game, and I was one person. I couldn't test both sides at once. I built a simple bot mode so I could play against myself and check that the round logic, the eating phase, and the victory conditions all behaved correctly. The bot wasn't smart, but it was enough to find bugs.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              What happens when the host leaves
            </h3>
            <p>
              My early version just left the other player staring at a frozen screen. I designed a clear "your opponent left" state, gave the remaining player a way out, and made sure the room cleaned itself up properly so empty rooms didn't sit forever in the database.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Knowing when to give up on a feature
            </h3>
            <p>
              I had a vision for the visual design. The blueberry mode was supposed to have a clean white plate as the background; the poop mode was supposed to be on grass. I also wanted custom victory screen illustrations. The AI tools I was using to generate visuals couldn't quite produce what I had in mind. After a few rounds of trying, I let it go and used simpler backgrounds. The game still worked.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The no-tie problem
            </h3>
            <p>
              Early on I noticed a real game-design issue: if both players play perfectly, the game can stall, since neither person wants to eat anything risky. I solved it by ruling that every round must end with someone eating poison, no ties allowed. Sometimes you eat down to the last item and have no choice but to eat your own poison. To keep this fair, I rotate which player goes first each round.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The 5-second timer
            </h3>
            <p>
              This came from playing with friends. The first version had no timer, and rounds dragged. We added five seconds, which forced commitment. The countdown turns red at 3, 2, 1. Small detail, but it makes the urgency feel intentional rather than punishing.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Joining a room
            </h3>
            <p>
              The original version made you type a room code to join, which was clunky on mobile. After my friends complained, I switched to copyable shareable links. Much faster. People could send the link in WeChat and the second player could join with one tap.
            </p>
          </div>

          <p>
            Building this was also my first time using Firebase for real-time data. Most of these problems pushed me deeper into the same question: how does the game stay in sync between two people, on two devices, in two unstable networks? Most of the answer was: design the failure modes well.
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
