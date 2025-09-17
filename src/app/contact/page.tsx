'use client'
import React, { useState } from 'react'
import Navbar from '../navbar/page'
import emailjs from '@emailjs/browser'
import Myfooter from '../myfooter/page'
import Loader from '../comp/loader'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    emailjs
      .send(
        'service_rb603', // EmailJS Service ID
        'template_o5uazbl', // Template ID
        formData,
        'gJ7SQmiozgLyTONy1' // Public Key
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
      <Loader />
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-500 mb-4">
              <span className="text-orange-500">{'{ '}</span> 
              <span className="text-blue-600 bg-blue-100 px-4 py-1 rounded-xl shadow-sm">
               Contact Me{'  '}
              </span>
              <span className="text-orange-500">{'  }'}</span>
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600">
              Whatever your project is about, I am here to help.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-2/3 mx-auto bg-white shadow-xl shadow-blue-300 rounded-2xl p-8 border border-gray-100"
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
                  disabled={status === 'loading'}
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-200 hover:shadow-blue-400 hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
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
            </div>
          </form>
        </div>
      </section>
      <Myfooter />
    </div>
  )
}

export default ContactPage
