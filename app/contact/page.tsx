"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { MessageCircle, Phone, Clock, Send, Sparkles, MapPin, Mail, ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeField, setActiveField] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hi! My name is ${formData.name}. 
    
Subject: ${formData.subject}

Message: ${formData.message}

Email: ${formData.email}`

    const whatsappUrl = `https://wa.me/212647267470?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
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
                  className={`relative text-gray-300 hover:text-white transition-colors group ${item === "Contact" ? "text-white" : ""}`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                    item === "Contact" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </nav>
            <Button
              onClick={() => window.open("https://wa.me/212647267470", "_blank")}
              className="relative bg-gradient-to-r from-white-500 to-emerald-600 hover:from-white-600 hover:to-emerald-700 text-white group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-bounce">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">We're here 24/7</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
                LET'S TALK
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Got questions? Need a custom design? We're just a message away.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                desc: "Instant chat support",
                action: "+212 647267470",
                color: "green",
                onClick: () => window.open("https://wa.me/212647267470", "_blank")
              },
              {
                icon: Phone,
                title: "Direct Call",
                desc: "Speak with us",
                action: "+212 647267470",
                color: "blue",
                onClick: () => window.open("tel:+212647267470", "_blank")
              },
              {
                icon: Globe,
                title: "Location",
                desc: "Based in Morocco",
                action: "Casablanca, MA",
                color: "purple",
              }
            ].map((method, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onClick={method.onClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${
                      method.color === "green" ? "from-green-500 to-emerald-600" :
                      method.color === "blue" ? "from-blue-500 to-cyan-600" :
                      "from-purple-500 to-pink-600"
                    } flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-xl mb-2">{method.title}</h3>
                    <p className="text-gray-400 mb-4">{method.desc}</p>
                    <div className={`font-semibold text-lg bg-gradient-to-r ${
                      method.color === "green" ? "from-green-400 to-emerald-400" :
                      method.color === "blue" ? "from-blue-400 to-cyan-400" :
                      "from-purple-400 to-pink-400"
                    } bg-clip-text text-transparent`}>
                      {method.action}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  SEND A MESSAGE
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Fill out the form and we'll get back to you instantly
              </p>
            </div>

            <Card className="relative bg-white/5 backdrop-blur-sm border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10 rounded-2xl"></div>
              <CardContent className="relative p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-gray-500 transition-all duration-300 ${
                          activeField === "name" ? "border-purple-500 bg-white/20" : ""
                        }`}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className={`bg-white/10 border-white/20 text-white placeholder:text-gray-500 transition-all duration-300 ${
                          activeField === "email" ? "border-purple-500 bg-white/20" : ""
                        }`}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Custom t-shirt order"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField(null)}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-500 transition-all duration-300 ${
                        activeField === "subject" ? "border-purple-500 bg-white/20" : ""
                      }`}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your ideas..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-gray-500 transition-all duration-300 resize-none ${
                        activeField === "message" ? "border-purple-500 bg-white/20" : ""
                      }`}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg font-semibold group"
                  >
                    <span className="flex items-center justify-center">
                      Send via WhatsApp
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                FREQUENTLY ASKED
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Quick answers to help you get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "How do I place an order?",
                a: "Simply click any 'Order Now' button and you'll be redirected to WhatsApp for instant ordering.",
                icon: "🛒"
              },
              {
                q: "What sizes are available?",
                a: "We offer sizes from S to XXL for most designs. Contact us for specific availability.",
                icon: "📏"
              },
              {
                q: "How long is delivery?",
                a: "Delivery within Morocco takes 2-5 business days. We'll provide tracking via WhatsApp.",
                icon: "🚚"
              },
              {
                q: "Can I return items?",
                a: "Yes! Returns and exchanges within 7 days of delivery. Contact us for the process.",
                icon: "↩️"
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{faq.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {faq.q}
                        </h3>
                        <p className="text-gray-400">{faq.a}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-green-900/50 via-emerald-900/50 to-teal-900/50 backdrop-blur-xl rounded-3xl p-12 md:p-20 text-center border border-white/10">
              <Clock className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AVAILABLE 24/7
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Don't wait! Chat with us on WhatsApp now and get instant responses.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/212647267470", "_blank")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-lg font-semibold group"
              >
                <span className="flex items-center">
                  <MessageCircle className="mr-2 w-6 h-6" />
                  Start Chatting Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
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
                  <MessageCircle className="w-4 h-4 mr-2" />
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