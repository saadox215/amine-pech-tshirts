"use client"

import { useState } from "react"
import { ShoppingBag, Star, Users, Truck, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Urban Vibes Tee",
    price: 299,
    image: "/placeholder.svg?height=400&width=400",
    category: "Streetwear",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Minimalist Classic",
    price: 249,
    image: "/placeholder.svg?height=400&width=400",
    category: "Casual",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Artistic Expression",
    price: 349,
    image: "/placeholder.svg?height=400&width=400",
    category: "Art",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Retro Wave",
    price: 279,
    image: "/placeholder.svg?height=400&width=400",
    category: "Vintage",
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 5,
    name: "Nature Spirit",
    price: 329,
    image: "/placeholder.svg?height=400&width=400",
    category: "Nature",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 6,
    name: "Tech Future",
    price: 399,
    image: "/placeholder.svg?height=400&width=400",
    category: "Tech",
    rating: 4.9,
    reviews: 167,
  },
]

const categories = ["All", "Streetwear", "Casual", "Art", "Vintage", "Nature", "Tech"]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const orderOnWhatsApp = (product: any) => {
    const message = `Hi! I'm interested in ordering the "${product.name}" t-shirt for ${product.price} MAD. Can you help me with the details?`
    const whatsappUrl = `https://wa.me/212647267470?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amine Pech
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </Button>
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              ✨ Premium Quality T-Shirts
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Express Your Style
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover unique, high-quality t-shirts that speak your language. From streetwear to artistic designs, find
              your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Shop Collection
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">100% cotton, durable and comfortable</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick delivery across Morocco</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">24/7 WhatsApp support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Unique Designs</h3>
              <p className="text-gray-600 text-sm">Exclusive artistic creations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collection of premium t-shirts designed for every style and occasion.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                    />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">{product.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{product.price} MAD</span>
                    <Button
                      onClick={() => orderOnWhatsApp(product)}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Express Yourself?</h2>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Amine Pech for their style needs.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/212647267470", "_blank")}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
          >
            Start Shopping on WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AP</span>
                </div>
                <h3 className="text-xl font-bold">Amine Pech</h3>
              </div>
              <p className="text-gray-400">Premium quality t-shirts with unique designs for every style.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Streetwear</li>
                <li>Casual</li>
                <li>Artistic</li>
                <li>Vintage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>WhatsApp: +212 647267470</p>
                <p>Available 24/7</p>
                <Button
                  onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                  className="bg-green-500 hover:bg-green-600 text-white mt-4"
                >
                  Chat with us
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Amine Pech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
