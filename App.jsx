import React from 'react';
import Header from './components/Header';
import CourseList from './components/CourseList';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
      <Header />
      <CourseList />
      <Testimonials/>
       <Footer />
    </div>
  );
}

export default App;