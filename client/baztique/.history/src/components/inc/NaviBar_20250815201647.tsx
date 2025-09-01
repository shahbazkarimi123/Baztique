function NaviBar(){
    return (
        <div className="bg-gray-700 h-20 flex items-center justify-between
        ">
            <div>
                <h1 className="text-gray-300 font-bold text-4xl pl-6">Baztique</h1>
            </div>
            <div className="flex items-center pr-6 space-x-5">

            <ul>
                <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">Man</li>
            </ul>
            <ul>
                <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">Man</li>
            </ul>
            <ul>
                <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">Man</li>
            </ul>
            <ul>
                <li className="text-gray-300 hover:text-white cursor-pointer text-2xl">Man</li>
            </ul>
            </div>

        </div>
    )
}
export default NaviBar;