// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/SKzG4Dq99cq
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// export default function Component() {
//   return (
//     <div className="bg-gray-50/90">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Acme Inc</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             About
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Career
//           </Link>
//           <Link
//             className="text-sm font-medium hover:underline underline-offset-4"
//             href="#"
//           >
//             Contact
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 text-center md:px-6">
//             <div className="grid gap-4 md:gap-8 lg:gap-10">
//   <div className="space-y-2">
//     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//       Nicolas Andreoli
//     </h2>
//     <p className="text-gray-500 dark:text-gray-400">
//       Frontend Developer
//     </p>
//   </div>
//   <div className="mx-auto max-w-4xl space-y-4">
//     <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//       I'm a frontend developer with a focus on React. I love
//       creating beautiful and performant web experiences.
//     </p>
//   </div>
//             </div>
//           </div>
//         </section>
//         <section className="border-t">
//           <div className="container px-4 text-center md:px-6">
//             <div className="grid gap-4 md:gap-8 lg:gap-10">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   About Me
//                 </h2>
//               </div>
//               <div className="mx-auto max-w-4xl space-y-4">
//                 <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   I'm a frontend developer with a passion for creating beautiful
//                   and performant web experiences. I've been working with React
//                   for several years and love the ecosystem around it.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 text-center md:px-6">
//             <div className="grid gap-4 md:gap-8 lg:gap-10">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Career
//                 </h2>
//               </div>
//               <div className="mx-auto max-w-4xl space-y-4">
//                 <div className="space-y-4">
//                   <div className="timeline">
//                     <div className="timeline-item">
//                       <div className="timeline-marker" />
//                       <div className="timeline-content">
//                         <div className="flex items-start space-x-4">
//                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800" />
//                           <div className="space-y-1">
//                             <h3 className="text-lg font-semibold">
//                               Frontend Developer at Acme Inc
//                             </h3>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                               Worked on the company's main web application,
//                               improving performance and adding new features.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="timeline-item">
//                       <div className="timeline-marker" />
//                       <div className="timeline-content">
//                         <div className="flex items-start space-x-4">
//                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800" />
//                           <div className="space-y-1">
//                             <h3 className="text-lg font-semibold">
//                               Frontend Developer at Acme Inc
//                             </h3>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                               Worked on the company's main web application,
//                               improving performance and adding new features.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="timeline-item">
//                       <div className="timeline-marker" />
//                       <div className="timeline-content">
//                         <div className="flex items-start space-x-4">
//                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 border border-gray-200 dark:bg-gray-800 dark:border-gray-800" />
//                           <div className="space-y-1">
//                             <h3 className="text-lg font-semibold">
//                               Frontend Developer at Acme Inc
//                             </h3>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                               Worked on the company's main web application,
//                               improving performance and adding new features.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="py-12 md:py-24 lg:py-32">
//           <div className="container px-4 text-center md:px-6">
//             <div className="grid gap-4 md:gap-8 lg:gap-10">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Contact Me
//                 </h2>
//               </div>
//               <div className="mx-auto max-w-sm space-y-4">
//                 <form className="space-y-4">
//                   <div className="space-y-2">
//                     <Label className="text-sm" htmlFor="email">
//                       Email
//                     </Label>
//                     <Input
//                       id="email"
//                       placeholder="john@example.com"
//                       required
//                       type="email"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label className="text-sm" htmlFor="message">
//                       Your message
//                     </Label>
//                     <Textarea
//                       id="message"
//                       placeholder="Enter your message here."
//                       required
//                     />
//                   </div>
//                   <div className="flex items-center">
//                     <Button type="submit">Submit</Button>
//                     <div className="ml-auto w-0 h-0">
//                       <span className="absolute inset-y-0 flex items-center ml-3">
//                         <div className="w-4 h-4 text-gray-400" />
//                       </span>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="bg-gray-50/90 py-4 px-4 lg:px-6 text-center">
//         <div className="flex justify-center gap-4">
//           <Link
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             href="#"
//           >
//             <LinkedinIcon className="h-6 w-6" />
//           </Link>
//           <Link
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             href="#"
//           >
//             <SignalMediumIcon className="h-6 w-6" />
//           </Link>
//           <Link
//             className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//             href="#"
//           >
//             <GithubIcon className="h-6 w-6" />
//           </Link>
//         </div>
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           © 2024 Acme Inc. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// }

// function GithubIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//       <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
//   );
// }

// function LinkedinIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function SignalMediumIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 20h.01" />
//       <path d="M7 20v-4" />
//       <path d="M12 20v-8" />
//     </svg>
//   );
// }
