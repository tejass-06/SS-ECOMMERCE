import './Pagination.css';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="pagination flex justify-center gap-3 mt-10">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            aria-current={currentPage === page ? 'page' : undefined}
            className={`w-10 h-10 rounded-xl ${
              currentPage === page ? 'bg-white text-black' : 'bg-white/10'
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
