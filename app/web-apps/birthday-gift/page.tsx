import Image from 'next/image'
import Link from 'next/link'

export default function BirthdayGiftPage() {
  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 md:py-20">
      {/* Header */}
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
        Birthday Gift App
      </h1>
      <p className="text-lg text-muted-foreground mb-10">
        A personalized digital greeting experience for someone special
      </p>

      {/* Hero Screenshot */}
      <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden mb-10">
        <Image
          src="/birthday gift.jpeg"
          alt="Birthday gift app hero screenshot"
          fill
          className="object-cover"
        />
      </div>

      {/* Try it live button */}
      <div className="mb-16">
        <Link
          href="https://lovewani.vercel.app/"
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
            The app is a birthday gift I made for my boyfriend. He works in tech and plays tennis, so I wanted to combine those two things with something personal from me. A web app felt right because it could be interactive.
          </p>
          <p>
            This was also my first vibe coding project. I'd never built a web app before. I picked something simple but ambitious enough to feel like a real thing: a playable greeting that would slowly reveal his birthday message.
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
            When he opens the app, he sees a portrait I drew of him, made up of nine tiles. Below the portrait there's a tennis ball.
            He drags the tennis ball to aim. A guideline appears showing where the ball will go when he releases it. The ball flies, hits a tile, and almost immediately the tile shows a photo. The photos are not in random positions: each tile holds a specific photo I took of him during one of our trips together. There are nine photos, one for each tile, in fixed positions.
            Here, I've included a picture of a little monster as an example.
          </p>

          {/* Screenshot 1 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/birthday gift2.jpeg"
              alt="Birthday app screenshot 1"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            Tapping any visible photo enlarges it for a closer look. The background blurs out the rest of the grid. Tapping anywhere on the screen returns the photo to its place.
          </p>

          {/* Screenshot 2 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/birthday gift3.jpeg"
              alt="Birthday app screenshot 2"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-foreground leading-relaxed">
            When all nine tiles have been hit, three things happen at once: confetti falls, the birthday song plays, and a small message appears in a frame that says "Happy birthday, my love, the world's best person."
          </p>

          {/* Screenshot 3 */}
          <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/birthday gift4.jpeg"
              alt="Birthday app screenshot 3"
              fill
              className="object-cover"
            />
          </div>
          
           {/* Screenshot 4 */}
           <div className="relative aspect-[16/9] bg-secondary rounded-lg overflow-hidden">
            <Image
              src="/birthday gift5.jpeg"
              alt="Birthday app screenshot 4"
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
            The first version worked, but the closer I looked, the more I found. Most problems showed up the same way. I'd notice something off in the app, figure out how to describe what I was seeing, and then iterate on the fix. The harder part was usually getting the description right.
          </p>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The ball flying behind a photo
            </h3>
            <p>
              After a tile flipped to show its photo, the tennis ball would sometimes pass behind the photo as it bounced upward, instead of in front of it. The depth was wrong. Once I realized it was a layering problem, the fix was small.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              The photos wouldn't load
            </h3>
            <p>
              Some tiles flipped to nothing, just blank space where the photo should be. The original photos were in HEIC format, which is the iPhone default, but browsers don't display HEIC. I converted everything to JPG. After that, the page loaded but felt slow, because the photos were still phone-resolution. I compressed them down.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Tapping the photo also fired the ball
            </h3>
            <p>
              When a photo is enlarged, tapping anywhere is supposed to close it and return to the grid. But the same tap was also launching the tennis ball. I needed a tap to mean two different things depending on whether a photo was open or not. Once that distinction was in place, it worked.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              A photo getting stuck at the end
            </h3>
            <p>
              When the ninth tile was hit, the celebration was supposed to start: confetti, birthday song, the final message. But if a photo was still enlarged from a previous tap, it would freeze on screen during the celebration. The fix was to make sure that window closed itself before the ending sequence started.
            </p>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-1">
              Ghost photos
            </h3>
            <p>
              When tapping from one enlarged photo to the next, a faint version of the previous photo would briefly appear on top of the new one. I called it a ghost because that's what it looked like. The previous photo wasn't fully going away before the next one appeared.
            </p>
          </div>

          <p>
            All of these came up over a few days of testing. I solved them one at a time, mostly by getting better at describing what I was seeing. This was my first project using Claude, GitHub, and Vercel together.
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
