import { useRouter } from 'next/router'
import Head from 'next/head'

function Signin() {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: '/dashboard',
    })
  }
  return (
    <>
      <Head>
        <title>Dashboard - Sign in</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login
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
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="." className="font-medium text-red-600 hover:underline">
                  Forgot password?
                </a>
              </div>
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
            <div className="text-sm text-red-600 text-center">
              {/* <?= sizeof($validation->getErrors()) > 0 ? "Login gagal" : ''; ?>

            <?php if (!empty((session()->getFlashdata('gagal')))) : ?>
            <?= session()->getFlashdata('gagal'); ?>
            <?php endif; ?> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

function Signup() {
  const router = useRouter()
  const handleClick = () => {
    router.push({
      pathname: '/dashboard',
    })
  }
  return (
    <>
      <Head>
        <title>Dashboard - Sign up</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register New Admin
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="<?= base_url('/admin/register'); ?>" method="POST">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" name="username" id="username" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" id="password" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Confirm</label>
              <input type="password" name="confirm" id="confirm" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
            </div>
            <div>
              <button
                onClick={handleClick}
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none"
              >
                Sign up
              </button>
            </div>
            <div className="text-sm text-red-600 text-center">
              {/* <?= sizeof($validation->getErrors()) > 0 ? "Register gagal" : ''; ?>

            <?php if (!empty((session()->getFlashdata('gagal')))) : ?>
            <?= session()->getFlashdata('gagal'); ?>
            <?php endif; ?> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default function DashboardAuth() {
  const administrator: any = []
  if (administrator.length) {
    return <Signin />
  }
  return <Signup />
}
