import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Response() {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: '/',
    })
  }
  return (
    <>
      <Head>
        <title>Response</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl leading-normal mb-3">Terima kasih sudah vote</h1>
          <button
            onClick={handleClick}
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}
