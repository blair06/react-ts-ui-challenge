import React from "react";
import styles from "./SearchInput.module.scss";
import cb from "classnames/bind";
import { FiSearch } from "react-icons/fi";
const cn = cb.bind(styles);

const SearchInput = () => {
  return (
    <div className={cn(`container`)}>
      <FiSearch color="#696969" size={20} />
      <input className={cn(`searchInput`)} placeholder="Search" />
    </div>
  );
};

export default SearchInput;
