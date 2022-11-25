import Head from 'next/head'

export default function DashboardCandidateAdd() {
  return (
    <>
      <Head>
        <title>Dashboard - Add Candidate</title>
      </Head>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Tambah Kandidat</h3>
            <p className="mt-1 text-sm text-gray-600">
              Tambah orang yang akan menjadi kandidat.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            action="<?= base_url('/candidatescontroller/addcandidates'); ?>"
            method="POST"
          // enctype="multipart/form-data"
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
                    <input type="text" name="name" id="name" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" />
                    <div className="text-sm text-red-600">
                      {/* <?= $validation->getError('name');?> */}
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
                <div>
                  <label htmlFor="visi" className="block text-sm font-medium text-gray-700">
                    Visi
                  </label>
                  <div className="mt-1">
                    <textarea id="visi" name="visi" rows={3} className="h-32 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3">
                      {/* <?= old('visi'); ?> */}
                    </textarea>
                  </div>
                  <div className="text-sm text-red-600">
                    {/* <?= $validation->getError('visi'); ?> */}
                  </div>
                </div>
                <div>
                  <label htmlFor="misi" className="block text-sm font-medium text-gray-700">
                    Misi
                  </label>
                  <div className="mt-1">
                    <textarea id="misi" name="misi" rows={3} className="h-32 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3">
                      {/* <?= old('misi'); ?> */}
                    </textarea>
                  </div>
                  <div className="text-sm text-red-600">
                    {/* <?= $validation->getError('name'); ?> */}
                  </div>
                </div>
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Foto
                  </label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none ml-5 py-2 px-3 border border-gray-300 shadow-sm text-sm leading-4 hover:bg-gray-50 focus:outline-none">
                      <span>Upload photo</span>
                      <input id="image" name="image" type="file" className="sr-only" />
                    </label>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="text-base font-medium text-gray-900">Jabatan</div>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input id="ketua" value="ketua" name="jabatan" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                      <label htmlFor="ketua" className="ml-3 block text-sm font-medium text-gray-700">
                        Ketua
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="wakil" value="wakil" name="jabatan" type="radio" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                      <label htmlFor="wakil" className="ml-3 block text-sm font-medium text-gray-700">
                        Wakil
                      </label>
                    </div>
                    <div className="text-sm text-red-600">
                      {/* <?= $validation->getError('jabatan'); ?> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none">
                  Simpan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
