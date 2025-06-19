export const mockBooks = [
  {
    id: 1,
    title: "The Great Entrepreneur",
    author: "John Smith",
    description: "A compelling story about building businesses from scratch and overcoming challenges in the modern economy.",
    genre: "Business",
    available: true,
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-15",
    rating: 4.5
  },
  {
    id: 2,
    title: "Digital Innovation",
    author: "Sarah Johnson",
    description: "Exploring the future of technology and how digital transformation is reshaping industries worldwide.",
    genre: "Technology",
    available: true,
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-12",
    rating: 4.2
  },
  {
    id: 3,
    title: "Mindful Leadership",
    author: "Michael Brown",
    description: "Learn the art of conscious leadership and how to inspire teams while maintaining work-life balance.",
    genre: "Leadership",
    available: false,
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-10",
    rating: 4.8
  },
  {
    id: 4,
    title: "Creative Problem Solving",
    author: "Lisa Davis",
    description: "Innovative approaches to tackle complex challenges using creative thinking and systematic methodologies.",
    genre: "Creativity",
    available: true,
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-08",
    rating: 4.3
  },
  {
    id: 5,
    title: "Sustainable Future",
    author: "David Wilson",
    description: "Understanding environmental challenges and exploring sustainable solutions for a better tomorrow.",
    genre: "Environment",
    available: true,
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-05",
    rating: 4.6
  },
  {
    id: 6,
    title: "Data Science Mastery",
    author: "Emma Taylor",
    description: "Complete guide to data analytics, machine learning, and artificial intelligence for beginners and experts.",
    genre: "Technology",
    available: true,
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-03",
    rating: 4.7
  },
  {
    id: 7,
    title: "The Art of Communication",
    author: "Robert Chen",
    description: "Master the skills of effective communication in personal and professional relationships.",
    genre: "Communication",
    available: false,
    image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2024-01-01",
    rating: 4.4
  },
  {
    id: 8,
    title: "Financial Wisdom",
    author: "Jennifer Martinez",
    description: "Smart strategies for personal finance, investing, and building long-term wealth.",
    genre: "Finance",
    available: true,
    image: "https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=400",
    addedDate: "2023-12-28",
    rating: 4.5
  }
];

export const featuredBooks = mockBooks.slice(0, 4);

export const genres = [
  'All',
  'Business',
  'Technology',
  'Leadership',
  'Creativity',
  'Environment',
  'Communication',
  'Finance'
];