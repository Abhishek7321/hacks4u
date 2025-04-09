import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our learning platform. We are dedicated to providing high-quality education
          and empowering learners worldwide to achieve their goals.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To make quality education accessible to everyone, everywhere, by providing
              engaging and effective online learning experiences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the world's leading platform for online education, fostering a
              community of lifelong learners and innovators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;