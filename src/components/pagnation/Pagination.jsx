import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import leftArrow from '../../assets/icons/Page-left.png';
import rightArrow from '../../assets/icons/Page-right.png';

const PaginateContainer = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;  // Ensure items are vertically centered
  padding: 10px 0;
  list-style: none;
`;

const Page = styled.div`
  margin: 0 3px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #5c859b;
  cursor: pointer;
  font-family: 'Nanum Gothic';
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: center;

  &:hover {
    background-color: #5c859b55;
  }
`;

const PageLink = styled.div`
  background-color: white;
`;

const ActiveLink = styled.div`
  color: #D94A56;
`;

const Arrow = styled.img`
  height: 12px;
  vertical-align: middle;
`;

function Pagination({ totalItems, itemsPerPage, onChange }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);

    if (onChange) {
      onChange(selected);
    }
  };

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel={<Arrow src={leftArrow} alt="Prev" />}
        nextLabel={<Arrow src={rightArrow} alt="Next" />}
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
        pageClassName={Page}
        pageLinkClassName={PageLink}
        previousLinkClassName={PageLink}
        nextLinkClassName={PageLink}
        activeLinkClassName={ActiveLink}
      />
    </PaginateContainer>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Pagination;
