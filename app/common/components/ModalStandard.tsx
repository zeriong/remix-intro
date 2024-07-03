// import { Dispatch } from "react";
//
// interface IModalProps {
//   isShow: boolean;
//   setIsShow: Dispatch<boolean>;
// }
//
// export default function ModalStandard({ isShow, setIsShow }: IModalProps) {
//   return (
//     isShow && (
//       <div
//         onClick={() => setIsShow(false)}
//         className={`fixed top-0 left-0 z-[100] w-full h-full bg-black/50 flex justify-center items-center`}
//       >
//         {/* 컨텐츠 박스 */}
//         <section className={`p-3 max-w-[500px] max-h-[500px] w-full`}>
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white w-full h-full flex flex-col rounded-2xl z-10"
//           >
//             {/* 컨텐츠 영역 */}
//             {contentArea && contentArea}
//           </div>
//         </section>
//       </div>
//     )
//   );
// }
