import React, { useState } from 'react';
import { Heart, MessageSquare, Calendar, Search, User } from 'lucide-react';

const facultyList = {
  anxiety: [
    { name: 'Dr. Sarah Johnson', expertise: 'Anxiety & Stress Management', rating: 4.8 },
    { name: 'Prof. Michael Chen', expertise: 'Behavioral Therapy', rating: 4.9 }
  ],
  depression: [
    { name: 'Dr. Emily Williams', expertise: 'Clinical Psychology', rating: 4.7 },
    { name: 'Prof. David Brown', expertise: 'Mental Health Counseling', rating: 4.6 }
  ],
  stress: [
    { name: 'Dr. Lisa Parker', expertise: 'Stress Management', rating: 4.8 },
    { name: 'Prof. James Wilson', expertise: 'Mindfulness Training', rating: 4.7 }
  ]
};

const MentalWellness = () => {
  const [concern, setConcern] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple keyword matching for faculty recommendations
    const keywords = concern.toLowerCase().split(' ');
    let results: any[] = [];
    
    keywords.forEach(word => {
      if (facultyList[word as keyof typeof facultyList]) {
        results = [...results, ...facultyList[word as keyof typeof facultyList]];
      }
    });
    
    // Remove duplicates if any
    results = Array.from(new Set(results));
    setSearchResults(results);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Mental Wellness Support</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Share Your Concerns</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              placeholder="Tell us what's on your mind... (e.g., anxiety, stress, depression)"
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Get Support
            </button>
          </form>

          {searchResults.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Faculty</h3>
              <div className="space-y-4">
                {searchResults.map((faculty, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">{faculty.name}</p>
                      <p className="text-sm text-gray-600">{faculty.expertise}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600">{faculty.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recommended Exercises</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-red-100 p-3 rounded-lg">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Mindful Breathing</p>
                <p className="text-sm text-gray-600">5-minute guided meditation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Journaling Exercise</p>
                <p className="text-sm text-gray-600">Express your thoughts and feelings</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Weekly Check-in</p>
                <p className="text-sm text-gray-600">Schedule a session with a counselor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalWellness;