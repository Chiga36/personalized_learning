import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BookOpen, Star } from 'lucide-react';

const learningData = [
  { date: 'Mon', progress: 75 },
  { date: 'Tue', progress: 82 },
  { date: 'Wed', progress: 78 },
  { date: 'Thu', progress: 85 },
  { date: 'Fri', progress: 90 }
];

const BasicLearning = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Daily Learning Progress</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Learning Graph</h2>
            <LineChart className="w-5 h-5 text-gray-600" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={learningData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  dot={{ fill: '#6366f1', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Today's Achievements */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Today's Learning</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Applied Mathematics</p>
                <p className="text-sm text-gray-600">Learned about ratios in cooking recipes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Science Observation</p>
                <p className="text-sm text-gray-600">Documented plant growth experiment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicLearning;