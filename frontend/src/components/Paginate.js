import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination
        style={{
          "--bs-pagination-padding-x": "1rem",
          "--bs-pagination-padding-y": "0.5rem",
          "--bs-pagination-active-bg": "#000",
          "--bs-pagination-active-border-color": "#000",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/collections/all/page/${x + 1}`
                : `/admin/productList/page/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
