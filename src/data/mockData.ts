import { Course, Category, Testimonial } from '../types';

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    price: 99.99,
    rating: 4.8,
    students: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Programming',
    description: 'Learn web development from scratch with this comprehensive course.'
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    instructor: 'Michael Chen',
    price: 89.99,
    rating: 4.7,
    students: 8500,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    category: 'Design',
    description: 'Master the art of creating beautiful and user-friendly interfaces.'
  },
  {
    id: '3',
    title: 'Digital Marketing Strategy',
    instructor: 'Emily Parker',
    price: 79.99,
    rating: 4.6,
    students: 12000,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Business',
    description: 'Learn modern digital marketing strategies and techniques.'
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Programming',
    icon: 'code'
  },
  {
    id: '2',
    name: 'Design',
    icon: 'palette'
  },
  {
    id: '3',
    name: 'Business',
    icon: 'briefcase'
  },
  {
    id: '4',
    name: 'Marketing',
    icon: 'trending-up'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Software Developer',
    content: 'The courses on Hacks For You helped me transition into tech. The quality of content is outstanding!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    id: '2',
    name: 'Lisa Wong',
    role: 'UX Designer',
    content: 'I learned everything I know about design from these courses. The instructors are amazing!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  }
];