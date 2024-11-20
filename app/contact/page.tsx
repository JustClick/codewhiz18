import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 hero-gradient animate-glow" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-black/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
                <p className="mt-4 text-lg text-gray-300">
                  Reach out to us through any of these channels or fill out the form.
                </p>
              </div>
              <ContactInfo />
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 rounded-full bg-black/20 border border-green-500/20 text-gray-300 hover:bg-green-500/10 hover:border-green-500/40 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-black/40 border-green-500/20 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                <p className="mt-2 text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-green-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.873051659907!2d-80.23800542414567!3d26.0476211836221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a9f11b2012f1%3A0x5e66a623f8fe4f23!2s7019%20Stirling%20Rd%2C%20Davie%2C%20FL%2033314!5e0!3m2!1sen!2sus!4v1710644166099!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}