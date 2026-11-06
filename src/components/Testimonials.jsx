import React from 'react';

const Testimonials = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Frontend Developer at TechCorp',
    feedback: 'EduQuest transformed my career. The Web Development bootcamp gave me the exact hands-on portfolio projects I needed to land my dream job within 3 months!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'David Kim',
    role: 'UX Designer',
    feedback: 'The UI/UX Masterclass is phenomenal. Marcus explains complex user research concepts with crystal-clear clarity. Highly recommend to anyone stepping into design.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    role: 'Data Analyst',
    feedback: 'Fantastic instructors and engaging community support. The data science curriculum covers real-world datasets that prepared me for actual industry challenges.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full">
            Student Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Hear from alumni who transformed their careers and achieved their professional goals with EduQuest.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-50/70 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-base italic mb-6 leading-relaxed">
                  "{item.feedback}"
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/60">
                <img 
                  src={item.avatar} 
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                  <p className="text-xs text-blue-600 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}