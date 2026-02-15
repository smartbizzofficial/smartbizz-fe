import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form className="p-8 bg-white shadow-md rounded-lg w-96 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          เข้าสู่ระบบ Console
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">อีเมล:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border p-2 rounded focus:outline-blue-500"
            placeholder="example@email.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="border p-2 rounded focus:outline-blue-500"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            formAction={login}
            className="flex-1 bg-blue-900 text-white p-2 rounded hover:bg-blue-700"
          >
            เข้าสู่ระบบ
          </button>
          <button
            formAction={signup}
            className="flex-1 border border-gray-300 p-2 rounded hover:bg-gray-100"
          >
            สมัครสมาชิก
          </button>
        </div>
      </form>
    </div>
  );
}

// "use client";
// import { ROUTE_PATH } from "@/app/routh-path/route-path";
// import { useRouter } from "next/navigation";

// type Props = {};

// export default function LoginPage({}: Props) {
//   const router = useRouter();

//   function login() {
//     router.replace(ROUTE_PATH.DASHBOARD);
//   }
//   return (
//     <div className="w-screen h-screen flex bg-gray-100 select-none">
//       <button className="text-[14px] fixed top-0 right-0 mr-3 mt-3 py-0 px-5 bg-white transition duration-150 hover:bg-red-200 border border-red-700 text-red-700 font-bold">
//         SCG EMPLOYEE SIGN IN
//       </button>
//       <div className="h-full w-full flex justify-center items-center">
//         <div className="flex flex-col gap-6 w-[25%] mb-10">
//           <div className="flex flex-col items-center">
//             <img
//               className="aspect-video object-contain h-20 "
//               src="https://upload.wikimedia.org/wikipedia/th/thumb/7/70/Siam_Cement_Group_Logo.svg/1200px-Siam_Cement_Group_Logo.svg.png"
//               alt=""
//             />
//             <span className="text-center text-3xl my-1 font-bold text-shadow-md">
//               Speedy Quotation
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span className="ml-1 mb-1">Email</span>
//             <input placeholder="Please enter your email" />
//           </div>
//           <div className="flex flex-col">
//             <span className="ml-1 mb-1">Password</span>
//             <input placeholder="Please enter your password" type="password" />
//           </div>
//           <button
//             onClick={login}
//             className="w-full transition duration-150 bg-red-700 border-red-700 hover:bg-red-800 hover:border-red-800 text-white font-bold"
//           >
//             SIGN IN
//           </button>
//           <span className="cursor-pointer hover:underline w-max self-center text-red-700 font-semibold">
//             Forgot Password ?
//           </span>
//           <div className="flex flex-col items-center gap-1 mt-4">
//             <span className="text-xs text-gray-500">Provide Service By</span>
//             <span className="text-xs font-semibold">
//               SCG LIVING AND HOUSING SOLUTION
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
