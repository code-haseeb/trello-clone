import { authOptions } from "@/lib/authOptions";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Header(){
  const session = await getServerSession(authOptions)
  return(
  <header className="bg-gray-200 p-4 px-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="logo">Trello</Link>
  <div>
          {session && (
            <>
              Hello, {session?.user?.name}
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              Not logged in
              <LoginButton />
            </>
          )}
        </div>
      </div>
  </header>)
}
