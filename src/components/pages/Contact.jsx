import React, { useState } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Submit form
    console.log("Contact form submitted:", formData);
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us for any queries, bookings, or support. 
          We're here to help you 24/7.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <ApperIcon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">24/7 Helpline</p>
                  <p className="text-primary font-semibold">+91 9876543210</p>
                  <p className="text-gray-600">Emergency: +91 9876543211</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <ApperIcon name="MessageSquare" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">Quick booking and support</p>
                  <p className="text-primary font-semibold">+91 9876543210</p>
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    Start Chat
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <ApperIcon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">General inquiries</p>
                  <p className="text-primary font-semibold">info@ridenowconnect.com</p>
                  <p className="text-gray-600">Support: support@ridenowconnect.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <ApperIcon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    123 Business Center,<br />
                    Main Road, City Name,<br />
                    State - 123456, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Taxi Service:</span>
                <span className="text-gray-900 font-medium">24/7 Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Office Hours:</span>
                <span className="text-gray-900 font-medium">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer Support:</span>
                <span className="text-gray-900 font-medium">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <ApperIcon name="AlertTriangle" size={24} className="text-red-600" />
              <h3 className="text-lg font-semibold text-red-900">Emergency Contact</h3>
            </div>
            <p className="text-red-700 mb-2">For urgent assistance or emergency situations:</p>
            <p className="text-red-600 font-bold text-xl">+91 9876543211</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Full Name *"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Email Address *"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
              />
              <FormField
                label="Phone Number *"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <FormField
              label="Subject"
              type="select"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
            >
              <option value="">Select a subject</option>
              <option value="booking">Booking Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="complaint">Complaint</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </FormField>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Enter your message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-200"
              />
            </div>

            <Button type="submit" className="w-full">
              <ApperIcon name="Send" size={20} />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center">
            <ApperIcon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Interactive map would be integrated here</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "How do I book a taxi?",
              answer: "You can book through our website, mobile app, or by calling our 24/7 helpline."
            },
            {
              question: "What are your payment options?",
              answer: "We accept cash, UPI, credit/debit cards, and online banking."
            },
            {
              question: "Can I cancel my booking?",
              answer: "Yes, you can cancel up to 1 hour before pickup without any charges."
            },
            {
              question: "Do you provide outstation services?",
              answer: "Yes, we offer outstation services to destinations within 500 km."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;