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
    <section
      id="contact"
      className="relative overflow-hidden py-14 sm:py-16 md:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72 md:h-96 md:w-96" />
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-highlight/5 blur-3xl sm:h-52 sm:w-52 md:h-64 md:w-64" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <span className="animate-fade-in text-xs font-medium uppercase tracking-wider text-secondary-foreground sm:text-sm">
            Get In Touch
          </span>

          <h2 className="mt-3 mb-4 animate-fade-in text-3xl font-bold leading-tight text-secondary-foreground animation-delay-100 sm:mt-4 sm:mb-6 sm:text-4xl md:text-5xl">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="mx-auto max-w-xl animate-fade-in text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Have a question, project idea, or just want to connect? Feel free to
            send me a message.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <div className="glass animate-fade-in rounded-2xl border border-primary/30 p-5 animation-delay-300 sm:rounded-3xl sm:p-6 md:p-8">
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
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
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:text-base"
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
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:text-base"
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
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary sm:text-base"
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
                  className={`flex items-start gap-3 rounded-xl border p-3 sm:p-4 ${
                    submitStatus.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  )}

                  <p className="text-xs leading-5 sm:text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in space-y-5 animation-delay-400 sm:space-y-6">
            <div className="glass rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8">
              <h3 className="mb-5 text-lg font-semibold sm:mb-6 sm:text-xl">
                Contact Information
              </h3>

              <div className="space-y-2 sm:space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-surface sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:h-12 sm:w-12">
                      <item.icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground sm:text-sm">
                        {item.label}
                      </div>

                      <div className="truncate text-sm font-medium sm:text-base">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl border border-primary/30 p-5 sm:rounded-3xl sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3 sm:mb-4">
                <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-500 sm:h-3 sm:w-3" />

                <span className="text-sm font-medium sm:text-base">
                  Open to Opportunities
                </span>
              </div>

              <p className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
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
