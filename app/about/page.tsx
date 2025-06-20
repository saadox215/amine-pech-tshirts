"use client"

import { Award, Heart, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <Link href="/products" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-purple-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Button
              onClick={() => window.open("https://wa.me/212621740209", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              About Amine Pech
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting premium t-shirts that tell your story and express your unique style.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Amine Pech was born from a passion for self-expression and quality craftsmanship. What started as a
                small idea has grown into a brand that celebrates individuality and creativity through premium t-shirt
                designs.
              </p>
              <p className="text-gray-600 mb-4">
                Every design tells a story, every thread is carefully chosen, and every customer is part of our growing
                family. We believe that clothing should be more than just fabric – it should be a canvas for your
                personality.
              </p>
              <p className="text-gray-600">
                Based in Morocco, we serve customers who appreciate quality, creativity, and authentic style. Our
                commitment to excellence drives everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Amine Pech Story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                <p className="text-gray-600 text-sm">
                  We use only premium materials and maintain the highest standards in every product.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Passion Driven</h3>
                <p className="text-gray-600 text-sm">
                  Every design is created with love and attention to detail that shows.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Customer Focused</h3>
                <p className="text-gray-600 text-sm">
                  Your satisfaction is our priority. We're here to help 24/7 via WhatsApp.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast & Reliable</h3>
                <p className="text-gray-600 text-sm">Quick processing and reliable delivery across Morocco.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-purple-100 text-lg max-w-3xl mx-auto mb-8">
            To empower individuals to express their unique style through premium, comfortable, and creatively designed
            t-shirts that make a statement and build confidence.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/212621740209", "_blank")}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Join Our Community
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Unique Designs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
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
                <p>WhatsApp: +212 621740209</p>
                <p>Available 24/7</p>
                <Button
                  onClick={() => window.open("https://wa.me/212621740209", "_blank")}
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
