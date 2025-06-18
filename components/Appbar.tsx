"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();
  return (

    <div className="flex justify-between">
      <div>Harmonize</div>

      {session?.data?.user && <button onClick={() => signOut()} className="border-2 rounded-2xl p-4"> Logout</button>
      }

      {!session.data?.user && <button onClick={() => signIn('google')} className="border-2 rounded-2xl p-4"> Sign In with Google</button>
      }
    </div>

  )
}
