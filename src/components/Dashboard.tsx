import React from 'react';
import { BookOpen, Brain, Activity, Trophy, TrendingUp } from 'lucide-react';

interface DashboardProps {
  userName?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userName = 'User' }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userName}!</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Learning Progress</p>
              <p className="text-xl font-semibold">78%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Brain className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Mental Wellness</p>
              <p className="text-xl font-semibold">Good</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Courses</p>
              <p className="text-xl font-semibold">4</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Today's Learning</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Math"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium">Mathematics in Daily Life</p>
                <p className="text-sm text-gray-600">Continue where you left off</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Science"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <p className="font-medium">Science Experiments</p>
                <p className="text-sm text-gray-600">New activity available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Skill Development</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span>Problem Solving</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>Critical Thinking</span>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;