import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-stone-200 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Get In Touch</h1>
        <p className="text-muted-foreground mt-4 uppercase tracking-widest text-sm">Let's Discuss Your Project</p>
      </div>

      <div className="container px-4 md:px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-medium mb-8">Contact Information</h2>
            <div className="space-y-8">
              <Card className="p-6 border-none shadow-lg bg-primary text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-primary-foreground/80 mb-2">Srihari Sattu</p>
                    <a href="tel:+917893059814" className="text-xl font-bold hover:text-secondary transition-colors block">
                      +91 78930 59814
                    </a>
                  </div>
                </div>
              </Card>

              <div className="flex items-center gap-4 p-4 border rounded-lg">
                 <div className="p-3 bg-muted rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-serif font-bold mb-1">Email Us</h3>
                    <a href="mailto:hyd.landscape@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hyd.landscape@gmail.com
                    </a>
                 </div>
              </div>

               <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 text-lg font-bold" onClick={() => window.open('https://wa.me/917893059814', '_blank')}>
                 <MessageCircle className="w-6 h-6 mr-2" /> Chat on WhatsApp
               </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background border p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-medium mb-6">Send us a message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="h-12 bg-muted/30" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 ..." {...field} className="h-12 bg-muted/30" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project..." className="min-h-[150px] bg-muted/30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 uppercase tracking-widest font-bold">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
