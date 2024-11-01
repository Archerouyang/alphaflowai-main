'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Briefcase, MessageSquare, Clock, BarChart } from "lucide-react"

export default function LandingPage() {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false)
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const [interviewStarted, setInterviewStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState("")

  const startInterview = () => {
    setInterviewStarted(true)
    setCurrentQuestion("Tell me about yourself and why you're interested in this position.")
  }

  useEffect(() => {
    // Three.js background effect code (unchanged)
    // ...
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-cyan-900 dark:to-blue-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <a className="flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">Alphaflowai</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400" href="#features">Features</a>
              <a className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400" href="#about">About</a>
              <a className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400" href="#testimonials">Testimonials</a>
              <a className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400" href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsAuthDialogOpen(true)} className="hidden md:inline-flex px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Login / Register
            </button>
            <button onClick={() => setIsDemoDialogOpen(true)} className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Try Demo
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
            Master Your Interviews with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Prepare for your dream job with our cutting-edge AI-powered mock interview platform
          </p>
          <button onClick={() => setIsDemoDialogOpen(true)} className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Start Practicing Now <ChevronRight className="inline-block ml-2 h-4 w-4" />
          </button>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="features" 
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: "Industry-Specific", description: "Tailored questions for various job markets" },
              { icon: MessageSquare, title: "AI Feedback", description: "Instant, personalized performance evaluations" },
              { icon: Clock, title: "24/7 Availability", description: "Practice anytime, anywhere" },
              { icon: BarChart, title: "Progress Tracking", description: "Monitor your improvement over time" },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 mb-4 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="about" 
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Alphaflowai</h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Alphaflowai is a cutting-edge AI-driven startup focused on developing innovative applications that address real-world challenges. Our mission is to harness the power of artificial intelligence to create practical solutions tailored to specific domains and use cases.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          id="testimonials" 
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Software Engineer", quote: "Alphaflowai helped me ace my dream job interview. The AI feedback was spot-on!" },
              { name: "Michael T.", role: "Marketing Manager", quote: "I've never felt more prepared for interviews. This platform is a game-changer." },
              { name: "Emily R.", role: "Data Scientist", quote: "The industry-specific questions really helped me understand what to expect. Highly recommended!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          id="contact" 
          className="py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="grid gap-4">
              <div>
                <input id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <input id="email" type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div>
                <textarea id="message" placeholder="Enter your message" className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Send Message
              </button>
            </div>
          </form>
        </motion.section>
      </main>

      {isDemoDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">AI Mock Interview Demo</h2>
            {!interviewStarted ? (
              <div className="space-y-4">
                <p>Ready to start your mock interview? Click the button below to begin.</p>
                <button onClick={startInterview} className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Start Interview
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-semibold">Interviewer:</p>
                <p>{currentQuestion}</p>
                <textarea placeholder="Type your answer here..." className="w-full px-3 py-2 border rounded-md min-h-[100px]"></textarea>
                <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Submit Answer
                </button>
              </div>
            )}
            <button onClick={() => setIsDemoDialogOpen(false)} className="mt-4 w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              Close
            </button>
          </div>
        </div>
      )}

      {isAuthDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Login or Register</h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Login
              </button>
              <button className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                Register
              </button>
            </div>
            <button onClick={() => setIsAuthDialogOpen(false)} className="mt-4 w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-300 md:text-left">
            © 2023 Alphaflowai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}