import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const LIMIT = 5;

const fetchFruitsWithCount = async (page: number, limit: number) => {
  const response = await axios.get(
    `http://localhost:4001/Fruits?_page=${page}&_limit=${limit}`
  );
  const totalCount = Number(response.headers["x-total-count"]);
  return {
    data: response.data,
    totalCount: totalCount,
  };
};

/**
 * Helper function to generate the page numbers for pagination.
 * It creates a range of numbers with ellipses for large page counts.
 */
const generatePagination = (currentPage: number, totalPages: number) => {
  // If there are 7 or fewer pages, show all of them
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is near the beginning
  if (currentPage <= 2) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  // If the current page is near the end
  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

const PaginatedQueriesScreen = () => {
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("page")) || 1;
  });

  // State and TanStack Query hooks remain the same...
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", String(LIMIT));
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [page]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setPage(Number(params.get("page")) || 1);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["fruits", page, LIMIT],
    queryFn: () => fetchFruitsWithCount(page, LIMIT),
    placeholderData: (previousData) => previousData,
  });

  const totalPages = data ? Math.ceil(data.totalCount / LIMIT) : 0;
  const paginationRange = generatePagination(page, totalPages);

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }
  if (isError) {
    return <div className="p-4">Error fetching data: {error.message}</div>;
  }

  return (
    <div className="p-4">
      {/* ... h2 title and mapping over data.data ... */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold">Fruits List 🍓</h2>
        {isFetching && <div className="text-blue-600">Fetching...</div>}
      </div>

      <div
        className={`transition-opacity ${isFetching ? "opacity-50" : "opacity-100"
          }`}
      >
        {data?.data.map((fruit: any) => (
          <div
            key={fruit.id}
            className="p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            {fruit.name}
          </div>
        ))}
      </div>

      {/* --- UPDATED: Pagination with numbered links --- */}
      <Pagination className="mt-4 flex justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(page - 1)}
              className={
                page === 1 || isFetching
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {/* Map over the generated page numbers and ellipses */}
          {paginationRange.map((pageNumber, index) =>
            typeof pageNumber === "number" ? (
              <PaginationItem key={`${pageNumber}-${index}`}>
                <PaginationLink
                  onClick={() => setPage(pageNumber)}
                  isActive={page === pageNumber}
                  className={isFetching ? "pointer-events-none opacity-50" : "cursor-pointer"}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(page + 1)}
              className={
                page >= totalPages || isFetching
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginatedQueriesScreen;
