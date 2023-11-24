
'use client'
import { useSearchParams } from 'next/navigation'
import { CiMedicalClipboard } from "react-icons/ci";


export default function Home() {
	const searchParams = useSearchParams()
	const code = searchParams.get('code')

	const copylink = () => {
			if (code !== null) {
			navigator.clipboard.writeText(code)
			alert("Code is copied to the clipboard!")
		}	  
	}



	return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to 42KL Game Jam! Your authorization code is : &nbsp;
          <code onClick={copylink} className="font-mono font-bold hover:text-white">{code} &nbsp; </code> <CiMedicalClipboard onClick={copylink} size={20} />
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>
    
    </main>
  )
}
