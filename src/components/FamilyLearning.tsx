import React from 'react';
import { GraduationCap, Book, Award } from 'lucide-react';

const FamilyLearning = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Family Learning History</h1>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Father - John Doe Sr.</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Book className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Master's in Business Administration</p>
                <p className="text-sm text-gray-600">Harvard Business School, 2005</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Award className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Professional Certification</p>
                <p className="text-sm text-gray-600">Project Management Professional (PMP)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Mother - Jane Doe</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Book className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Ph.D. in Psychology</p>
                <p className="text-sm text-gray-600">Stanford University, 2008</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Award className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium">Research Publications</p>
                <p className="text-sm text-gray-600">15+ papers in Clinical Psychology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyLearning;