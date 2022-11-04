import React from 'react'

function Search({ searchTerm, setSearchTerm, setFilterBy, filterBy }) {

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    function handleFilterChange(e){
        setFilterBy(e.target.value)
    }

    return (
        <div className='container'>
            <div className="wrapper">
                <input className="search" placeholder="Search" type="text" value={searchTerm} onChange={handleSearch} />
            </div>
            <div className='select' >
                <select className="Filter" value={filterBy} onChange={handleFilterChange}>
                <option value="all">Select Muscle</option>
                    <option value="back">Back</option>
                    <option value="biceps">Biceps</option>
                    <option value="calves">Calves</option>
                    <option value="chest">Chest</option>
                    <option value="hamstrings">Hamstrings</option>
                    <option value="quads">Quads</option>
                    <option value="triceps">Triceps</option>
                </select>
            </div>
        </div>

    )
}

export default Search