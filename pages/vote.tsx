import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function FirstStep() {
  return (
    <div className="grid gap-5 mx-auto md:grid-cols-2 max-w-full">
      {/* <?php $x = 0 ?>
            <?php foreach ($ketua as $chief) : ?> */}
      <div className="overflow-hidden rounded-md shadow">
        <div className="relative" style={{ paddingTop: '100%' }}>
          <img src="" className="object-cover absolute top-0 w-full h-full" alt="" />
        </div>
        <div className="py-5 flex flex-col px-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-red-600">
              Calon Ketua
            </p>
          </div>
          <div>
            <p className="text-base font-bold">
              {/* <?= $chief->name; ?> */}
            </p>
          </div>
          <div className="text-sm mb-4">
            <p>
              {/* <?= $chief->className; ?> */}
            </p>
          </div>
          <button
            type="button"
            //  onclick="openDialogVisiMisi(<?= $x++; ?>, 'KETUA')"
            className="mb-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm"
          >
            Visi & misi
          </button>
          <div className="flex items-center">
            <input id="<?= $chief->id_ketua; ?>" value="<?= $chief->id_ketua; ?>" name="id_ketua" type="radio" className="select-candidates focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
            <label htmlFor="<?= $chief->id_ketua; ?>" className="ml-2">Pilih</label>
          </div>
        </div>
      </div>
      {/* <?php endforeach; ?> */}
    </div>
  )
}

function SecondStep() {
  return (
    <div className="grid gap-5 mx-auto md:grid-cols-2 max-w-full">
      {/* <?php $i = 0 ?>
                    <?php foreach ($wakil as $vice) : ?> */}
      <div className="overflow-hidden rounded-md shadow">
        <div className="relative" style={{ paddingTop: '100%' }}>
          <img src="" className="object-cover absolute top-0 w-full h-full" alt="" />
        </div>
        <div className="py-5 flex flex-col px-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-red-600">
              Calon Wakil
            </p>
          </div>
          <div className="text-base font-bold">
            {/* <?= $vice->name; ?> */}
          </div>
          <div className="text-sm mb-4">
            {/* <?= $vice->className; ?> */}
          </div>
          <button
            type="button"
            //  onclick="openDialogVisiMisi(<?= $i++; ?>, 'WAKIL')"
            className="mb-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm"
          >
            Visi & misi
          </button>
          <div className="flex items-center">
            <input id="<?= $vice->name; ?>" value="<?= $vice->id_wakil; ?>" name="id_wakil" type="radio" className="select-candidates focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
            <label htmlFor="<?= $vice->name; ?>" className="ml-2">Pilih</label>
          </div>
        </div>
      </div>
      {/* <?php endforeach; ?> */}
    </div>
  )
}

function ThirdStep() {
  return (
    <div>
      <p className="text-semibold text-3xl leading-normal">Konfirmasi</p>
      <p className="leading-normal mb-4">Apakah Anda sudah yakin dengan pilihan Anda? Pilihan Anda tidak dapat diubah kembali setelah mengirim.</p>
      <input id="cofirmVote" name="konfirmasi" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
      <span className="ml-2">Saya sudah memilih dengan benar.</span>
    </div>
  )
}

export default function Vote() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const conditionalComponent = () => {
    switch (page) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      default:
        return <FirstStep />
    }
  }

  const previousStep = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const nextStep = () => {
    if (page < 3) {
      setPage((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleClick = () => {
    router.push({
      pathname: '/response',
    })
  }
  return (
    <>
      <Head>
        <title>Vote</title>
      </Head>
      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap">
              <div
                className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider"
                style={{
                  color: page >= 1 ? '#dc2626' : '#d1d5db',
                  borderColor: page >= 1 ? '#dc2626' : '#e5e7eb',
                }}
              >
                <span className="mr-3">1</span>
                Pilih Ketua
              </div>
              <div
                className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider"
                style={{
                  color: page >= 2 ? '#dc2626' : '#d1d5db',
                  borderColor: page >= 2 ? '#dc2626' : '#e5e7eb',
                }}
              >
                <span className="mr-3">2</span>
                Pilih Wakil
              </div>
              <div
                className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider"
                style={{
                  color: page >= 3 ? '#dc2626' : '#d1d5db',
                  borderColor: page >= 3 ? '#dc2626' : '#e5e7eb',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Konfirmasi
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-sm md:max-w-screen-md px-4 sm:px-6 lg:px-8 pb-8">
          <form id="vote" action="<?= base_url('/application/votepost/; . session()->get('voterlogin')); ?>" method="POST">
            {conditionalComponent()}
            <div className="mt-4">
              <button
                onClick={previousStep}
                style={{ display: page <= 1 ? 'none' : 'initial' }}
                className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none w-auto sm:text-sm"
                type="button"
              >
                Kembali
              </button>
              <button
                onClick={page >= 3 ? handleClick : nextStep}
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none w-auto sm:text-sm"
                type="button"
              >
                {page >= 3 ? 'Kirim' : 'Berikutnya'}
              </button>
            </div>
          </form>
        </div>
        <div id="dialog" className="fixed z-50 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block">
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
                      Pilih kandidat
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Pilih salah satu kandidat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  // onclick="closeDialog()"
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="dialogConfirm" className="fixed z-50 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block">
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
                      Konfirmasi pilihan Anda.
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Anda perlu mengonfirmasi pilihan Anda sebelum mengirim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  // onclick="closeDialogConfirm()"
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="dialogVisiMisi" className="fixed z-50 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Visi
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500" id="visi" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Misi
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500" id="misi" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  // onclick="closeDialogVisiMisi()"
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
