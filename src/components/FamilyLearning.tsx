// import React from 'react';
// import { GraduationCap, Book, Award } from 'lucide-react';

// const FamilyLearning = () => {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold text-gray-800">Family Learning History</h1>
      
//       <div className="space-y-6">
//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex items-center gap-4 mb-6">
//             <GraduationCap className="w-8 h-8 text-indigo-600" />
//             <h2 className="text-xl font-semibold">Father - John Doe Sr.</h2>
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <Book className="w-5 h-5 text-gray-600" />
//               <div>
//                 <p className="font-medium">Master's in Business Administration</p>
//                 <p className="text-sm text-gray-600">Harvard Business School, 2005</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <Award className="w-5 h-5 text-gray-600" />
//               <div>
//                 <p className="font-medium">Professional Certification</p>
//                 <p className="text-sm text-gray-600">Project Management Professional (PMP)</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-sm">
//           <div className="flex items-center gap-4 mb-6">
//             <GraduationCap className="w-8 h-8 text-indigo-600" />
//             <h2 className="text-xl font-semibold">Mother - Jane Doe</h2>
//           </div>
//           <div className="space-y-4">
//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <Book className="w-5 h-5 text-gray-600" />
//               <div>
//                 <p className="font-medium">Ph.D. in Psychology</p>
//                 <p className="text-sm text-gray-600">Stanford University, 2008</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
//               <Award className="w-5 h-5 text-gray-600" />
//               <div>
//                 <p className="font-medium">Research Publications</p>
//                 <p className="text-sm text-gray-600">15+ papers in Clinical Psychology</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyLearning;

import React, { useState } from 'react';
import { GraduationCap, Book, Award, Plus, X } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications: {
    title: string;
    description: string;
  }[];
}

const FamilyLearning = () => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentMember, setCurrentMember] = useState<FamilyMember>({
    id: '',
    name: '',
    relation: '',
    education: [],
    certifications: []
  });

  const handleAddEducation = () => {
    setCurrentMember(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', institution: '', year: '' }]
    }));
  };

  const handleAddCertification = () => {
    setCurrentMember(prev => ({
      ...prev,
      certifications: [...prev.certifications, { title: '', description: '' }]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMember.name && currentMember.relation) {
      setFamilyMembers(prev => [...prev, { ...currentMember, id: Date.now().toString() }]);
      setCurrentMember({
        id: '',
        name: '',
        relation: '',
        education: [],
        certifications: []
      });
      setShowForm(false);
    }
  };

  const handleRemoveMember = (id: string) => {
    setFamilyMembers(prev => prev.filter(member => member.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Family Learning History</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Family Member
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={currentMember.name}
                  onChange={(e) => setCurrentMember(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Relation
                </label>
                <input
                  type="text"
                  value={currentMember.relation}
                  onChange={(e) => setCurrentMember(prev => ({ ...prev, relation: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., Father, Mother, Sister"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Education</h3>
                  <button
                    type="button"
                    onClick={handleAddEducation}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Education
                  </button>
                </div>
                {currentMember.education.map((edu, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => {
                        const newEducation = [...currentMember.education];
                        newEducation[index].degree = e.target.value;
                        setCurrentMember(prev => ({ ...prev, education: newEducation }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => {
                        const newEducation = [...currentMember.education];
                        newEducation[index].institution = e.target.value;
                        setCurrentMember(prev => ({ ...prev, education: newEducation }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Year"
                      value={edu.year}
                      onChange={(e) => {
                        const newEducation = [...currentMember.education];
                        newEducation[index].year = e.target.value;
                        setCurrentMember(prev => ({ ...prev, education: newEducation }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Certifications</h3>
                  <button
                    type="button"
                    onClick={handleAddCertification}
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Certification
                  </button>
                </div>
                {currentMember.certifications.map((cert, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Title"
                      value={cert.title}
                      onChange={(e) => {
                        const newCertifications = [...currentMember.certifications];
                        newCertifications[index].title = e.target.value;
                        setCurrentMember(prev => ({ ...prev, certifications: newCertifications }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={cert.description}
                      onChange={(e) => {
                        const newCertifications = [...currentMember.certifications];
                        newCertifications[index].description = e.target.value;
                        setCurrentMember(prev => ({ ...prev, certifications: newCertifications }));
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Save Family Member
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {familyMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <h2 className="text-xl font-semibold">
                  {member.relation} - {member.name}
                </h2>
              </div>
              <button
                onClick={() => handleRemoveMember(member.id)}
                className="text-gray-400 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {member.education.map((edu, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Book className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-600">{edu.institution}, {edu.year}</p>
                  </div>
                </div>
              ))}
              {member.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-gray-600">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyLearning;