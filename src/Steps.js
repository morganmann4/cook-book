// import React, { useState } from 'react'

// const Steps = ( { handleServiceChange, handleServiceRemove, handleServiceAdd, serviceList }) => {


//   return (
//     <form className="App" autoComplete="off">
//       <div className="form-field">
//         <label htmlFor="service">Service(s)</label>
//         {serviceList.map((singleService, index) => (
//           <div key={index} className="services">
//             <div className="first-division">
//               <input
//                 name="service"
//                 type="text"
//                 id="service"
//                 value={singleService.service}
//                 onChange={(e) => handleServiceChange(e, index)}
//                 required
//               />
//               {serviceList.length - 1 === index && serviceList.length < 4 && (
//                 <button
//                   type="button"
//                   onClick={handleServiceAdd}
//                   className="add-btn"
//                 >
//                   <span>Add a Service</span>
//                 </button>
//               )}
//             </div>
//             <div className="second-division">
//               {serviceList.length !== 1 && (
//                 <button
//                   type="button"
//                   onClick={() => handleServiceRemove(index)}
//                   className="remove-btn"
//                 >
//                   <span>Remove</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
      {/* <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div> */}
//     </form>
//   );
// }

// export default Steps;