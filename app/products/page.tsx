"use client"

import { useState } from "react"
import { ShoppingBag, Star, Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const allProducts = [
  {
    id: 1,
    name: "Urban Vibes Tee",
    price: 299,
    originalPrice: 349,
    image: "/placeholder.svg?height=400&width=400",
    category: "Streetwear",
    rating: 4.8,
    reviews: 124,
    colors: ["Black", "White", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    onSale: true,
  },
  {
    id: 2,
    name: "Minimalist Classic",
    price: 249,
    image: "/placeholder.svg?height=400&width=400",
    category: "Casual",
    rating: 4.9,
    reviews: 89,
    colors: ["White", "Navy", "Beige"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
    onSale: false,
  },
  {
    id: 3,
    name: "Artistic Expression",
    price: 349,
    image: "/placeholder.svg?height=400&width=400",
    category: "Art",
    rating: 4.7,
    reviews: 156,
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    onSale: false,
  },
  {
    id: 4,
    name: "Retro Wave",
    price: 279,
    originalPrice: 329,
    image: "/placeholder.svg?height=400&width=400",
    category: "Vintage",
    rating: 4.8,
    reviews: 203,
    colors: ["Purple", "Pink", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    onSale: true,
  },
  {
    id: 5,
    name: "Nature Spirit",
    price: 329,
    image: "/placeholder.svg?height=400&width=400",
    category: "Nature",
    rating: 4.6,
    reviews: 78,
    colors: ["Green", "Brown", "Khaki"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    onSale: false,
  },
  {
    id: 6,
    name: "Tech Future",
    price: 399,
    image: "/placeholder.svg?height=400&width=400",
    category: "Tech",
    rating: 4.9,
    reviews: 167,
    colors: ["Black", "Silver", "Blue"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    onSale: false,
  },
  {
    id: 7,
    name: "Sunset Dreams",
    price: 289,
    originalPrice: 339,
    image: "/placeholder.svg?height=400&width=400",
    category: "Art",
    rating: 4.7,
    reviews: 92,
    colors: ["Orange", "Pink", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    onSale: true,
  },
  {
    id: 8,
    name: "Street Legend",
    price: 359,
    image: "/placeholder.svg?height=400&width=400",
    category: "Streetwear",
    rating: 4.8,
    reviews: 145,
    colors: ["Black", "Red", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    onSale: false,
  },
]

const categories = ["All", "Streetwear", "Casual", "Art", "Vintage", "Nature", "Tech"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Best Rating"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Featured")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.price - b.price
      case "Price: High to Low":
        return b.price - a.price
      case "Newest":
        return a.isNew ? -1 : 1
      case "Best Rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const orderOnWhatsApp = (product: any) => {
    const message = `Hi! I'm interested in ordering the "${product.name}" t-shirt for ${product.price} MAD. Can you help me with the details about sizes and colors?`
    const whatsappUrl = `https://wa.me/212647267470?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Amine Pech
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-purple-600 font-medium">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button
              onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Complete Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover all our premium t-shirts designed with passion and crafted with quality materials.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
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
          <select
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
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

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-green-600 text-white">New</Badge>}
                  {product.onSale && <Badge className="bg-red-600 text-white">Sale</Badge>}
                  <Badge className="bg-purple-600 text-white">{product.category}</Badge>
                </div>

                {/* Favorite Button */}
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
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-600">Sizes:</span>
                  <span className="text-sm text-gray-800">{product.sizes.join(", ")}</span>
                </div>

                {/* Price and Order */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">{product.price} MAD</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice} MAD</span>
                    )}
                  </div>
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

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <Button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              className="mt-4"
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
