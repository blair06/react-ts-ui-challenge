import React, { ReactNode } from "react";
import styles from "./SearchInput.module.scss";
import cb from "classnames/bind";
import { FiSearch } from "react-icons/fi";
const cn = cb.bind(styles);
interface SearchInputProps {
  className?: string;
  iconColor?: string;
  children?: ReactNode;
}
const SearchInput = (props: SearchInputProps) => {
  const { className, iconColor, children } = props;
  return (
    <div className={cn(`container`, className)}>
      <div className={cn(`wrapper`)}>
        <FiSearch color={iconColor} size={20} />
        <input className={cn(`searchInput`)} placeholder="Search" />
      </div>

      {children}
    </div>
  );
};

export default SearchInput;
