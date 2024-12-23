// import React, { useState } from 'react';
// import Layout from './components/Layout';
// import Dashboard from './components/Dashboard';
// import BasicLearning from './components/BasicLearning';
// import FacultyConnect from './components/FacultyConnect';
// import FamilyLearning from './components/FamilyLearning';
// import MentalWellness from './components/MentalWellness';
// import CareerPath from './components/CareerPath';


// function App() {
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'basic-learning':
//         return <BasicLearning />;
//       case 'faculty-connect':
//         return <FacultyConnect />;
//       case 'family-learning':
//         return <FamilyLearning />;
//       case 'mental-wellness':
//         return <MentalWellness />;
//       case 'career-path':
//         return <CareerPath />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <Layout onPageChange={setCurrentPage}>
//       {renderPage()}
//     </Layout>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import Layout from './components/Layout';
// import Dashboard from './components/Dashboard';
// import BasicLearning from './components/BasicLearning';
// import FacultyConnect from './components/FacultyConnect';
// import FamilyLearning from './components/FamilyLearning';
// import MentalWellness from './components/MentalWellness';
// import CareerPath from './components/CareerPath';
// import Login from './components/login';

// // Define interface for user data
// interface UserData {
//   name: string;
//   age: string;
//   phone: string;
//   email: string;
// }

// // Define interface for login props
// interface LoginProps {
//   onLogin: (data: UserData) => void;
// }

// function App() {
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState<UserData | null>(null);

//   const handlePageChange = (page: string) => {
//     setCurrentPage(page);
//   };

//   const handleLogin = (formData: UserData) => {
//     setIsAuthenticated(true);
//     setUserData(formData);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserData(null);
//     setCurrentPage('dashboard');
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'basic-learning':
//         return <BasicLearning />;
//       case 'faculty-connect':
//         return <FacultyConnect />;
//       case 'family-learning':
//         return <FamilyLearning />;
//       case 'mental-wellness':
//         return <MentalWellness />;
//       case 'career-path':
//         return <CareerPath />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   // If not authenticated, show login page
//   if (!isAuthenticated) {
//     return <Login onLogin={handleLogin} />;
//   }

//   // If authenticated, show main application
//   return (
//     <Layout 
//       onPageChange={handlePageChange} 
//       onLogout={handleLogout} 
//       userData={userData}
//     >
//       {renderPage()}
//     </Layout>
//   );
// }

// export default App;


// ///////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/Layout';
// import Dashboard from './components/Dashboard';
// import BasicLearning from './components/BasicLearning';
// import FacultyConnect from './components/FacultyConnect';
// import FamilyLearning from './components/FamilyLearning';
// import MentalWellness from './components/MentalWellness';
// import CareerPath from './components/CareerPath';
// import Login from './components/login';
// import HomePage from './components/Home';

// // Define interface for user data
// interface UserData {
//   name: string;
//   age: string;
//   phone: string;
//   email: string;
// }

// function App() {
//   const [currentPage, setCurrentPage] = useState('dashboard');
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState<UserData | null>(null);

//   const handlePageChange = (page: string) => {
//     setCurrentPage(page);
//   };

//   const handleLogin = (formData: UserData) => {
//     setIsAuthenticated(true);
//     setUserData(formData);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserData(null);
//     setCurrentPage('dashboard');
//   };

//   // Protected Route component
//   const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//     if (!isAuthenticated) {
//       return <Navigate to="/login" />;
//     }
//     return (
//       <Layout onPageChange={handlePageChange} onLogout={handleLogout} userData={userData}>
//         {children}
//       </Layout>
//     );
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={
//           isAuthenticated ? 
//           <Navigate to="/dashboard" /> : 
//           <Login onLogin={handleLogin} />
//         } />

//         {/* Protected routes */}
//         <Route path="/dashboard" element={
//           <ProtectedRoute>
//             <Dashboard />  {/* Removed userData prop since we'll get it from Layout */}
//           </ProtectedRoute>
//         } />
//         <Route path="/basic-learning" element={
//           <ProtectedRoute>
//             <BasicLearning />
//           </ProtectedRoute>
//         } />
//         <Route path="/faculty-connect" element={
//           <ProtectedRoute>
//             <FacultyConnect />
//           </ProtectedRoute>
//         } />
//         <Route path="/family-learning" element={
//           <ProtectedRoute>
//             <FamilyLearning />
//           </ProtectedRoute>
//         } />
//         <Route path="/mental-wellness" element={
//           <ProtectedRoute>
//             <MentalWellness />
//           </ProtectedRoute>
//         } />
//         <Route path="/career-path" element={
//           <ProtectedRoute>
//             <CareerPath />
//           </ProtectedRoute>
//         } />

//         {/* Fallback route */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// /////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import BasicLearning from './components/BasicLearning';
import FacultyConnect from './components/FacultyConnect';
import FamilyLearning from './components/FamilyLearning';
import MentalWellness from './components/MentalWellness';
import CareerPath from './components/CareerPath';
import Login from './components/login';
import HomePage from './components/Home';

// Define interfaces
interface UserData {
  name: string;
  age: string;
  phone: string;
  email: string;
}

interface LoginProps {
  onLogin: (data: UserData) => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleLogin = (formData: UserData) => {
    setIsAuthenticated(true);
    setUserData(formData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    setCurrentPage('dashboard');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'basic-learning':
        return <BasicLearning />;
      case 'faculty-connect':
        return <FacultyConnect />;
      case 'family-learning':
        return <FamilyLearning />;
      case 'mental-wellness':
        return <MentalWellness />;
      case 'career-path':
        return <CareerPath />;
      default:
        return <Dashboard />;
    }
  };

  // Protected Route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return (
      <Layout 
        onPageChange={handlePageChange} 
        onLogout={handleLogout} 
        userData={userData}
      >
        {children}
        {renderPage()} {/* This allows both route-based and state-based content rendering */}
      </Layout>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
          } 
        />

        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/basic-learning" 
          element={
            <ProtectedRoute>
              <BasicLearning />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/faculty-connect" 
          element={
            <ProtectedRoute>
              <FacultyConnect />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/family-learning" 
          element={
            <ProtectedRoute>
              <FamilyLearning />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/mental-wellness" 
          element={
            <ProtectedRoute>
              <MentalWellness />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/career-path" 
          element={
            <ProtectedRoute>
              <CareerPath />
            </ProtectedRoute>
          } 
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;