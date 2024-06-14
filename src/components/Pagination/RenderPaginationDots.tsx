import { FC } from "react";
import css from "./RenderPaginationDots.module.css";

interface IProps {
  currentPage: number;
  total: number;
  handlePageChange: (value: number) => void;
}

const RenderPaginationDots: FC<IProps> = ({
  currentPage,
  total,
  handlePageChange,
}) => {
  const totalPages = Math.ceil(total / 5);

  const dots = [];
  const maxDots = 5;
  const middleRange = Math.floor(maxDots / 2);

  let start = Math.max(1, currentPage - middleRange);
  let end = Math.min(totalPages, currentPage + middleRange);

  if (currentPage <= middleRange) {
    end = Math.min(totalPages, maxDots);
  } else if (currentPage > totalPages - middleRange) {
    start = Math.max(1, totalPages - maxDots + 1);
  }

  for (let page = start; page <= end; page++) {
    dots.push(
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`${css.dot} ${currentPage === page ? css.activeDot : ""}`}
      />
    );
  }

  if (start > 1) {
    dots.unshift(<span key="startEllipsis">...</span>);
    dots.unshift(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`${css.dot} ${currentPage === 1 ? css.activeDot : ""}`}
      />
    );
  }

  if (end < totalPages) {
    dots.push(<span key="endEllipsis">...</span>);
    dots.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`${css.dot} ${
          currentPage === totalPages ? css.activeDot : ""
        }`}
      />
    );
  }

  return <div className={css.pagination}>{dots}</div>;
};

export default RenderPaginationDots;
