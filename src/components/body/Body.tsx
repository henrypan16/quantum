export const Body = () => {
    const mockData = [
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Dell XPS 13',
            size: 'Rose Gold',
            progress: 'Laptop',
            status: '$1999',
            seeds: '3',
            peers: '4',
            downSpeed: '15 MB/s',
            upSpeed: '3 MB/s',
            ratio: '0.3',
            downloaded: '15GB',
            uploaded: '800MB',
            time: '8'
        },
        {
            name: 'Lenovo ThinkPad X1 Carbon',
            size: 'Black',
            progress: 'Laptop',
            status: '$2499',
            seeds: '6',
            peers: '7',
            downSpeed: '25 MB/s',
            upSpeed: '6 MB/s',
            ratio: '0.5',
            downloaded: '25GB',
            uploaded: '1.5GB',
            time: '12'
        },
        {
            name: 'HP Spectre x360',
            size: 'Copper',
            progress: 'Laptop',
            status: '$1799',
            seeds: '2',
            peers: '3',
            downSpeed: '10 MB/s',
            upSpeed: '2 MB/s',
            ratio: '0.2',
            downloaded: '10GB',
            uploaded: '500MB',
            time: '6'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
    ];

  return (
    <>
        <main className="p-4 md:ml-64 h-screen pt-20 relative">
            <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="h-full">
                        {['Name', 'Size', 'Progress', 'Status', 'Seeds', 'Peers','Down Speed', 'Up Speed', 'Ratio', 'Downloaded', 'Uploaded', 'Time']
                            .map((item, index) => <th key={index} scope="col" className="px-6 py-3">
                                    {item}
                                </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {Object.values(item).map((value, index) => (
                                <td key={index} className="px-6 py-4 whitespace-nowrap dark:text-white">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </>
  )
}
