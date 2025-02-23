import React from 'react';
import { Shield, Award, Users, Globe, CheckCircle, Lock } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary-700 py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=2000&q=80"
            alt="Laboratory"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                About PharmGuard AI
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-100">
                Revolutionizing pharmaceutical security through advanced AI and blockchain technology
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                To ensure the integrity and safety of the pharmaceutical supply chain by leveraging cutting-edge technology
                and creating a transparent, secure ecosystem for all stakeholders.
              </p>
            </AnimatedSection>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatedSection delay={0.2}>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mx-auto">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Security First</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Military-grade encryption and blockchain technology to protect sensitive data
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mx-auto">
                    <Globe className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Global Reach</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Connected network of verified pharmaceutical professionals worldwide
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mx-auto">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-gray-900">Community Driven</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Collaborative approach to maintaining supply chain integrity
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">100+</div>
                <div className="mt-2 text-primary-100">Countries Served</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10K+</div>
                <div className="mt-2 text-primary-100">Registered Companies</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1M+</div>
                <div className="mt-2 text-primary-100">Verifications</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">99.9%</div>
                <div className="mt-2 text-primary-100">Accuracy Rate</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-900">Ready to secure your supply chain?</h2>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-lg shadow">
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Get Started
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}