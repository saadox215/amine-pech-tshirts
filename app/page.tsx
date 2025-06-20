"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Star, Users, Truck, Shield, Heart, Sparkles, ArrowRight, Zap, Award, Menu, X } from "lucide-react"
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
  },
  {
    id: 3,
    name: "Artistic Expression",
    price: 349,
    image: "/placeholder.svg?height=400&width=400",
    category: "Art",
    rating: 4.7,
    reviews: 156,
    new: true,
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
    hot: true,
  },
]

const categories = ["All", "Streetwear", "Casual", "Art", "Vintage", "Nature", "Tech"]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

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
        {/* Animated orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
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
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="relative text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Order Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-4">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <Link 
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Limited Edition Drops</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
                WEAR YOUR
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 animate-gradient-x" style={{ animationDelay: "0.5s" }}>
                PERSONALITY
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium streetwear that speaks louder than words. Express yourself with our exclusive designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group relative bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold overflow-hidden"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10 flex items-center">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent border-2 border-purple-500/50 text-purple-400 hover:border-purple-500/50 hover:text-purple-400 px-10 py-6 text-lg backdrop-blur-sm"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              >
                <Zap className="mr-2 w-5 h-5" />
                Quick Order
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">2K+</div>
                <div className="text-gray-500 mt-1">Happy Customers</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">50+</div>
                <div className="text-gray-500 mt-1">Unique Designs</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">4.9★</div>
                <div className="text-gray-500 mt-1">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Premium Quality", desc: "100% cotton, built to last", color: "purple" },
              { icon: Truck, title: "Fast Delivery", desc: "24-48h across Morocco", color: "green" },
              { icon: Award, title: "Unique Designs", desc: "Exclusive artistic creations", color: "pink" },
              { icon: Users, title: "24/7 Support", desc: "WhatsApp customer service", color: "blue" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${
                    feature.color === "purple" ? "from-purple-500 to-purple-600" :
                    feature.color === "green" ? "from-green-500 to-emerald-600" :
                    feature.color === "pink" ? "from-pink-500 to-rose-600" :
                    "from-blue-500 to-cyan-600"
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300">
              Our Collection
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                TRENDING NOW
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handpicked designs that define contemporary streetwear culture
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg shadow-purple-500/25"
                    : "border-white/20 text-gray-300 hover:text-white hover:border-white/40 bg-white/5 backdrop-blur-sm"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {product.hot && (
                      <Badge className="bg-red-500 text-white border-0">
                        🔥 HOT
                      </Badge>
                    )}
                    {product.new && (
                      <Badge className="bg-green-500 text-white border-0">
                        ✨ NEW
                      </Badge>
                    )}
                  </div>
                  
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </Button>
                  
                  <Badge className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white border-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {product.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-gray-400 ml-1">MAD</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-orange-900/50 backdrop-blur-xl rounded-3xl p-12 md:p-20 text-center border border-white/10">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  JOIN THE MOVEMENT
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Be part of the exclusive community. Get early access to drops and special discounts.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  Start Shopping
                  <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
              
              <div className="mt-12 flex justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Secure Ordering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/10">
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