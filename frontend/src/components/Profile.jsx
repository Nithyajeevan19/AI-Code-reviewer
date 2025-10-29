import { useState, useEffect, useContext } from 'react';
import { User, Mail, Calendar, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputContext } from '../context/InputContextProvider';

export default function Profile() {
  const { history } = useContext(InputContext);
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    joinDate: '',
    totalAnalyses: 0
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, [history]);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      // You can decode JWT to get user info without API call
      const payload = JSON.parse(atob(token.split('.')));
      
      setUserInfo({
        username: payload.username || 'User',
        email: payload.email || 'Not available',
        joinDate: new Date().toLocaleDateString(), // You can store this in JWT or fetch from API
        totalAnalyses: history.length
      });
      
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 p-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="animate-pulse">
            <div className="h-10 bg-slate-200 rounded mb-8 w-48"></div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="h-6 bg-slate-200 rounded mb-4 w-32"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Profile
        </h1>
        <div className="grid gap-6">
          {/* User Information Card */}
          <Card className="shadow-lg border-slate-200/70 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <User className="w-5 h-5" />
                User Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-blue-900 flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  Username
                </label>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <p className="text-blue-900 font-bold">{userInfo.username}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-indigo-900 flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                  <p className="text-indigo-900 font-bold">{userInfo.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Statistics Card */}
          <Card className="shadow-lg border-slate-200/60 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-50/60 to-purple-50/60 border-b border-slate-200">
              <CardTitle className="flex items-center gap-2 text-indigo-700">
                <Code className="w-5 h-5" />
                Usage Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="text-2xl font-extrabold text-blue-700">{userInfo.totalAnalyses}</div>
                  <div className="text-xs font-semibold text-blue-700/70">Code Reviews</div>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <div className="text-2xl font-extrabold text-green-700">
                    {history.filter(item => new Date(item.createdAt) > new Date(Date.now() - 7*24*60*60*1000)).length}
                  </div>
                  <div className="text-xs font-semibold text-green-700/70">This Week</div>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-emerald-900 flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  Member Since
                </label>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-emerald-900 font-bold">{userInfo.joinDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
    
  
}
