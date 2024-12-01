// import React, { useEffect, useRef } from 'react';
// import './css/rocket.css';
// 
// const ParallaxRocket = () => {
//   const rocketRef = useRef(null);
// 
//   useEffect(() => {
//     const handleScroll = () => {
//       const rocketElement = rocketRef.current;
//       const scrollTop = window.scrollY;
//       rocketElement.style.transform = `translateY(${scrollTop * 0.5}px)`;
//     };
// 
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
// 
//   return (
//     <div ref={rocketRef} className="rocket">
//       <svg xmlns="http://www.w3.org/2000/svg" width="2px" height="2px" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="m20.906 6.063l1.43-.954a3 3 0 0 1 3.328 0l1.43.954A20 20 0 0 1 36 22.703V33H12V22.704a20 20 0 0 1 8.906-16.641"/><circle cx="24" cy="20" r="6"/><path stroke-linecap="round" stroke-linejoin="round" d="m12 22l-6 6.217V33h36v-4.783L36 22M24 38v6m-8-4v2m16-2v2"/></g></svg>
//     </div>
//   );
// };
// 
// export default ParallaxRocket;
// 