import React, { useState } from 'react';
 
import VideoModal from '../components/VideoModel';


const ClassRecordings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  const openModal = (videoUrl, title) => {
    setCurrentVideo(videoUrl);
    setCurrentTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo('');
    setCurrentTitle('');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg space-y-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Access Class Recordings</h2>
      
      <input
        type="text"
        placeholder="Search for class recordings"
        className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between items-center space-x-2 mb-4">
        <button className="p-2 w-full bg-gray-200 rounded-lg text-sm text-gray-700">This week</button>
        <button className="p-2 w-full bg-gray-200 rounded-lg text-sm text-gray-700">All subjects</button>
      </div>

      <div className="space-y-4">
        <div
          onClick={() =>
            openModal(
              'https://www.youtube.com/embed/S8l6tOqb4BI',
              'Class 7 Math - Algebraic Equations'
            )
          }
          className="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer transition hover:bg-gray-200"
        >
          <div>
            <h4 className="font-bold text-blue-700">Class 7 Math - Algebraic Equations</h4>
            <p className="text-sm text-gray-500">24th October, 2024</p>
          </div>
          <img
            src="https://img.youtube.com/vi/S8l6tOqb4BI/0.jpg"
            alt="Algebraic Equations thumbnail"
            className="w-24 h-16 rounded-lg"
          />
        </div>

        <div
          onClick={() =>
            openModal(
              'https://www.youtube.com/embed/fZTo5mv558k',
              'Class 7 Math - Differential Maths'
            )
          }
          className="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer transition hover:bg-gray-200"
        >
          <div>
            <h4 className="font-bold text-blue-700">Class 7 Math - Differential Maths</h4>
            <p className="text-sm text-gray-500">24th October, 2024</p>
          </div>
          <img
            src="https://img.youtube.com/vi/fZTo5mv558k/0.jpg"
            alt="Differential Maths thumbnail"
            className="w-24 h-16 rounded-lg"
          />
        </div>

        <div
          onClick={() =>
            openModal(
              'https://www.youtube.com/embed/B6h-kQLQqec',
              'Class 7 Science - Organic Chemistry'
            )
          }
          className="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer transition hover:bg-gray-200"
        >
          <div>
            <h4 className="font-bold text-pink-700">Class 7 Science - Organic Chemistry</h4>
            <p className="text-sm text-gray-500">24th October, 2024</p>
          </div>
          <img
            src="https://img.youtube.com/vi/B6h-kQLQqec/0.jpg"
            alt="Organic Chemistry thumbnail"
            className="w-24 h-16 rounded-lg"
          />
        </div>

        <div
          onClick={() =>
            openModal(
              'https://www.youtube.com/embed/-vGSa3rrF_0',
              'Class 7 Math - Trigonometry 101'
            )
          }
          className="p-4 bg-gray-100 rounded-lg flex justify-between items-center cursor-pointer transition hover:bg-gray-200"
        >
          {/* <div>
            <h4 className="font-bold text-blue-700">Class 7 Math - Trigonometry 101</h4>
            <p className="text-sm text-gray-500">24th October, 2024</p>
          </div> */}
          {/* <img
            src="https://img.youtube.com/vi/-vGSa3rrF_0/0.jpg"
            alt="Trigonometry thumbnail"
            className="w-24 h-16 rounded-lg"
          /> */}
        </div>
      </div>

      <VideoModal
        videoUrl={currentVideo}
        title={currentTitle}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ClassRecordings;
