export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  thumbnail: string;
  category: string;
  description: string;
  objectives: string[];
  curriculum: Lesson[];
  reviews: Review[];
  preview_video?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  video_url?: string;
  is_preview: boolean;
}

export interface Review {
  id: string;
  user_name: string;
  rating: number;
  content: string;
  created_at: string;
  avatar: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'student' | 'instructor';
  created_at: string;
}

export interface CartItem {
  course_id: string;
  price: number;
}