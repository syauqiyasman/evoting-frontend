import Head from 'next/head'

export default function DashboardVoterAdd() {
  return (
    <>
      <Head>
        <title>Dashboard - Add Voter</title>
      </Head>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Tambah Voters</h3>
              <p className="mt-1 text-sm text-gray-600">
                Tambah voters yang akan memilih.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="<?= base_url('/voterscontroller/addvoters'); ?>" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                      <input type="text" name="name" id="name" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
                      <div className="text-sm text-red-600">
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
                    <div className=" col-span-6 sm:col-span-3">
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
                        {/* <?php foreach ($classesName as $className) : ?> */}
                        <option value="<?= $className->id_className; ?>">
                          {/* <?= $className->className; ?> */}
                        </option>
                        {/* <?php endforeach; ?> */}
                      </select>
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
    </>
  )
}
