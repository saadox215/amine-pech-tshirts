"use client"

import { useState, useEffect } from "react"
import { Award, Heart, Truck, Users, Sparkles, ArrowRight, Target, Zap, Crown, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)
    
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const stats = [
    { number: "2K+", label: "Happy Customers", icon: "😊" },
    { number: "50+", label: "Unique Designs", icon: "🎨" },
    { number: "99%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "24/7", label: "Customer Support", icon: "💬" }
  ]

  const values = [
    {
      icon: Award,
      title: "Quality First",
      desc: "Premium materials, exceptional standards",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Passion Driven",
      desc: "Every design crafted with love",
      color: "pink",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Customer Focused",
      desc: "Your satisfaction is our priority",
      color: "orange",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: Truck,
      title: "Fast & Reliable",
      desc: "Quick delivery across Morocco",
      color: "blue",
      gradient: "from-blue-500 to-cyan-600"
    }
  ]

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
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
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
                  className={`relative text-gray-300 hover:text-white transition-colors group ${item === "About" ? "text-white" : ""}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    item === "About" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </nav>
            <Button
              onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Est. 2023 in Morocco</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
                OUR STORY
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              From passion to purpose - crafting premium t-shirts that tell your unique story.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Parallax */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              className="relative"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
                <Crown className="w-16 h-16 text-purple-400 mb-6" />
                <h2 className="text-4xl font-black mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    FROM VISION TO REALITY
                  </span>
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Amine Pech was born from a simple belief: clothing should be more than just fabric. It should be a canvas for self-expression, a statement of individuality, and a celebration of creativity.
                  </p>
                  <p>
                    What started as a passion project in a small Moroccan workshop has grown into a movement. Every thread, every design, every package sent out carries our commitment to quality and our love for authentic style.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of customers who don't just wear our t-shirts – they wear their stories, their passions, and their personalities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Amine Pech Story"
                className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
              />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                WHAT DRIVES US
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The core values that shape every decision and define our brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-orange-900/50 backdrop-blur-xl rounded-3xl p-16 md:p-24 text-center border border-white/10">
              <Target className="w-20 h-20 text-purple-400 mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  OUR MISSION
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                To empower individuals to express their unique style through premium, comfortable, and creatively designed t-shirts that make a statement and build confidence.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  Join Our Movement
                  <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                THE CREATIVE FORCE
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the passionate team behind every design
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-orange-600/30 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
                <CardContent className="p-12 text-center">
                  <div className="w-32 h-32 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse"></div>
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Amine"
                      className="relative rounded-full border-4 border-black"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Amine
                  </h3>
                  <p className="text-purple-400 text-lg mb-4">Founder & Creative Director</p>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    "Fashion is not just about clothes; it's about telling your story without saying a word. Every design we create is a piece of art that helps you express who you are."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-8 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                READY TO EXPRESS YOURSELF?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands who've found their perfect style with Amine Pech
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = "/products"}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-6 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              >
                Get in Touch
              </Button>
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