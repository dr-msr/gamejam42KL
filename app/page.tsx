
'use client'
import { useSearchParams } from 'next/navigation'

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
        <p className="fixed center-0 top-0 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to 42KL Game Jam! Your login code is  
          <code onClick={copylink} className="font-mono font-bold hover:text-red-600 pl-2">  {code} </code> 
        </p>
      </div>
    
    </main>
  )
}
