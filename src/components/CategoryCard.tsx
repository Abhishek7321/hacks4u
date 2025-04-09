import React from 'react';
import { XIcon } from 'lucide-react';
import { Category } from '../types';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/courses?category=${category.name.toLowerCase()}`}
      className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-200">
        <XIcon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{category.name}</h3>
    </Link>
  );
}