import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Palette,
  Calculator,
  Globe,
  Code,
  Microscope,
  Music,
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] h-[80vh] flex items-center overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#60A5FA]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#93C5FD]/20 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-6 z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-snug">
              Academic Excellence at Lumina Learning Center
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90">
              Explore our innovative programs designed to develop critical thinking, creativity, and lifelong learning skills in every student.
            </p>
            <div className="mt-10 flex justify-center lg:justify-start gap-6 flex-wrap">
              <Button className="bg-white text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white px-8 py-4 font-semibold rounded-lg shadow-md transition-all transform hover:-translate-y-1">
                View Programs
              </Button>
              <Button className="bg-[#1E3A8A] text-white hover:bg-[#3B82F6] px-8 py-4 font-semibold rounded-lg shadow-md transition-all transform hover:-translate-y-1">
                Request Info
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Academic Philosophy */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E3A8A] sm:text-4xl text-center">
              Our Academic Philosophy
            </h2>
            <p className="mt-6 text-lg text-gray-600 text-center">
              At Lumina Learning Center, we believe that education should be both challenging and engaging. Our academic program is designed to:
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Foster critical thinking through inquiry-based learning and problem-solving activities.",
                "Develop strong communication skills through writing, speaking, and collaborative projects.",
                "Encourage creativity and innovation across all subject areas.",
                "Prepare students for college and beyond with rigorous coursework and personalized guidance."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[#1E3A8A]">
                      <span className="text-sm font-medium">{idx + 1}</span>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-600">
                    <span className="font-medium text-gray-900">{item.split(" ")[0]}</span>{" "}
                    {item.replace(item.split(" ")[0], "")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E3A8A] sm:text-4xl">
              Our Academic Programs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our comprehensive educational programs designed for each stage of development.
            </p>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="elementary" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-full p-1 rounded-xl bg-blue-100">
                <TabsTrigger
                  value="elementary"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                >
                  Elementary
                </TabsTrigger>
                <TabsTrigger
                  value="middle"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                >
                  Middle
                </TabsTrigger>
                <TabsTrigger
                  value="high"
                  className="data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white py-2 text-base font-semibold cursor-pointer rounded-lg"
                >
                  High
                </TabsTrigger>
              </TabsList>

              {[
                {
                  value: "elementary",
                  title: "Elementary School (Grades K-5)",
                  description: "Strong foundations in literacy, numeracy, and creative skills through engaging hands-on activities.",
                  image: "/elementary-program.jpg",
                  items: [
                    { icon: BookOpen, label: "Balanced literacy" },
                    { icon: Calculator, label: "Singapore Math" },
                    { icon: Palette, label: "Arts integration" },
                    { icon: Globe, label: "Foreign language introduction" }
                  ]
                },
                {
                  value: "middle",
                  title: "Middle School (Grades 6-8)",
                  description: "Building critical thinking, independence, and exploration of personal interests.",
                  image: "/middle-program.jpg",
                  items: [
                    { icon: BookOpen, label: "Advanced literature" },
                    { icon: Microscope, label: "Hands-on science" },
                    { icon: Code, label: "Technology & coding" },
                    { icon: Globe, label: "Foreign language options" }
                  ]
                },
                {
                  value: "high",
                  title: "High School (Grades 9-12)",
                  description: "Preparing students for college and leadership opportunities with rigorous academics.",
                  image: "/high-program.jpg",
                  items: [
                    { icon: GraduationCap, label: "College preparatory curriculum" },
                    { icon: BookOpen, label: "Advanced Placement courses" },
                    { icon: Microscope, label: "Research opportunities" },
                    { icon: Globe, label: "Global studies program" }
                  ]
                }
              ].map((program) => (
                <TabsContent key={program.value} value={program.value} className="mt-6">
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={program.image}
                        alt={program.title}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                      <ul className="space-y-2">
                        {program.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            <li key={idx} className="flex items-center">
                              <Icon className="mr-2 h-5 w-5 text-[#1E3A8A]" />
                              <span>{item.label}</span>
                            </li>
                          );
                        })}
                      </ul>
                      <Button className="w-fit bg-[#1E3A8A] hover:bg-[#3B82F6] text-white">Learn More</Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1E3A8A] sm:text-4xl">Curriculum Areas</h2>
            <p className="mt-4 text-lg text-gray-600">A well-rounded education across multiple disciplines.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, title: "Language Arts", description: "Developing reading, writing, speaking, and listening skills." },
              { icon: Calculator, title: "Mathematics", description: "Critical thinking and problem solving through numbers." },
              { icon: Microscope, title: "Science", description: "Hands-on experiments to explore the natural world." },
              { icon: Palette, title: "Arts", description: "Fostering creativity in visual and performing arts." },
              { icon: Music, title: "Music", description: "Musical appreciation and performance." },
              { icon: Globe, title: "Social Studies", description: "Understanding history, cultures, and society." },
              { icon: Code, title: "Technology", description: "Introduction to coding and digital literacy." },
              { icon: GraduationCap, title: "Physical Education", description: "Promoting health, fitness, and teamwork." },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card key={idx} className="hover:scale-105 transition-transform rounded-xl shadow-lg">
                  <CardContent className="text-center p-6">
                    <Icon className="mx-auto h-10 w-10 text-[#1E3A8A]" />
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{card.title}</h3>
                    <p className="mt-2 text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A8A] sm:text-4xl">Academic Support</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide individual guidance, tutoring, and counseling to ensure each student thrives academically and personally.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { title: "Tutoring Programs", description: "Extra help in core subjects." },
              { title: "College Counseling", description: "Guidance for college selection and preparation." },
              { title: "Learning Resources", description: "Access to digital and physical learning tools." },
              { title: "Mentorship", description: "Personalized mentorship programs." },
            ].map((item, idx) => (
              <Card key={idx} className="max-w-xs hover:scale-105 transition-transform rounded-xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#1E3A8A] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold sm:text-5xl">Join Lumina Learning Center Today</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Provide your child with an exceptional education in a nurturing environment. Schedule a tour or contact us for more information.
          </p>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Button className="bg-white text-[#1E3A8A] hover:bg-[#3B82F6] hover:text-white px-8 py-4 font-bold rounded-xl shadow-lg">
              Schedule a Tour
            </Button>
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1E3A8A] px-8 py-4 font-bold rounded-xl shadow-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
