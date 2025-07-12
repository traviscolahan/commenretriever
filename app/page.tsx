'use client'

import { useEffect } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { TrendingUp, ArrowRight, Gift } from 'lucide-react'
import { isSandboxEnvironment } from '@/lib/utils'
import Link from 'next/link'
import FeaturesCarousel from '@/components/FeaturesCarousel'
import Footer from '@/components/Footer'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const isInSandbox = isSandboxEnvironment()

  useEffect(() => {
    // Only redirect if we have a real user (not in sandbox)
    if (user && !loading) {
      console.log('🔄 User detected, redirecting to dashboard')
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C63FF]"></div>
      </div>
    )
  }

  // Only redirect if we have a real user (not in sandbox)
  if (user) {
    console.log('🔄 User exists, should redirect to dashboard')
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-[#E7E6FB]/30">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6C63FF]/5 to-[#A389F4]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#E7E6FB]/20 to-[#A389F4]/5 rounded-full blur-3xl"></div>
      </div>

{/* Header */}
     <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-[90px] lg:h-[90px] flex items-center">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full relative">
    {/* Logo + Brand text together */}
    <div className="flex items-center" style={{ marginLeft: '-12px' }}>
      <img 
        src="/commentretrieverlogo.png"
        alt="Comment Retriever Logo"
        className="w-24 h-24 lg:w-32 lg:h-32 object-contain drop-shadow-sm"
        style={{ marginRight: '-24px', marginTop: '-2px' }}
      />
      <h1 className="text-2xl font-bold text-[#1F1F1F]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        Comment Retriever
      </h1>
    </div>
    {/* Navigation on the right */}
    <div className="flex items-center space-x-4">
      <Link
        href="/signin"
        className="hidden sm:block text-[#2C2C2C] hover:text-[#1F1F1F] transition-colors font-bold"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        Sign In
      </Link>
      <Link
        href="/signup"
        className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#6C63FF] to-[#A389F4] text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-bold text-sm sm:text-base"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        Get Started
      </Link>
    </div>
  </div>
</header>

      

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#6C63FF] to-[#A389F4] rounded-2xl flex items-center justify-center shadow-xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1F1F] mb-6 leading-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Identify <span className="bg-gradient-to-r from-[#6C63FF] to-[#A389F4] bg-clip-text text-transparent">Sales Opportunities</span>
            <br />
            On Reddit
          </h1>
          
          <p className="text-xl text-[#2C2C2C] mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Monitor Reddit conversations in real time and get instant notifications when your target keywords appear in posts and comments. Turn discussions into sales opportunities before your competitors even notice.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#A389F4] text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              <span>Sign Up</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Plan Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#E7E6FB]/50 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF]/10 to-[#A389F4]/10 rounded-2xl flex items-center justify-center">
                <Gift className="w-8 h-8 text-[#6C63FF]" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Free to use. No credit card required.
            </h2>
            <p className="text-lg text-[#2C2C2C] leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Start monitoring and responding to leads today, no hidden fees, no risk.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-[#E7E6FB]/20 to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Everything you need to find customers
            </h2>
            <p className="text-xl text-[#2C2C2C] max-w-2xl mx-auto" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Powerful tools to monitor, track, and engage with potential customers on Reddit
            </p>
          </div>
          
          <FeaturesCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6C63FF] to-[#A389F4] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Ready to find your next customers?
          </h2>
          <p className="text-xl text-white/90 mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Start discovering sales opportunities hiding in plain sight on Reddit.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-[#6C63FF] font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            <span>Sign Up</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
