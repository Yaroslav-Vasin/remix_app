import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main id="content" className="">
      <h1>A better way to keeping track of your notes</h1>
      <p>Try our early beta ond never loose track of your notes again!</p>
      <p id="cta">
        <Link to="/notes">Go to the demo page</Link>
      </p>
    </main>
  )
}


// export default function Index() {
//   return (
//     <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
//       <h1>Welcome to Remix</h1>
//       <ul>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/blog"
//             rel="noreferrer"
//           >
//             15m Quickstart Blog Tutorial
//           </a>
//         </li>
//         <li>
//           <a
//             target="_blank"
//             href="https://remix.run/tutorials/jokes"
//             rel="noreferrer"
//           >
//             Deep Dive Jokes App Tutorial
//           </a>
//         </li>
//         <li>
//           <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
//             Remix Docs
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }
