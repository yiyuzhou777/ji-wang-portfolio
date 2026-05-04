import Image from 'next/image'
import Link from 'next/link'

export default function SellingPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-16 md:mb-24">
        Selling Exploration
      </h1>

      {/* Project 01 - Pop-up Retail */}
      <section className="relative mb-24 md:mb-32">
        <span className="font-serif text-[120px] md:text-[180px] text-primary/20 leading-none absolute -top-8 md:-top-12 -left-2 md:-left-4 select-none">
          01
        </span>
        <div className="relative pt-16 md:pt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            Pop-up Retail
          </h2>

          {/* Media row: vertical video + 2 stacked images */}
          <div className="flex gap-4 mb-10">
            {/* Vertical video (9:16 aspect ratio, constrained height) */}
            <div className="shrink-0" style={{ height: '560px' }}>
              <div className="relative h-full rounded-lg overflow-hidden" style={{ aspectRatio: '9/16' }}>
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/791%202-DDWv3C7is4I2ODBBdtq6S0oIDEJnwn.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Two stacked images matching video height */}
            <div className="flex flex-col gap-4 flex-1" style={{ height: '560px' }}>
              <div className="relative flex-1 bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/Pop-up Retail 1.jpeg"
                  alt="Pop-up retail detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/Pop-up Retail 2.jpeg"
                  alt="Pop-up retail detail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Two-column layout: pull-quote + story */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            {/* Pull-quote column with angular quotation marks */}
            <div className="relative">
              {/* Opening angular quote mark - top left */}
              <span
                className="absolute -top-2 -left-2 text-primary text-[80px] md:text-[100px] leading-none select-none"
                style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                &#x201C;
              </span>
              <p className="font-serif italic text-foreground text-2xl md:text-3xl leading-relaxed pt-12 md:pt-16 pb-8 md:pb-10 px-2">
                If you won, the flower was yours for free. If I won, you paid full price.
              </p>
              {/* Closing angular quote mark - bottom right */}
              <span
                className="absolute bottom0 right-0 text-primary text-[80px] md:text-[100px] leading-none select-none"
                style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}
              >
                &#x201D;
              </span>
            </div>

            {/* Story text column */}
            <div className="max-w-[700px]">
              <div className="text-sm text-muted-foreground mb-6 flex flex-wrap gap-x-4 gap-y-1">
                <span>Format: Weekend pop-up</span>
                <span>·</span>
                <span>Items: Fresh flowers, DIY sachets</span>
                <span>·</span>
                <span>Price: ¥9.9 each</span>
                <span>·</span>
                <span>Margin: 50%+</span>
                <span>·</span>
                <span>Outcome: Sold out every batch</span>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  I wanted to turn a weekend into a small business. I also wanted to change how selling usually feels, by folding games into the transaction itself.
                </p>
                <p>
                  I started with flowers. Everyone wants to receive a flower; it stands in for affection. I compared prices across platforms, thought carefully about how to make the packaging feel like more than a single stem, and bought individual sleeves, ribbons, and small string lights. I tried three different locations before settling on a footbridge beside a shopping mall, where the evening foot traffic was steady and the lights were beautiful.
                </p>
                <p>
                  That night I played rock-paper-scissors with about fifty people. The rule was simple: if you won, the flower was yours for free. If I won, you paid full price. The odds were fair, which is why everyone wanted to play. A few customers stayed to film. I sold out, and people lingered hoping for one more round.
                </p>
                <p>
                  It was so much fun I kept doing it. Later I added DIY mugwort sachets, naming each color and designing little tear-off blessings customers could take home, turning the workshop itself into the experience. To keep costs near zero, I built the whole stall from things I already owned: a sun umbrella as the table, a suitcase as the display rack, a clothes-drying pole as a frame, hangers as clips for the signage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 02 - Nuts Selling */}
      <section className="relative">
        <span className="font-serif text-[120px] md:text-[180px] text-primary/20 leading-none absolute -top-8 md:-top-12 -left-2 md:-left-4 select-none">
          02
        </span>
        <div className="relative pt-16 md:pt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            Nuts Selling
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Story - Left side on desktop */}
            <div className="order-2 md:order-1">
              <div className="text-sm text-muted-foreground mb-6 flex flex-wrap gap-x-4 gap-y-1">
                <span>
                  Items: Hickory nuts, hickory & pecan kernels, macadamias</span>
                <span>·</span>
                <span>Volume: 240+ cans</span>
                <span>·</span>
                <span>Largest single order: 10kg</span>
                <span>·</span>
                <span>Channel: Direct sales, attempted distribution channel</span>
                <span>·</span>
                <span>Outcome: Direct sales succeeded; community channel didn't come together</span>
              </div>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  My hometown is known for producing nuts, so I had direct access to factories and good-quality product. I started there. There are a lot of varieties, so after some market research I chose four to focus on based on flavor and margin: hickory nuts, hickory nut kernels, pecan kernels, and macadamia kernels. I picked a manufacturer to work with, thought through pricing and packaging, and negotiated lower shipping costs.
                </p>
                <p>
                  At first I sold only through personal channels: friends, and friends of friends. One time, a friend's mom bought 10 kilograms in a single order, even after I told her the current macadamia kernels were smaller than the previous batch. That kind of trust made me genuinely happy.
                </p>
                <p>
                  To expand, I tried working with community-buying leaders. But their orders were intermittent: small volumes, high delivery expectations, and the relationships among existing leaders were more complicated than I'd expected. The deals didn't come together. The conversations, though, were the most valuable part of the whole project. I wrote down what I learned, and those notes became the articles linked below.
                </p>
              </div>

              {/* Article Link */}
              <div className="mt-8">
                <Link
                  href="/notes"
                  className="text-primary hover:underline transition-colors"
                >
                  Read the articles &rarr;
                </Link>
              </div>
            </div>

            {/* 2x2 Image Grid - Right side on desktop */}
            <div className="grid grid-cols-2 gap-3 order-1 md:order-2">
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/nuts-1.JPG"
                  alt="Nuts selling 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/nuts-2.JPG"
                  alt="Nuts selling 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/nuts-3.JPG"
                  alt="Nuts selling 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
                <Image
                  src="/nuts-4.JPG"
                  alt="Nuts selling 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
