import React from "react";
import HeaderItem from "../HeaderItem/HeaderItem";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>
          {/* send field and text of header depart because field text and string is different sometimes  */}
          <HeaderItem field="id">Id</HeaderItem>
        </th>
        <th>
          <HeaderItem field="">Image</HeaderItem>
        </th>
        <th>
          <HeaderItem field="date">Date</HeaderItem>
        </th>
        <th>
          <HeaderItem field="name">Name</HeaderItem>
        </th>
        <th>
          <HeaderItem field="status">Status</HeaderItem>
        </th>
        <th>Operation</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
