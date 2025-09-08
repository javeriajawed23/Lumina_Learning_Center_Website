import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              We&apos;d love to hear from you. Reach out with any questions
              about our programs or admissions process at Lumina Learning Center.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We&apos;re here to answer your questions and provide the
                information you need about Lumina Learning Center.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <address className="mt-2 not-italic text-gray-600">
                      123 Education Lane
                      <br />
                      Anytown, ST 12345
                      <br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-2 text-gray-600">
                      Main Office: (555) 123-4567
                      <br />
                      Admissions: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-2 text-gray-600">
                      General Inquiries: info@luminalearning.edu
                      <br />
                      Admissions: admissions@luminalearning.edu
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office Hours
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Monday - Friday: 8:00 AM - 4:30 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM (Admissions Office)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Send Us a Message
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <Input
                          id="first-name"
                          name="first-name"
                          placeholder="Enter your first name..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <Input
                          id="last-name"
                          name="last-name"
                          placeholder="Enter your last name..."
                          type="text"
                          required
                          className="mt-1 h-11"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter a subject..."
                        required
                        className="mt-1 h-11"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={8}
                        placeholder="Enter your message here..."
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-base font-bold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
