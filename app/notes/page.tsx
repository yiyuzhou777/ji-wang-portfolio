import Link from 'next/link'

const notes = [
  {
    id: 1,
    title: 'Trying to Sell Nuts',
    excerpt: 'I thought I had done my homework before meeting the community leader. A few sentences in, I realized I was naive.',
  },
  {
    id: 2,
    title: 'My First Real Negotiation',
    excerpt: 'I came in thinking I had a price and quality advantage. Then he showed me his supplier spreadsheets.',
  },
  {
    id: 3,
    title: 'What a Community Leader Actually Does',
    excerpt: 'A community leader isn’t just a seller — they’re a trusted voice inside a private group chat. Here’s how this whole model came to be.',
  },
  {
    id: 4,
    title: 'Trust at the Center',
    excerpt: 'H puts trust at the center of his business. His sales philosophy turns out to be his way of treating people.',
  },
  {
    id: 5,
    title: 'Inside the Supply Chain',
    excerpt: 'Community leaders carry no inventory; suppliers handle everything. But as the model matures, leaders are starting to wonder if they need the suppliers at all.',
  },
  {
    id: 6,
    title: 'Politics Between Leaders',
    excerpt: 'A few community leaders, one neighborhood, no easy way to avoid each other. I walked away from the deal and here’s why.',
  },
]

export default function NotesPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
        Notes
      </h1>

      <p className="italic text-foreground/80 leading-relaxed max-w-[640px] mb-4">
        I've been trying different ways to sell things: pop-ups, premium gifts, community group-buying. These are the notes I took along the way: what I tried, what surprised me, what I'm still figuring out.
      </p>
      <p className="italic text-foreground/80 leading-relaxed max-w-[640px] mb-16 text-sm">
        Articles are in Chinese; titles in English so you can find your way around.
      </p>

      <div className="space-y-8">
        {notes.map((note, index) => (
          <Link
            key={note.id}
            href={`/notes/note-${note.id}`}
            className="group flex gap-6 items-start py-4 border-b border-border hover:border-primary/40 transition-colors"
          >
            <span className="font-serif text-lg text-primary/60 group-hover:text-primary transition-colors">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                {note.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {note.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
