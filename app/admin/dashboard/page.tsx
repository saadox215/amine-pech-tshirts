"use client"

import { useState, useEffect } from "react"
import { 
  ShoppingBag, TrendingUp, Users, Package, 
  DollarSign, ArrowUpRight, ArrowDownRight, 
  Plus, Edit, Trash2, Eye, Search, Filter,
  BarChart3, PieChart, Activity, Clock,
  CheckCircle, AlertCircle, XCircle, Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data
const recentOrders = [
  { id: "ORD001", customer: "Ahmed B.", product: "Urban Vibes Tee", amount: 299, status: "completed", date: "2024-01-20" },
  { id: "ORD002", customer: "Fatima Z.", product: "Minimalist Classic", amount: 249, status: "processing", date: "2024-01-20" },
  { id: "ORD003", customer: "Youssef M.", product: "Tech Future", amount: 399, status: "pending", date: "2024-01-19" },
  { id: "ORD004", customer: "Sara K.", product: "Artistic Expression", amount: 349, status: "completed", date: "2024-01-19" },
  { id: "ORD005", customer: "Omar L.", product: "Retro Wave", amount: 279, status: "cancelled", date: "2024-01-18" },
]

const products = [
  { id: 1, name: "Urban Vibes Tee", stock: 45, sold: 124, price: 299, category: "Streetwear", status: "active" },
  { id: 2, name: "Minimalist Classic", stock: 32, sold: 89, price: 249, category: "Casual", status: "active" },
  { id: 3, name: "Tech Future", stock: 8, sold: 167, price: 399, category: "Tech", status: "low-stock" },
  { id: 4, name: "Artistic Expression", stock: 0, sold: 156, price: 349, category: "Art", status: "out-of-stock" },
]

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    {
      title: "Total Revenue",
      value: "45,280 MAD",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "purple"
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
      color: "pink"
    },
    {
      title: "Active Customers",
      value: "1,243",
      change: "+23.1%",
      trend: "up",
      icon: Users,
      color: "orange"
    },
    {
      title: "Products Sold",
      value: "892",
      change: "-2.4%",
      trend: "down",
      icon: Package,
      color: "blue"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "processing": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "cancelled": return "bg-red-500/20 text-red-400 border-red-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { text: "Out of Stock", color: "bg-red-500/20 text-red-400 border-red-500/30" }
    if (stock < 10) return { text: "Low Stock", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" }
    return { text: "In Stock", color: "bg-green-500/20 text-green-400 border-green-500/30" }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
          }}
        />
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-[2px] group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AP</span>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Admin Dashboard
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-seed-400 hover:text-seed-400">
              <Activity className="w-5 h-5" />
              </Button>
              <Link href="/">
              <Button
                variant="outline"
                className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent border-seed-400 border-seed-400"
              >
                <Home className="w-4 h-4 mr-2 font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" />
                Back to Store
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Dashboard Overview
            </span>
          </h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your store today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                stat.color === "purple" ? "from-purple-600/20 to-transparent" :
                stat.color === "pink" ? "from-pink-600/20 to-transparent" :
                stat.color === "orange" ? "from-orange-600/20 to-transparent" :
                "from-blue-600/20 to-transparent"
              } opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <CardContent className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${
                    stat.color === "purple" ? "from-purple-500/20 to-purple-600/20" :
                    stat.color === "pink" ? "from-pink-500/20 to-pink-600/20" :
                    stat.color === "orange" ? "from-orange-500/20 to-orange-600/20" :
                    "from-blue-500/20 to-blue-600/20"
                  }`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className={`${
                    stat.trend === "up" ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"
                  }`}>
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Recent Orders</CardTitle>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    <Clock className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10 hover:bg-white/5">
                      <TableHead className="text-gray-400">Order ID</TableHead>
                      <TableHead className="text-gray-400">Customer</TableHead>
                      <TableHead className="text-gray-400">Product</TableHead>
                      <TableHead className="text-gray-400">Amount</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id} className="border-white/10 hover:bg-white/5 transition-colors">
                        <TableCell className="font-mono text-purple-400">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell className="font-semibold">{order.amount} MAD</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status === "completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                            {order.status === "processing" && <Clock className="w-3 h-3 mr-1" />}
                            {order.status === "pending" && <AlertCircle className="w-3 h-3 mr-1" />}
                            {order.status === "cancelled" && <XCircle className="w-3 h-3 mr-1" />}
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-400">{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Charts */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <Package className="w-4 h-4 mr-2" />
                  Manage Inventory
                </Button>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Sales Chart Placeholder */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center justify-between">
                  Sales Overview
                  <PieChart className="w-5 h-5 text-purple-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <TrendingUp className="w-16 h-16 text-purple-400" />
                    </div>
                    <p className="text-gray-400">Sales are up 23% this week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Management */}
        <Card className="mt-8 bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader className="border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl font-bold">Product Management</CardTitle>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-500 w-64"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="low-stock">Low Stock</SelectItem>
                    <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-white/5">
                  <TableHead className="text-gray-400">Product</TableHead>
                  <TableHead className="text-gray-400">Category</TableHead>
                  <TableHead className="text-gray-400">Price</TableHead>
                  <TableHead className="text-gray-400">Stock</TableHead>
                  <TableHead className="text-gray-400">Sold</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => {
                  const stockStatus = getStockStatus(product.stock)
                  return (
                    <TableRow key={product.id} className="border-white/10 hover:bg-white/5 transition-colors">
                      <TableCell className="font-semibold">{product.name}</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {product.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.price} MAD</TableCell>
                      <TableCell>
                        <span className={product.stock < 10 ? "text-yellow-400" : "text-white"}>
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell className="text-green-400">{product.sold}</TableCell>
                      <TableCell>
                        <Badge className={stockStatus.color}>
                          {stockStatus.text}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}