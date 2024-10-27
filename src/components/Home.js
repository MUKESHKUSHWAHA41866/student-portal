 


import React, { useState } from 'react';
import ClassRecordings from '../components/ClassRecordings';

const Home = () => {
   
  const [hasLiveClass, setHasLiveClass] = useState(false);
 
  const [showPopup, setShowPopup] = useState(false);

  
  const handleJoinClassClick = () => {
    if (!hasLiveClass) {
      setShowPopup(true);  
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
       
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <section className="bg-white p-6 rounded-lg shadow space-y-6">
          <div>
            
            <h2 className="text-2xl font-bold mb-4">Announcements</h2>
            <div className="bg-blue-50 p-4 rounded-lg space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 012 0v1a1 1 0 11-2 0v-1zm0-7a1 1 0 012 0v4a1 1 0 11-2 0V6z" />
                  </svg>
                </div>
                <p>On account of Independence Day, August 15th will be a holiday.</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13a1 1 0 012 0v1a1 1 0 11-2 0v-1zm0-7a1 1 0 012 0v4a1 1 0 11-2 0V6z" />
                  </svg>
                </div>
                <p>Reminder to finish your assignments and submit them by Monday.</p>
              </div>
            </div>
          </div>

           
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Class Schedule</h2>
            <div className="space-y-4">
              <div className="p-4 bg-purple-100 rounded-lg">
                <p className="font-bold">Tuesday, 5:00 - 5:50 PM</p>
                <p className="text-sm">Class 7, Science | Live Class (Yesterday)</p>
              </div>
              <div className="p-4 bg-purple-200 rounded-lg">
                <p className="font-bold">Tuesday, 6:30 - 7:15 PM</p>
                <p className="text-sm">Class 7, Science | Live Class (Today)</p>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <p className="font-bold">Tuesday, 5:00 - 5:50 PM</p>
                <p className="text-sm">Class 7, Science | Live Class (Tomorrow)</p>
              </div>
            </div>
          </div>
        </section>

         
        <section className="bg-white p-6 rounded-lg shadow space-y-4">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <div className="space-y-4">
            <div className="p-9 bg-blue-500 text-white rounded-lg">
              <h3 className="font-bold text-2xl text-center">Canvas LMS</h3>
              <p className="text-sm">
                Click here to access your LMS portal for assignments, class recordings, and notes.
              </p>
            </div>
            
             
            <div className="p-9 bg-pink-500 text-white rounded-lg cursor-pointer" onClick={handleJoinClassClick}>
              <h3 className="font-bold text-2xl text-center">Join Live Class</h3>
              <p className="text-sm">
                Click here to join your live class session. Please do not share this link.
              </p>
            </div>

            <div className="p-9 bg-blue-500 text-white rounded-lg">
              <h3 className="font-bold text-2xl text-center">Contact Teacher</h3>
              <p className="text-sm">
                Click here to contact your teacher for any doubts or concerns.
              </p>
            </div>
          </div>
        </section>

         
        <ClassRecordings />
      </div>

       
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mx-auto text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-7v4m0 4v8m0-4h4m-4 0H8m0 0H4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">No Live Classes</h3>
            <p className="text-sm">You have no live classes scheduled for today.</p>
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



 






