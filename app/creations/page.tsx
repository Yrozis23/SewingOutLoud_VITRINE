"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const creations = [
  { id: 1, title: "Abstract Harmony", artist: "Elena Rivera", medium: "Oil on Canvas", src: "https://source.unsplash.com/random/800x600?abstract" },
  { id: 2, title: "Urban Rhythm", artist: "Marcus Chen", medium: "Digital Art", src: "https://source.unsplash.com/random/800x600?urban" },
  { id: 3, title: "Serenity in Blue", artist: "Sophie Laurent", medium: "Watercolor", src: "https://source.unsplash.com/random/800x600?blue" },
  { id: 4, title: "Geometric Dreams", artist: "Alex Novak", medium: "Acrylic on Wood", src: "https://source.unsplash.com/random/800x600?geometric" },
  { id: 5, title: "Nature's Whisper", artist: "Yuki Tanaka", medium: "Mixed Media", src: "https://source.unsplash.com/random/800x600?nature" },
  { id: 6, title: "Echoes of Time", artist: "Isabella Moretti", medium: "Photography", src: "https://source.unsplash.com/random/800x600?vintage" },
]

export default function Creations() {
  const [filter, setFilter] = useState('')

  const filteredCreations = creations.filter(creation =>
    creation.title.toLowerCase().includes(filter.toLowerCase()) ||
    creation.artist.toLowerCase().includes(filter.toLowerCase()) ||
    creation.medium.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Creations</h1>

      <div className="mb-8">
        <Label htmlFor="filter">Filter creations</Label>
        <Input
          id="filter"
          type="text"
          placeholder="Search by title, artist, or medium"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCreations.map((creation) => (
          <Dialog key={creation.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={creation.src}
                    alt={creation.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="mt-2 text-xl font-semibold">{creation.title}</h3>
                <p className="text-sm text-muted-foreground">{creation.artist}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={creation.src}
                  alt={creation.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{creation.title}</h3>
              <p className="text-muted-foreground mb-1">Artist: {creation.artist}</p>
              <p className="text-muted-foreground mb-4">Medium: {creation.medium}</p>
              <Button className="w-full">Request More Info</Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}