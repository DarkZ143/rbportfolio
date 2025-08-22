"use client";

import React from "react";
import { Wrench, Clock } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      {/* Animated Wrench Icon */}
      <Wrench className="w-16 h-16 text-blue-500 mb-6 animate-spin-slow" />

      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Website Under Maintenance
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-600 mb-6">
        We’re performing some scheduled maintenance.  
        Please check back soon 🚧
      </p>

      {/* Small Note */}
      <div className="flex items-center text-sm text-gray-500">
        <Clock className="w-4 h-4 mr-2" />
        Expected to be back shortly
      </div>
    </div>
  );
}
