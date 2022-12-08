// import React, { useState } from "react";
// import useSWR from "swr";
// const fetcher = async () => {
//   let response = await fetch("http://localhost:4000/1");
//   let data = await response.json();
//   return data;
// };
// function ClientFetching() {
//   const [data, error] = useSWR("client", fetcher);
//   if (error)
//     return (
//       <>
//         <h1>guy there's an error</h1>
//       </>
//     );
//   if (!data)
//     return (
//       <>
//         <div class="spinner-border text-primary" role="status">
//           <span class="visually-hidden">Loading...</span>
//         </div>
//       </>
//     );
//   return <>{data.name}</>;
 
// }

// export default ClientFetching;
import React from 'react'

function ClientFetching() {
  return (
    <div>index</div>
  )
}

export default ClientFetching
