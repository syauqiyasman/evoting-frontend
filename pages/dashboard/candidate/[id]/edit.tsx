import Head from 'next/head'

export default function DashboardCandidateEdit() {
  return (
    <>
      <Head>
        <title>Dashboard - Edit Candidate</title>
      </Head>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Ketua</h3>
              <p className="mt-1 text-sm text-gray-600">
                Tambah orang yang akan menjadi kandidat.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              action="<?= base_url('/candidatescontroller/updateketua/' . $ketua->id_ketua); ?>"
              method="POST"
            // enctype="multipart/form-data"
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label htmlFor="jabatanpreview" className="block text-sm font-medium text-gray-700">Jabatan</label>
                      <input readOnly type="text" name="jabatanpreview" id="jabatanpreview" className="mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md py-2 px-3" value="Ketua" />
                    </div>
                  </div>
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
                        <option value="<?= $ketua->id_className; ?>">
                          {/* <?= $ketua->className; ?> */}
                        </option>
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
                        {/* <?= old('visi')?old('visi'): $ketua->visi;?> */}
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
                      <textarea id="misi" name="misi" rows={3} className="h-32 mt-1 focus: outline-none focus: ring-blue-500 focus: border-blue-500 block w-full shadow-sm sm: text-sm border border-gray-300 rounded-md py-2 px-3">
                        {/* <?= old('misi') ? old('misi') : $ketua->misi; ?> */}
                      </textarea>
                    </div>
                    <div className="text-sm text-red-600">
                      {/* <?= $validation->getError('misi');?> */}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                      Foto
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden bg-gray-100 rounded-full">
                        <img src="<?= base_url('/img/$ketua->image'); ?>" alt="" className="h-full w-full object-cover rounded-full" />
                      </span>
                      <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none ml-5 py-2 px-3 border border-gray-300 shadow-sm text-sm leading-4 hover:bg-gray-50 focus:outline-none">
                        <span>Upload photo</span>
                        <input id="image" name="image" type="file" className="sr-only" />
                      </label>
                    </div>
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
              <form action="<?= base_url('/candidatescontroller/deleteketua/' . $ketua->id_ketua); ?>">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Hapus
                </button>
              </form>
              <button
                // onclick="closeDialog()"
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
