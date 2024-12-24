import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Book, Briefcase, Target, TrendingUp, DollarSign, GraduationCap, Code, Database, Brain, LineChart } from 'lucide-react';

const StudentCareerAnalysis = () => {
  // Sample student skills/subjects - this could be passed as props in a real application
  const studentSubjects = [
    { name: 'Programming', proficiency: 'Advanced', icon: Code },
    { name: 'Database Management', proficiency: 'Intermediate', icon: Database },
    { name: 'Machine Learning', proficiency: 'Basic', icon: Brain },
    { name: 'Statistics', proficiency: 'Intermediate', icon: LineChart },
  ];

  const careerPaths = [
    {
      title: 'Software Developer',
      description: 'Build applications and systems using programming skills',
      demand: 'High demand across industries',
      icon: Code
    },
    {
      title: 'Database Administrator',
      description: 'Manage and optimize database systems',
      demand: 'Steady growth in enterprise companies',
      icon: Database
    },
    {
      title: 'Data Analyst',
      description: 'Analyze data and create insights for businesses',
      demand: 'Growing demand in all sectors',
      icon: LineChart
    }
  ];

  const sideOpportunities = [
    {
      title: 'Freelance Programming',
      platform: 'GitHub, Upwork, Freelancer',
      description: 'Develop websites and applications for clients'
    },
    {
      title: 'Online Teaching',
      platform: 'Udemy, Coursera',
      description: 'Create programming and database courses'
    },
    {
      title: 'Technical Writing',
      platform: 'Medium, Dev.to',
      description: 'Write tutorials and technical documentation'
    }
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Skills Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Subject Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studentSubjects.map((subject) => (
              <div key={subject.name} className="flex items-center p-3 border rounded-lg">
                <subject.icon className="h-5 w-5 mr-3 text-blue-500" />
                <div>
                  <div className="font-medium">{subject.name}</div>
                  <div className="text-sm text-gray-500">{subject.proficiency}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Paths Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-6 w-6" />
            Recommended Career Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {careerPaths.map((career) => (
              <div key={career.title} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <career.icon className="h-5 w-5 text-blue-500" />
                  <h3 className="font-medium">{career.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{career.description}</p>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <Target className="h-4 w-4" />
                  {career.demand}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Side Income Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            Side Income Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sideOpportunities.map((opportunity) => (
              <div key={opportunity.title} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">{opportunity.title}</h3>
                <div className="text-sm text-gray-600 mb-1">{opportunity.description}</div>
                <div className="text-sm text-blue-600">
                  <span className="font-medium">Platforms: </span>
                  {opportunity.platform}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentCareerAnalysis;