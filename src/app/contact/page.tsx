'use client'
import React, { useState } from 'react'
import Navbar from '../navbar/page'
import emailjs from '@emailjs/browser'
import Myfooter from '../myfooter/page'

const ContactPage = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'service_rb603', // replace with your EmailJS Service ID
        'template_o5uazbl', // replace with your EmailJS Template ID
        formData,
        'gJ7SQmiozgLyTONy1'   // replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('success')
          setFormData({ name: '', email: '', message: '' })
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
              <span className="text-orange-500">{'{'}</span> Contact Me <span className="text-orange-500">{'}'}</span>
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600">
              Whatever your project is about, I am here to help.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-2/3 mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex flex-wrap -m-2">

              {/* Name */}
              <div className="p-2 w-1/2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-300"
                />
              </div>

              {/* Email */}
              <div className="p-2 w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 transition duration-300"
                />
              </div>

              {/* Message */}
              <div className="p-2 w-full">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 h-40 transition duration-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </button>
              </div>

              {/* Status Messages */}
              <div className="p-2 w-full text-center">
                {status === 'success' && (
                  <p className="text-green-500 font-medium">✅ Sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 font-medium">❌ Failed to send. Try again.</p>
                )}
              </div>

              {/* Contact Info */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a
                  className="text-orange-500 font-medium cursor-pointer hover:underline"
                  onClick={() => window.open("mailto:rahulbhardwajthestar58@gmail.com")}
                >
                  rahulbhardwajthestar58@gmail.com
                </a>
                <p className="leading-normal my-5 text-gray-600">
                  Bakshi Ka Talab
                  <br /> Lucknow (226201) UP, INDIA
                </p>
                <span className="inline-flex justify-center gap-4 text-gray-500">
                  <a className="hover:text-blue-500 cursor-pointer">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-blue-500 cursor-pointer">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="hover:text-orange-500 cursor-pointer">
                    <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="hover:text-orange-500 cursor-pointer">
                    <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Myfooter />
    </div>
  )
}

export default ContactPage
