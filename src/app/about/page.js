import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Heart, Target, BookOpen, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] h-screen flex items-center">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#60A5FA]/30 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#93C5FD]/20 rounded-full translate-x-20 translate-y-20 animate-pulse"></div>

        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 z-10">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
              Welcome to Lumina Learning Center
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-lg mx-auto lg:mx-0">
              Nurturing curious minds and inspiring excellence in every child.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-6 flex-wrap">
              <Button className="bg-white text-[#1E3A8A] hover:bg-[#3B82F6] hover:text-white px-8 py-4 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                Apply Now
              </Button>
              <Button className="bg-[#1E3A8A] text-white hover:bg-[#3B82F6] px-8 py-4 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                Schedule a Tour
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 relative h-96 w-full">
            <Image
              src="/hero-school.webp"
              alt="Happy kids learning"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Story</h2>
            <p className="mt-4 text-gray-600 text-lg">
              Lumina Learning Center was founded to create a nurturing, inspiring, and engaging space for young learners.
              Our approach balances academic excellence with creativity, curiosity, and character development.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-[#1E3A8A]">Humble Beginnings</h3>
              <p className="mt-3 text-gray-600">
                Starting with a small group of eager students and passionate educators, we prioritized curiosity, creativity, and foundational learning.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/early-school.webp"
                alt="School in early days"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/growth.webp"
                alt="School growth"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#3B82F6]">Expanding Horizons</h3>
              <p className="mt-3 text-gray-600">
                Our campus grew with innovative programs and a reputation for nurturing academic and personal growth in students.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-[#1E3A8A]">Vision for the Future</h3>
              <p className="mt-3 text-gray-600">
                We integrate modern teaching methods and technology to prepare students for tomorrow while fostering creativity, empathy, and responsibility.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/future.webp"
                alt="Future vision"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-[#60A5FA]/20 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Mission & Values</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            At Lumina Learning Center, we inspire students to explore, create, and lead with confidence, compassion, and integrity.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "Provide a nurturing and inspiring environment where students flourish academically, socially, and emotionally." },
              { icon: Award, title: "Excellence", desc: "Encourage students to achieve their highest potential through curiosity and hard work." },
              { icon: Heart, title: "Compassion", desc: "Foster empathy, kindness, and collaboration within our student community." },
              { icon: CheckCircle, title: "Integrity", desc: "Uphold honesty, responsibility, and ethical conduct in every endeavor." },
              { icon: BookOpen, title: "Knowledge", desc: "Inspire a lifelong love of learning and discovery in every student." },
              { icon: Lightbulb, title: "Innovation", desc: "Encourage creativity, problem-solving, and forward-thinking approaches." },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center bg-white rounded-lg">
                  <div className="flex justify-center mb-4">
                    <item.icon className="h-12 w-12 text-[#1E3A8A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1E3A8A]">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Leadership Team</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the passionate educators who guide Lumina Learning Center’s mission.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { img: "/principal.jpg", name: "Dr. Jennifer Williams", role: "Principal", desc: "Leading Lumina Learning Center with vision, dedication, and 20+ years of experience." },
              { img: "/vice-principal.webp", name: "Dr. Marcus Johnson", role: "Vice Principal", desc: "Oversees academic programs and student development with care and dedication." },
              { img: "/dean.png", name: "Ms. Sophia Chen", role: "Dean of Students", desc: "Creates a positive culture and supports student growth and success." },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden p-0 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
                <div className="h-64 bg-[#60A5FA]/20">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-[#1E3A8A]">{member.name}</h3>
                  <p className="text-sm text-[#3B82F6]">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1E3A8A]">Our Campus Facilities</h2>
            <p className="mt-4 text-gray-600">
              State-of-the-art classrooms, labs, library, and athletic facilities to enrich learning.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
            {[
              { img: "/classroom.jpg", title: "Modern Classrooms", desc: "Interactive and tech-enabled learning spaces." },
              { img: "/labs.webp", title: "Science Labs", desc: "Hands-on experiments with modern equipment." },
              { img: "/library.jpg", title: "Library & Media Center", desc: "Vast resources for research and learning." },
              { img: "/athletic.jpg", title: "Athletic Facilities", desc: "Sports and fitness spaces for holistic development." },
            ].map((facility, index) => (
              <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={facility.img}
                  alt={facility.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-[#1E3A8A]/80 w-full rounded-b-xl">
                  <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                  <p className="text-white/90">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="bg-[#1E3A8A] py-28">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white">Join the Lumina Community</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Apply now or schedule a tour to experience our inspiring learning environment.
          </p>
          <div className="mt-10 flex justify-center gap-6 flex-wrap">
            <Button className="bg-[#3B82F6] text-white hover:bg-white hover:text-[#1E3A8A] px-8 py-3 font-bold rounded-lg shadow-lg transition-all">
              Apply Now
            </Button>
            <Button className="bg-white text-[#1E3A8A] hover:bg-[#3B82F6] px-8 py-3 font-bold rounded-lg shadow-lg transition-all">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
