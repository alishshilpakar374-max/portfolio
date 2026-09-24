import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "../components";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alishshilpakar374@gmail.com",
    href: "mailto:alishshilpakar374@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nepal",
    href: "https://www.google.com/maps/search/?api=1&query=Nepal",
    external: true,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+977 9766900173",
    href: "https://wa.me/9779766900173",
    external: true,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="animate-fade-in text-sm font-medium uppercase tracking-wider text-secondary-foreground">
            Get In Touch
          </span>

          <h2 className="mt-4 mb-6 animate-fade-in text-4xl font-bold text-secondary-foreground animation-delay-100 md:text-5xl">
            Let's build
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="animate-fade-in text-muted-foreground animation-delay-200">
            Have a question, project idea, or just want to connect? Feel free to
            send me a message.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="glass animate-fade-in rounded-3xl border border-primary/30 p-8 animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your idea..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 rounded-xl border p-4 ${
                    submitStatus.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0" />
                  )}

                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in space-y-6 animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="mb-6 text-xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-surface"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>

                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-3xl border border-primary/30 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                <span className="font-medium">Open to Opportunities</span>
              </div>

              <p className="text-sm text-muted-foreground">
                I'm always interested in connecting with other developers,
                working on interesting projects, and exploring new
                opportunities. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
