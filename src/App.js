// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js


// import React from 'react';

// const students = [
//   { name: 'Devraj Songara', id: 1 },
//   { name: 'Tom Lewis', id: 2 }
// ];

// const App = () => {
//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/4 bg-purple-800 text-white p-4">
//         <h1 className="text-xl font-bold mb-6">Student Portal</h1>
//         <nav className="space-y-4">
//           <a href="#" className="block bg-purple-700 p-2 rounded hover:bg-purple-600">
//             Dashboard
//           </a>
//           <a href="#" className="block bg-purple-700 p-2 rounded hover:bg-purple-600">
//             Live Classes
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

//         {/* Student List */}
//         <div className="grid grid-cols-2 gap-4">
//           {students.map((student) => (
//             <div key={student.id} className="p-4 bg-white shadow rounded hover:bg-blue-50">
//               <h3 className="text-lg font-semibold">{student.name}</h3>
//               <p className="text-sm text-gray-600">Student ID: {student.id}</p>
//             </div>
//           ))}
//         </div>

//         {/* Hover State Example */}
//         <div className="mt-8">
//           <h3 className="text-lg font-bold mb-4">Hover States</h3>
//           <div className="flex space-x-4">
//             <div className="p-4 bg-purple-200 rounded hover:bg-purple-300">Card 1</div>
//             <div className="p-4 bg-purple-200 rounded hover:bg-purple-300">Card 2</div>
//             <div className="p-4 bg-purple-200 rounded hover:bg-purple-300">Card 3</div>
//           </div>
//         </div>

//         {/* Video section */}
//         <div className="mt-8">
//           <h3 className="text-lg font-bold mb-4">Live Class</h3>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               className="w-full h-full"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               title="Live Class"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update Switch to Routes
import Home from './components/Home'; // Import the Home component
import Header from './components/Header'; // Assuming you have a Header component
 
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
        <main className="flex-1 p-6">
          <Routes>  
            <Route path="/" element={<Home />} />

             
             
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
