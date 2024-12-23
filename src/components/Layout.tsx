// import React from 'react';
// import { Menu, User, BookOpen, Users, Brain, Dumbbell, Briefcase } from 'lucide-react';

// interface LayoutProps {
//   children: React.ReactNode;
//   onPageChange: (page: string) => void;
// }

// const Layout: React.FC<LayoutProps> = ({ children, onPageChange }) => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-indigo-800 text-white p-6">
//         <div className="flex items-center gap-2 mb-8">
//           <BookOpen className="w-8 h-8" />
//           <h1 className="text-xl font-bold">EduGrowth</h1>
//         </div>
        
//         <nav className="space-y-4">
//           <a 
//             href="#" 
//             onClick={() => onPageChange('basic-learning')}
//             className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
//           >
//             <BookOpen className="w-5 h-5" />
//             <span>Basic Learning</span>
//           </a>
//           <a 
//             href="#" 
//             onClick={() => onPageChange('faculty-connect')}
//             className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
//           >
//             <Users className="w-5 h-5" />
//             <span>Faculty Connect</span>
//           </a>
//           <a 
//             href="#" 
//             onClick={() => onPageChange('family-learning')}
//             className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
//           >
//             <Brain className="w-5 h-5" />
//             <span>Family Learning</span>
//           </a>
//           <a 
//             href="#" 
//             onClick={() => onPageChange('mental-wellness')}
//             className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
//           >
//             <Dumbbell className="w-5 h-5" />
//             <span>Mental Wellness</span>
//           </a>
//           <a 
//             href="#" 
//             onClick={() => onPageChange('career-path')}
//             className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
//           >
//             <Briefcase className="w-5 h-5" />
//             <span>Career Path</span>
//           </a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50">
//         <header className="bg-white shadow-sm">
//           <div className="flex justify-between items-center px-6 py-4">
//             <Menu className="w-6 h-6 text-gray-600" />
//             <div className="flex items-center gap-4">
//               <User className="w-6 h-6 text-gray-600" />
//               <span className="text-gray-700">John Doe</span>
//             </div>
//           </div>
//         </header>
//         <main className="p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// /////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';

// // Define interface for Layout props
// interface LayoutProps {
//   children: React.ReactNode;
//   onPageChange: (page: string) => void;
//   onLogout: () => void;  // Add this
//   userData: {            // Add this
//     name: string;
//     age: string;
//     phone: string;
//     email: string;
//   } | null;
// }

// const Layout: React.FC<LayoutProps> = ({
//   children,
//   onPageChange,
//   onLogout,
//   userData
// }) => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Your layout content */}
//       <nav>
//         {/* Navigation items */}
//       </nav>
//       <main>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

///////////////////////////////////////////////////////////////////////////

import React from 'react';
import { Menu, User, BookOpen, Users, Brain, Dumbbell, Briefcase, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onPageChange: (page: string) => void;
  onLogout: () => void;
  userData: {
    name: string;
    age: string;
    phone: string;
    email: string;
  } | null;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onPageChange, 
  onLogout, 
  userData 
}) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-800 text-white p-6">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-xl font-bold">EduGrowth</h1>
        </div>
        
        <nav className="space-y-4">
          <a
            href="#"
            onClick={() => onPageChange('basic-learning')}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
          >
            <BookOpen className="w-5 h-5" />
            <span>Basic Learning</span>
          </a>
          <a
            href="#"
            onClick={() => onPageChange('faculty-connect')}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
          >
            <Users className="w-5 h-5" />
            <span>Faculty Connect</span>
          </a>
          <a
            href="#"
            onClick={() => onPageChange('family-learning')}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
          >
            <Brain className="w-5 h-5" />
            <span>Family Learning</span>
          </a>
          <a
            href="#"
            onClick={() => onPageChange('mental-wellness')}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
          >
            <Dumbbell className="w-5 h-5" />
            <span>Mental Wellness</span>
          </a>
          <a
            href="#"
            onClick={() => onPageChange('career-path')}
            className="flex items-center gap-3 p-2 hover:bg-indigo-700 rounded-lg"
          >
            <Briefcase className="w-5 h-5" />
            <span>Career Path</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <Menu className="w-6 h-6 text-gray-600" />
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-6 h-6 text-gray-600" />
                <span className="text-gray-700">{userData?.name || 'Guest'}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;