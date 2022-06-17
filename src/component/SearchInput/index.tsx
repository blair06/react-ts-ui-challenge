import React from "react";
import styles from "./SearchInput.module.scss";
import cb from "classnames/bind";
import { FiSearch } from "react-icons/fi";
const cn = cb.bind(styles);
interface SearchInputProps {
  className?: string;
  iconColor?: string;
}
const SearchInput = (props: SearchInputProps) => {
  const { className, iconColor } = props;
  return (
    <div className={cn(`container`, className)}>
      <FiSearch color={iconColor} size={20} />
      <input className={cn(`searchInput`)} placeholder="Search" />
    </div>
  );
};

export default SearchInput;
