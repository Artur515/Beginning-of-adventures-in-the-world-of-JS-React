import { useState } from "react";
import React from "react";

const SearchInput = ({ users }) => {
    const [userFilter, setUserFilter] = useState(users);

    const handleSearch = (event) => {
        const { value } = event.target;
        let result = users.filter((user) => {
            return user.name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase());
        });

        setUserFilter(result);
        console.log(result);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchInput;
