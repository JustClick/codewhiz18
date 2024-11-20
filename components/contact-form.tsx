"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = {
        name: (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value,
        email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
        subject: (e.currentTarget.elements.namedItem('subject') as HTMLInputElement).value,
        message: (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const errorMessage = error instanceof Error ? error.message : "Failed to send message";
      setError(`Error: ${errorMessage}. Please ensure all environment variables are properly configured (SENDGRID_API_KEY and CONTACT_EMAIL) and try again.`);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          required
          className="mt-2 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="mt-2 h-32 bg-black/20 border-green-500/20 text-white placeholder:text-gray-500"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold h-12 text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}