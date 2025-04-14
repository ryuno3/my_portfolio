// import React from "react";
// import { signOut } from "@/auth";

// export default function LogoutButton() {
//   const handleLogout = async () => {
//     try {
//       // redirectToはオプションで渡さず、ログアウト後に手動でリダイレクトする
//       await signOut();
//     } catch (error) {
//       console.error("ログアウト中にエラーが発生しました:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
//     >
//       ログアウト
//     </button>
//   );
// }

import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
      >
        ログアウト
      </button>
    </form>
  );
}
