// import React, { useState } from 'react';
// import List from './List';
// import data from './data';
// import SingleQuestion from './recipes'

// function App() {
//   const [name, setName] = useState('');
//   const [list, setList] = useState();
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       showAlert(true, 'danger', 'please enter value');

//     } else {
//       showAlert(true, 'success', 'item added to the list');
//       const newItem = { id: new Date().getTime().toString(), title: name };

//       setList([...list, newItem]);
//       setName('');
//     }
//   };

//   const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
//   };

//   const removeItem = (id) => {
//     showAlert(true, 'danger', 'item removed');
//     setList(list.filter((item) => item.id !== id));
//   };

//   return (
//     <section className='section-center'>
//       <form className='grocery-form' onSubmit={handleSubmit}>

//         <h3>Cook Book</h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='e.g. Lasagna'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             New Recipe
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className='grocery-container'>
//           <List items={list} removeItem={removeItem} />
//         </div>
//       )}
//     </section>
//   );
// }

// export default App;
