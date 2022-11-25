import Head from 'next/head'

export default function DashboardVoterEdit() {
  return (
    <>
      <Head>
        <title>Dashboard - Edit Voter</title>
      </Head>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Voters</h3>
              <p className="mt-1 text-sm text-gray-600">
                Edit voters yang akan memilih.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="<?= base_url('/voterscontroller/updatevoters/' . $voter->id_voter); ?>" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                      <input type="text" name="name" id="name" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
                      <div className=" text-sm text-red-600">
                        {/* <?= $validation->getError('name');?> */}
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                      <input type="text" name="username" id="username" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
                      <div className="text-sm text-red-600">
                        {/* <?= $validation->getError('username');?> */}
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input type="password" name="password" id="password" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border items-baseline border-gray-300 rounded-md py-2 px-3" />
                      <div className="text-sm text-red-600">
                        {/* <?= $validation->getError('password');?> */}
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="confirm" className="block text-sm font-medium text-gray-700">Konfirmasi</label>
                      <input type="password" name="confirm" id="confirm" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
                      <div className="text-sm text-red-600">
                        {/* <?= $validation->getError('confirm');?> */}
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="className" className="block text-sm font-medium text-gray-700">Kelas</label>
                      <select id="className" name="className" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option value="<?= $voter->id_className; ?>">
                          {/* <?= $voter->className; ?> */}
                        </option>
                        {/* <?php foreach ($classesName as $className) : ?> */}
                        <option value="<?= $className->id_className; ?>">
                          {/* <?= $className->className; ?> */}
                        </option>
                        {/* <?php endforeach; ?> */}
                      </select>
                    </div>
                    <div className="col-span-6">
                      <div className="py-4 whitespace-nowrap text-sm font-medium">
                        <span
                          className="text-red-600 hover:underline cursor-pointer"
                        //  onclick="openDialog()"
                        >
                          Hapus akun
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dialog" className="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center min-h-screen py-4 px-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Hapus Akun
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Yakin akan menghapus akun? Akun tidak dapat dipulihkan setelah dihapus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <form action="<?= base_url('/voterscontroller/deletevoters'); ?>" method="POST">
                <input type="hidden" name="_delete_" value="<?= $voter->id_voter; ?>" />
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                  Hapus
                </button>
              </form>
              <button
                //  onclick="closeDialog()"
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
