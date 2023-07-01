// import React, { useState } from "react";

// interface CarouselProps {
//   children: any;
// }
// export const Carousel = ({ children }: CarouselProps) => {
//   const MAX_VIS = 3;
//   const count = React.Children.count(children);
//   const [active, setActive] = useState(2);
  
//   return (
//     <div className='carousel'>
//       {active > 0 && <button className='nav left scale-50' onClick={() => setActive((i) => i - 1)}>◀</button>}
//       {React.Children.map(children, (child, i) => (
//         <div className="card-container"
//         style={{
//             '--active': i === active ? 1 : 0,
//             '--offset': (active - i) / 3,
//             '--direction': Math.sign(active - i),
//             '--abs-offset': Math.abs(active - i) / 3,
//             'pointer-events': active === i ? 'auto' : 'none',
//             'opacity': Math.abs(active - i) >= MAX_VIS ? '0' : '1',
//             'display': Math.abs(active - i) > MAX_VIS ? 'none' : 'block', }}
//             >
//           {child}
//         </div>
//       ))}
//       {active < count - 1 && (
//         <button className='nav right scale-50' onClick={() => setActive((i) => i + 1)}>▶</button>
//       )}
//     </div>
//   );
// };
