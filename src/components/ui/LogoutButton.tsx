import { signOut } from "@/lib/auth/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="text-sm px-4 py-2 rounded-md bg-akane text-white hover:bg-akane/80 transition-colors"
      >
        ログアウト
      </button>
    </form>
  );
}
