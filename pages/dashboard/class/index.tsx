import Link from 'next/link'
import Head from 'next/head'

export default function DashboardClass() {
  return (
    <>
      <Head>
        <title>Dashboard - Class</title>
      </Head>
      <div className="mb-4 text-red-600 hover:text-red-900 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <Link href="/dashboard/class/add">Tambah Kelas</Link>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kelas
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* <?php foreach ($classes as $class) : ?> */}
                  <tr className="even:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {/* <?= $class->class; ?> */}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href="/dashboard/class/1/edit" className="text-red-600 hover:text-red-900">Edit</Link>
                    </td>
                  </tr>
                  {/* <?php endforeach; ?> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
