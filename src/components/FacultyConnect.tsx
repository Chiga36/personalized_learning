import React, { useState } from 'react';
import { Search, User } from 'lucide-react';

const facultyList = {
  mathematics: [
    { name: 'Dr. Sarah Johnson', expertise: 'Advanced Calculus', rating: 4.8 },
    { name: 'Prof. Michael Chen', expertise: 'Applied Mathematics', rating: 4.9 }
  ],
  science: [
    { name: 'Dr. Emily Williams', expertise: 'Physics', rating: 4.7 },
    { name: 'Prof. David Brown', expertise: 'Chemistry', rating: 4.6 }
  ]
};

const FacultyConnect = () => {
  const [subject, setSubject] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = facultyList[subject.toLowerCase() as keyof typeof facultyList] || [];
    setSearchResults(results);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Connect with Faculty</h1>
      
      <form onSubmit={handleSearch} className="max-w-xl">
        <div className="flex gap-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject (e.g., Mathematics, Science)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {searchResults.map((faculty, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold">{faculty.name}</h3>
                <p className="text-sm text-gray-600">{faculty.expertise}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600">{faculty.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyConnect;