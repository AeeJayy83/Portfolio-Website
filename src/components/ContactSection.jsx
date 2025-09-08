import { Instagram, Linkedin, Mail, MapPin, PhoneIcon, Send, Twitter } from "lucide-react"
import { cn } from "../libs/utils";
import { useToast } from "../hooks/use-toast.js";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);


        }, 1500)

    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In<span className="text-primary "> Touch</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 text-2xl font-semibold mb-6> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekaj0803@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        abhishekaj0803@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><PhoneIcon className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+91 9310362521"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 9310362521
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        New Delhi, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/abhishek-jain-782752299/" target="_blank"><Linkedin className=" hover:text-primary transition-colors" /></a>
                                <a href="https://x.com/AeeJayy83" target="_blank"><Twitter className=" hover:text-primary transition-colors" /></a>
                                <a href="https://www.instagram.com/abhi.jain.nayak/" target="_blank"><Instagram className=" hover:text-primary transition-colors" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form
                            action="https://formsubmit.co/abhishekaj0803@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    type="text"
                                    name="message"
                                    id="message"
                                    required
                                    className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" />
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full md:w-1/2 flex items-center justify-center gap-4 mx-auto mt-8")}>
                                {isSubmitting ? "Submitting..." : "Send Message"} <Send size={16} className="mt-1" />
                            </button>


                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}