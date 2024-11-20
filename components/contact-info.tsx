import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["info@codewhiz.co", "support@codewhiz.co"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (954) 901-8187"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["7019 Stirling Rd.", "Davie, FL 33314"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Weekend: By Appointment"],
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {contactInfo.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="flex items-start gap-4 p-6 rounded-lg bg-black/20 border border-green-500/20"
          >
            <div className="rounded-full p-3 bg-green-500/10">
              <Icon className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium text-white">{item.title}</h3>
              <div className="mt-1 space-y-1">
                {item.details.map((detail, index) => (
                  <p key={index} className="text-sm text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}