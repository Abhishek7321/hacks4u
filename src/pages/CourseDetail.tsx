import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Play, CheckCircle } from 'lucide-react';
import { featuredCourses } from '../data/mockData';

export default function CourseDetail() {
  const { id } = useParams();
  const course = featuredCourses.find(c => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Info */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <div className="flex items-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt={course.instructor}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">{course.instructor}</p>
              <p className="text-sm text-gray-600">Professional Instructor</p>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-4 shadow-lg">
                <Play className="h-8 w-8 text-blue-600" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About This Course</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.objectives?.map((objective, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="space-y-4">
              {course.curriculum?.map((lesson, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {lesson.is_preview && (
                        <Play className="h-4 w-4 text-blue-600 mr-2" />
                      )}
                      <span>{lesson.title}</span>
                    </div>
                    <span className="text-sm text-gray-600">{lesson.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg sticky top-8">
            <div className="text-3xl font-bold mb-4">${course.price}</div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 hover:bg-blue-700 transition-colors">
              Buy Now
            </button>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2">{course.rating} course rating</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="ml-2">30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="ml-2">Full lifetime access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}