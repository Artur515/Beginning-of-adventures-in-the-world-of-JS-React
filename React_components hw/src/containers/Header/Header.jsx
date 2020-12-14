import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Header = ({
    handleSearchFilms, handleSortFilms
}) => {
    return (
        <header>
            <select onChange={handleSortFilms}>
                <option>default</option>
                <option>from</option>
                <option>to</option>
            </select>
            <Input onChange={handleSearchFilms} />
            <Button>Search</Button>
        </header>
    )
}
export default Header