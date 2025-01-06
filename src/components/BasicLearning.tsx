import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BookOpen, Star, Plus, X } from 'lucide-react';

interface LearningEntry {
  subject: string;
  description: string;
  timestamp: string;
  progress: number;
}

const BasicLearning = () => {
  const [newSubject, setNewSubject] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [learningEntries, setLearningEntries] = useState<LearningEntry[]>([]);
  
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  // Handle subject submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSubject.trim() && newDescription.trim()) {
      const newEntry: LearningEntry = {
        subject: newSubject,
        description: newDescription,
        timestamp: formatDate(new Date()),
        progress: Math.floor(Math.random() * 20) + 80 // Random progress between 80-100
      };

      setLearningEntries(prev => [...prev, newEntry]);
      setNewSubject('');
      setNewDescription('');
    }
  };

  // Remove an entry
  const removeEntry = (index: number) => {
    setLearningEntries(prev => prev.filter((_, i) => i !== index));
  };

  // Prepare data for graph
  const graphData = learningEntries.map(entry => ({
    date: entry.timestamp,
    progress: entry.progress
  }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Daily Learning Progress</h1>
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter subject name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="What did you learn?"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Learning Entry
          </button>
        </form>
      </div>

      {/* Progress Graph */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Graph</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="progress" 
                stroke="#4F46E5" 
                strokeWidth={2}
                dot={{ fill: '#4F46E5' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Today's Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Learning</h2>
        <div className="space-y-4">
          {learningEntries.map((entry, index) => (
            <div 
              key={index}
              className="flex items-start justify-between bg-gray-50 p-4 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{entry.subject}</h3>
                  <p className="text-gray-600">{entry.description}</p>
                </div>
              </div>
              <button 
                onClick={() => removeEntry(index)}
                className="text-gray-400 hover:text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          
          {learningEntries.length === 0 && (
            <p className="text-gray-500 text-center py-4">
              No learning entries yet. Add your first subject above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicLearning;

///////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { BookOpen, Plus, X } from 'lucide-react';

// interface LearningEntry {
//   subject: string;
//   description: string;
//   timestamp: string;
//   progress: number;
//   _id?: string;
// }

// const BasicLearning = () => {
//   const [newSubject, setNewSubject] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [learningEntries, setLearningEntries] = useState<LearningEntry[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch learning entries on component mount
//   useEffect(() => {
//     fetchLearningEntries();
//   }, []);

//   const fetchLearningEntries = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:5000/learning');
//       const data = await response.json();
//       setLearningEntries(data);
//     } catch (error) {
//       console.error('Error fetching learning entries:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle subject submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newSubject.trim() && newDescription.trim()) {
//       const newEntry = {
//         subject: newSubject,
//         description: newDescription,
//         progress: Math.floor(Math.random() * 20) + 80 // Random progress between 80-100
//       };

//       try {
//         const response = await fetch('http://127.0.0.1:5000/learning', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newEntry),
//         });

//         if (response.ok) {
//           fetchLearningEntries(); // Refresh the list
//           setNewSubject('');
//           setNewDescription('');
//         }
//       } catch (error) {
//         console.error('Error adding learning entry:', error);
//       }
//     }
//   };

//   // Remove an entry
//   const removeEntry = async (id: string) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/learning/${id}`, {
//         method: 'DELETE',
//       });
      
//       if (response.ok) {
//         fetchLearningEntries(); // Refresh the list
//       }
//     } catch (error) {
//       console.error('Error deleting learning entry:', error);
//     }
//   };

//   // Prepare data for graph
//   const graphData = learningEntries.map(entry => ({
//     date: entry.timestamp,
//     progress: entry.progress
//   }));

//   if (loading) {
//     return <div className="text-center py-8">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-white rounded-xl p-6 shadow-sm">
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">Daily Learning Progress</h1>
        
//         {/* Input Form */}
//         <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 value={newSubject}
//                 onChange={(e) => setNewSubject(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Enter subject name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 value={newDescription}
//                 onChange={(e) => setNewDescription(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="What did you learn?"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
//           >
//             <Plus className="w-4 h-4" />
//             Add Learning Entry
//           </button>
//         </form>
//       </div>

//       {/* Progress Graph */}
//       <div className="bg-white rounded-xl p-6 shadow-sm">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Graph</h2>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={graphData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis domain={[0, 100]} />
//               <Tooltip />
//               <Line 
//                 type="monotone" 
//                 dataKey="progress" 
//                 stroke="#4F46E5" 
//                 strokeWidth={2}
//                 dot={{ fill: '#4F46E5' }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Today's Achievements */}
//       <div className="bg-white rounded-xl p-6 shadow-sm">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Today's Learning</h2>
//         <div className="space-y-4">
//           {learningEntries.map((entry) => (
//             <div 
//               key={entry._id}
//               className="flex items-start justify-between bg-gray-50 p-4 rounded-lg"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-indigo-100 rounded-lg">
//                   <BookOpen className="w-5 h-5 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-gray-800">{entry.subject}</h3>
//                   <p className="text-gray-600">{entry.description}</p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => entry._id && removeEntry(entry._id)}
//                 className="text-gray-400 hover:text-red-600"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           ))}
          
//           {learningEntries.length === 0 && (
//             <p className="text-gray-500 text-center py-4">
//               No learning entries yet. Add your first subject above!
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicLearning;