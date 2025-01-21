import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Gemstone Haven</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium">Shop</Link>
            <Link href="#" className="text-sm font-medium">Products</Link>
            <Link href="#" className="text-sm font-medium">About</Link>
            <Link href="#" className="text-sm font-medium">Contact Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium">
              Sign In
            </Link>
            <Link href="#" className="text-sm font-medium">
              Cart
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Colorful gemstones background"
              width={1920}
              height={600}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Exclusive Gem Sale
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Discover dazzling gems at unbeatable prices
            </p>
            <Button className="mt-8" size="lg">
              Shop Now
            </Button>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href="#"
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <span className="text-white font-medium">{category.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offers.map((offer) => (
                <Card key={offer.title}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground">{offer.price}</p>
                    <Button className="w-full mt-4" variant="outline">
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-muted-foreground">
              Hurry, limited time offers!
            </p>
          </div>
        </section>

        {/* Trending Products */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product) => (
                <Card key={product.name}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">Was ${product.oldPrice}</p>
                    <p className="font-bold">Now ${product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gray-50 py-16">
          <div className="container max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl italic mb-4">
                "These sapphire earrings are absolutely stunning! The craftsmanship is superb, and they add a touch of elegance to any outfit. Highly recommend Gemstone Haven!"
              </blockquote>
              <cite className="not-italic">
                <span className="font-semibold">Sophia M.</span>
                <br />
                <span className="text-sm text-muted-foreground">Jewelry Enthusiast</span>
              </cite>
            </div>
          </div>
        </section>

        {/* Favorite Products */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Favorite Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <Card key={product.name}>
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <p className="font-bold mt-2">Price ${product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground">Overview</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">Features</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground">Blog</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">User guides</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground">About us</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">Contact us</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Gemstone Haven. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

const categories = [
  { name: "Amethyst", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sapphire", image: "/placeholder.svg?height=200&width=200" },
  { name: "Copper", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emerald", image: "/placeholder.svg?height=200&width=200" },
  { name: "Quartz", image: "/placeholder.svg?height=200&width=200" },
  { name: "Beetle", image: "/placeholder.svg?height=200&width=200" },
]

const offers = [
  { title: "Flash Sale", price: "$99.99", image: "/placeholder.svg?height=200&width=200" },
  { title: "Limited Offer", price: "$149.99", image: "/placeholder.svg?height=200&width=200" },
  { title: "Weekend Deal", price: "$199.99", image: "/placeholder.svg?height=200&width=200" },
  { title: "Special Bundle", price: "$299.99", image: "/placeholder.svg?height=200&width=200" },
]

const trendingProducts = [
  { name: "Smartphone", price: "599", oldPrice: "699", image: "/placeholder.svg?height=200&width=200" },
  { name: "Laptop", price: "999", oldPrice: "1299", image: "/placeholder.svg?height=200&width=200" },
  { name: "Headphones", price: "199", oldPrice: "299", image: "/placeholder.svg?height=200&width=200" },
  { name: "Smartwatch", price: "299", oldPrice: "399", image: "/placeholder.svg?height=200&width=200" },
]

const favoriteProducts = [
  { name: "Leather Wallet", price: "49.99", description: "Elegant leather wallet with multiple slots and card space", image: "/placeholder.svg?height=200&width=200" },
  { name: "Smart Watch", price: "299.99", description: "Modern smartwatch with fitness tracking and notifications", image: "/placeholder.svg?height=200&width=200" },
  { name: "Earbuds", price: "159.99", description: "Premium earbuds with noise-canceling features", image: "/placeholder.svg?height=200&width=200" },
  { name: "White Sneakers", price: "79.99", description: "Classic white sneakers for everyday comfort", image: "/placeholder.svg?height=200&width=200" },
]

