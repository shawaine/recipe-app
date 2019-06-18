import React, { useState, useEffect } from "react";
import "../scss/Categories.scss";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const getCategories = async () => {
      const response = await fetch(
        "https://backendapi.turing.com/categories/inDepartment/1"
      );
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
    return () => (isSubscribed = false);
  }, []);
  return (
    <div className="categories-list">
      <ul>
        {categories.map(category => (
          <li key={category.category_id}>
            <a href=""> {category.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
