import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Creative Showcase</h1>
        <p className="text-xl mb-8">Explore a world of imagination and innovation</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/creations">View Creations</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "https://source.unsplash.com/random/800x600?art", alt: "Abstract Art" },
            { src: "https://source.unsplash.com/random/800x600?sculpture", alt: "Modern Sculpture" },
            { src: "https://source.unsplash.com/random/800x600?photography", alt: "Landscape Photography" },
          ].map((img, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          We are a collective of passionate artists and creators dedicated to pushing the boundaries of creativity.
          Our showcase features a diverse range of works from emerging and established talents across various mediums.
        </p>
      </section>
    </div>
  )
}