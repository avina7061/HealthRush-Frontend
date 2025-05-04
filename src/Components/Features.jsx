import React from "react";
import {
  Pill,
  Guitar as Hospital,
  Ambulance,
  AlertTriangle,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Healthcare Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive healthcare solutions designed to provide you
            with the best medical assistance whenever and wherever you need it.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Medicine Suggestion"
            description="Get personalized medicine recommendations based on your symptoms and medical history."
            icon={Pill}
            href="/MedicieneSuggestion"
          />
          <FeatureCard
            title="Hospital Suggestion"
            description="Find the best hospitals near you with specialties matching your healthcare needs."
            icon={Hospital}
            href="/HospitalSuggestion"
          />
          <FeatureCard
            title="Book Ambulance"
            description="Request emergency ambulance services with real-time tracking and ETA updates."
            icon={Ambulance}
            href="/Home"
          />
          <FeatureCard
            title="SOS Alert"
            description="Send immediate emergency alerts to healthcare providers and emergency contacts."
            icon={AlertTriangle}
            href="#"
            isButton={true}
            buttonColor="bg-red-600 hover:bg-red-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
