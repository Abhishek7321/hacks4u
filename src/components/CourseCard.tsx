import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:transform hover:scale-105">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
          <div className="flex items-center mt-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-700 ml-1">{course.rating}</span>
            <span className="text-sm text-gray-500 ml-2">
              ({course.students.toLocaleString()} students)
            </span>
          </div>
          <div className="mt-3">
            <span className="text-lg font-bold text-gray-900">
              ${course.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}