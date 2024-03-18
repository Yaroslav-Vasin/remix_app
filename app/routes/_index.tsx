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
    <main id="content" className="flex flex-col items-center h-screen py-6">
        <h1 className="text-4xl font-bold mb-4">A better way to keeping track of your notes</h1>
        <p className="text-lg mb-8">Try our early beta and never lose track of your notes again!</p>
        <p id="cta">
            <Link to="/notes" className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-2 px-4 rounded-full
                hover:from-purple-700 hover:to-purple-500 transition duration-300 ease-in-out">Try now</Link>
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
