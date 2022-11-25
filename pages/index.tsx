import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: '/vote',
    })
  }
  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-lg min-h-screen py-12 px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 place-items-center">
          <div className="max-w-md w-full space-y-8">
            <div className="border-4 border-dashed border-gray-300 rounded-lg h-96" />
          </div>
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Selamat datang
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" name="username" id="username" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
              </div>
              <div>
                <button
                  onClick={handleClick}
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              {/* <div className="text-sm text-red-600 text-center">
                        <?= sizeof($validation->getErrors()) > 0 ? "Login gagal" : ''; ?>

                        <?php if (!empty((session()->getFlashdata('gagal')))) : ?>
                            <?= session()->getFlashdata('gagal'); ?>
                        <?php endif; ?>
                    </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
