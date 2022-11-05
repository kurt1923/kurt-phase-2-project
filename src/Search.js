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
                <option value="">Select Muscle</option>
                    <option value="Back">Back</option>
                    <option value="Biceps">Biceps</option>
                    <option value="Calves">Calves</option>
                    <option value="Chest">Chest</option>
                    <option value="Hamstrings">Hamstrings</option>
                    <option value="Quads">Quads</option>
                    <option value="Triceps">Triceps</option>
                </select>
            </div>
        </div>

    )
}

export default Search