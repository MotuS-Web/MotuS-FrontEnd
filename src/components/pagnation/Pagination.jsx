import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import leftArrow from '../../assets/icons/Page-left.png';
import rightArrow from '../../assets/icons/Page-right.png';

const PaginateContainer = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 10px 0;
  list-style: none;
  color: #FFFFFF;
`;

const PageLink = styled.div`
  background-color: white;
  color: #FFFFFF;
`;

const Arrow = styled.img`
  height: 12px;
  vertical-align: middle;
`;

const PageNumber = styled.div`
  display: inline-block;
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
  color: #FFFFFF;

  &:hover {
    background-color: #5c859b55;
  }
`;

const ActiveNumber = styled(PageNumber)`
  color: #FFFFFF;
  background-color: #5c859b55;
`;


function Pagination({ totalItems, itemsPerPage, onChange, currentPage }) {
  
  const handlePageClick = (data) => {
    let selected = data.selected;

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
        pageClassName={PageNumber}
        pageLinkClassName={PageLink}
        previousLinkClassName={PageLink}
        nextLinkClassName={PageLink}
        activeLinkClassName={ActiveNumber}
      />
    </PaginateContainer>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  currentPage: PropTypes.number.isRequired, 
};

export default Pagination;
