import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Brain, 
  Dumbbell, 
  Briefcase,
  ChevronRight,
  Star,
  Shield,
  Trophy
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">EduGrowth</span>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Empower Your Learning Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join EduGrowth to unlock a world of personalized learning experiences. 
            Connect with expert faculty, engage in family learning, and nurture your mental wellness.
          </p>
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-semibold hover:bg-indigo-700 flex items-center gap-2 mx-auto"
          >
            Let's Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose EduGrowth?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Learning</h3>
            <p className="text-gray-600">Tailored educational paths that adapt to your unique learning style and pace.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Connect with qualified faculty members who are passionate about your success.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Holistic Growth</h3>
            <p className="text-gray-600">Focus on both academic excellence and personal well-being for complete development.</p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Basic Learning</h3>
                <p className="text-gray-600">Fundamental courses designed to build a strong educational foundation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Faculty Connect</h3>
                <p className="text-gray-600">One-on-one sessions with experienced educators and mentors.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Learning</h3>
                <p className="text-gray-600">Inclusive programs that involve the whole family in the learning process.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Dumbbell className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mental Wellness</h3>
                <p className="text-gray-600">Programs focused on maintaining mental health and emotional balance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Path</h3>
                <p className="text-gray-600">Career guidance and skill development for professional growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of learners who are already growing with us.</p>
          <button 
            onClick={() => navigate('/login')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-gray-100 flex items-center gap-2 mx-auto"
          >
            Let's Go <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;