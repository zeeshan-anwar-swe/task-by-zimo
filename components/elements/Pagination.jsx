import { Center, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

function Pagination({ total }) {
  const router = useRouter();
  const currentPage = parseInt(router.query.page) - 1 || 0;

  function handlePageClick(e) {
    const page = e.selected + 1;
    router.push(`/products?page=${page}`);
  }

  return (
    <Container maxW={1200} overflowX="scroll">
      <Center>
        <ReactPaginate
          pageCount={total}
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          previousLabel="<"
          activeClassName="active"
          forcePage={currentPage}
          pageRangeDisplayed={2}
        />
      </Center>
    </Container>
  );
}
export default Pagination;
