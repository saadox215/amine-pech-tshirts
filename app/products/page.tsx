"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Star, Heart, Search, Filter, Sparkles, ArrowRight, TrendingUp, Zap } from "lucide-react"
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
    hot: true,
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
    hot: true,
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
const sortOptions = [
  { value: "featured", label: "Featured", icon: Sparkles },
  { value: "price-low", label: "Price: Low to High", icon: TrendingUp },
  { value: "price-high", label: "Price: High to Low", icon: TrendingUp },
  { value: "newest", label: "Newest", icon: Zap },
  { value: "rating", label: "Best Rating", icon: Star },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [favorites, setFavorites] = useState<number[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "newest":
        return a.isNew ? -1 : 1
      case "rating":
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full p-[2px] group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AP</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Amine Pech
                </span>
              </h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className={`relative text-gray-300 hover:text-white transition-colors group ${item === "Products" ? "text-white" : ""}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    item === "Products" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </nav>
            <Button
              onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Order Now
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">{allProducts.length} Premium Designs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
              FULL COLLECTION
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover premium t-shirts designed to make you stand out
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search designs..."
                  className="pl-12 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder:text-gray-500 rounded-full focus:bg-white/20 focus:border-purple-500 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full appearance-none cursor-pointer hover:bg-white/20 transition-all duration-300 pr-12"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-black">
                    {option.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg shadow-purple-500/25"
                    : "border-white/20 text-gray-300 hover:text-white hover:border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{sortedProducts.length}</span> results
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transition-all duration-300 ${
                hoveredProduct === product.id ? "opacity-100" : "opacity-0"
              }`}></div>
              
              <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 h-full">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.hot && (
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                        🔥 HOT
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                        ✨ NEW
                      </Badge>
                    )}
                    {product.onSale && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                        SALE
                      </Badge>
                    )}
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {product.category}
                  </Badge>

                  {/* Favorite Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product.id)
                    }}
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.includes(product.id) ? "fill-red-500 text-red-500 scale-110" : "text-white hover:text-red-400"
                      }`}
                    />
                  </Button>
                </div>

                <CardContent className="p-6 space-y-4">
                  <h3 className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent  text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 transition-colors ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Colors & Sizes */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Colors:</span>
                      <div className="flex gap-1">
                        {product.colors.slice(0, 4).map((color, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded-full border border-white/20 transition-transform hover:scale-110"
                            style={{ 
                              backgroundColor: color.toLowerCase() === "white" ? "#ffffff" : 
                                             color.toLowerCase() === "black" ? "#000000" :
                                             color.toLowerCase()
                            }}
                            title={color}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Sizes:</span>
                      <span className="text-sm">{product.sizes.join(", ")}</span>
                    </div>
                  </div>

                  {/* Price and Order */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-gray-400 ml-1">MAD</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice} MAD</span>
                      )}
                    </div>
                    <Button
                      onClick={() => orderOnWhatsApp(product)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white group/btn overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center">
                        Order
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6">
              <Search className="w-12 h-12 text-purple-400" />
            </div>
            <p className="text-gray-400 text-xl mb-6">No products found matching your criteria</p>
            <Button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
              }}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-[2px]">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AP</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Amine Pech
                </h3>
              </div>
              <p className="text-gray-400">
                Redefining streetwear with bold designs and premium quality.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {["Home", "Products", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Categories</h4>
              <ul className="space-y-3 text-gray-400">
                {["Streetwear", "Casual", "Artistic", "Vintage"].map((item) => (
                  <li key={item} className="hover:text-purple-400 transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <p className="text-gray-400">Available 24/7 on WhatsApp</p>
                <Button
                  onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Chat with us
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">
              &copy; 2024 Amine Pech. All rights reserved. Made with 
              <span className="text-red-500 mx-1">❤️</span> 
              in Morocco
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}