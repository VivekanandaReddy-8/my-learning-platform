import React from 'react';

const course = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp',
    description: 'Master React, Node.js, Express, and MongoDB from scratch with hands-on projects.',
    instructor: 'Dr. Angela Vance',
    duration: '12 Weeks',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller'
  },
  {
    id: 2,
    title: 'UI/UX Design Masterclass & Research',
    description: 'Learn modern Figma workflows, wireframing, user testing, and high-fidelity prototyping.',
    instructor: 'Marcus Chen',
    duration: '8 Weeks',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    tag: 'Popular'
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning with Python',
    description: 'Dive deep into Pandas, NumPy, Scikit-Learn, and build predictive AI models.',
    instructor: 'Dr. Sarah Jenkins',
    duration: '10 Weeks',
    price: '$99.99',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    tag: 'Advanced'
  },
  {
    id: 4,
    title: 'Digital Marketing & Growth Hacking 2026',
    description: 'Master SEO, social media ad campaigns, email funnels, and conversion rate optimization.',
    instructor: 'Liam O’Connor',
    duration: '6 Weeks',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending'
  }
];

export default function CourseList() {
  return (
    <section id="courses" className="py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
            World-Class Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Hand-crafted professional courses designed to accelerate your career and teach in-demand technical skills.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Course Image & Badge */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                    {course.tag}
                  </span>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
                    <span>{course.duration}</span>
                    <span className="text-blue-600 font-bold text-base">{course.price}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {course.description}
                  </p>

                  <div className="text-xs text-gray-500 font-medium pt-3 border-t border-gray-100">
                    Instructor: <span className="text-gray-800 font-semibold">{course.instructor}</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="p-6 pt-0">
                <button className="w-full py-3 px-4 bg-blue-50 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}