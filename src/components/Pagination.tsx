import {Props} from "../models/reactComponentsModel";

export function Pagination({currentPage, postsPerPage, totalPosts, paginate}: Props) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <nav className="aria-label">
            <ul className="inline-flex -space-x-px">
                <li>
                    <a href="#" onClick={() => paginate(currentPage - 1 > 0 ? currentPage - 1 : currentPage)}
                       className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li key={currentPage}>
                    <a href="#" onClick={() => paginate(currentPage)} aria-current="page"
                       className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                        {currentPage}
                    </a>
                </li>
                {currentPage + 1 <= totalPages && <li key={currentPage + 1}>
                    <a href="#" onClick={() => paginate(currentPage + 1)} aria-current="page"
                       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {currentPage + 1}
                    </a>
                </li>}
                {currentPage + 2 <= totalPages && <li key={currentPage + 2}>
                    <a href="#" onClick={() => paginate(currentPage + 2)} aria-current="page"
                       className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {currentPage + 2}
                    </a>
                </li>}
                {currentPage + 1 <= totalPages && <li>
                    <a href="#" onClick={() => paginate(currentPage + 1 <= totalPages ? currentPage + 1 : currentPage)}
                       className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>}
            </ul>
        </nav>
    )
}