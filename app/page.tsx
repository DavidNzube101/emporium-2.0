import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import Footer from '@/components/reusable/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/emporium.png"
                alt="Emporium Logo"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {["Home", "Services", "Testimonials", "Projects", "About Us", "Blog", "Map", "Contact Us"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </Link>
              ))}
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="https://www.loanfasttrack.com/images/how-it-work-1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Working everyday with firms across the world
          </h1>
          <p className="text-xl md:text-2xl">
            We provide independent, expert advice.
          </p>
          {/* <br> */}
          {/* <br> */}
          <Link
          href='/onboarding'
          className="mt-10"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white bg-[#25a3d8] mt-10">
              Get Started 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[#25a3d8]">
                The very best guidance from our knowledgeable, friendly team
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                We provide expert financial advice, with over 25 years of experience we'll ensure you're getting the best guidance from the smartest people in the industry. For businesses and individuals you're always our top priority.
              </p>
              <p className="font-light text-lg">William Jenkins, Consultant</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://www.thinkmarkets.com/TMXWebsite/media/TMXWebsite/Popular-Forex-Trading-Strategies.webp?ext=.webp"
                alt="Team Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm text-gray-600 uppercase tracking-wide mb-2">Strategy and Professional</h2>
            <h3 className="text-4xl font-bold mb-4 text-primary">
              The optimum approach with your money
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our investment Committee brings decades of industry experience in bringing our investment approach, portfolio construction, and allocation advice.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Diverse Approaches", icon: "https://img.icons8.com/?size=100&id=VTyMyQFtkKWN&format=png&color=000000", description: "We implement Diverse investment planning aligned to our goals." },
              { title: "Flexible Team", icon: "https://img.icons8.com/?size=100&id=bvXtUDk0VrWr&format=png&color=000000", description: "A strong team equals better full solutions are always here to help." },
              { title: "Results Based", icon: "https://img.icons8.com/?size=100&id=TzJOFSzEgHqK&format=png&color=000000", description: "Our financial specialists ensure you get the optimum results." },
            ].map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-primary">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary text-[#25a3d8]">What we Offer</h2>
              <p className="text-lg text-gray-600 mb-8">
                We have built a strong reputation in the marketplace before and extend our brand, and broker our reputation for innovation. Our goal is to have open relations and implement the best solutions for our clients. We work with organizations and people in countries in academia and business.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">Our Services</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/images/loan_against.webp"
                alt="Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://st4.depositphotos.com/1062624/21496/i/450/depositphotos_214966524-stock-photo-physical-world-map-illustration-elements.jpg"
                alt="About"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">About Emporium</h2>
              <p className="text-lg text-gray-600">
                The Global International Review (GIR) lists Emporium as one of the top brokerages in the world and has done so every year since our foundation in 2008. We provide independent advice based on solid SWOT analysis, market research and years of experience. Our team of experts can help you make the right decisions and can give you the bigger picture with insights into a changing market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-24 text-white">
        <Image
          src="https://media.istockphoto.com/id/1413766111/photo/cheerful-mid-adult-business-woman-smiling-at-office.jpg?s=612x612&w=0&k=20&c=l3sntoOvUWypCazFpknMtzyoXd2rg3nLilLtXJ8PEeo="
          alt="Testimonial Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl font-light mb-8">
              "The results were clear, professional, and persuasive and the directors and advisors who have seen the materials loved them. They know what investors want!"
            </blockquote>
            <cite className="text-xl font-semibold">Smith Group, CFO</cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Get started in minutes
          </h2>
          <Link href="/onboarding">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full text-[#25a3d8]">
              Login to your account
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}