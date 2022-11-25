import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: '/dashboard/auth',
    })
  }
  const firstPath = () => `/${router.asPath.split('/')[1]}`
  if (router.asPath === '/dashboard/auth') {
    return <Component {...pageProps} />
  }
  if (firstPath() === '/dashboard') {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <nav className="fixed inset-0 h-16 z-50">
          <div className="bg-white" id="jasdjd">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center h-16">
                <ul className="flex items-center space-x-8 lg:flex">
                  <li>
                    <Link href="/dashboard" className="font-medium tracking-wide text-gray-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/class" className="font-medium tracking-wide text-gray-700">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/voter" className="font-medium tracking-wide text-gray-700">
                      Voters
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/candidate" className="font-medium tracking-wide text-gray-700">
                      Candidates
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/result" className="font-medium tracking-wide text-gray-700">
                      Result
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleClick}
                      type="button"
                      className="font-medium tracking-wide text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="mt-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <Component {...pageProps} />
        </div>
      </>
    )
  }
  return <Component {...pageProps} />
}
