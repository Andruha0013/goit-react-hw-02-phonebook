import PropTypes from "prop-types";
const Filter=({filterFunction})=>{
    return (
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input id="filter" type="text" name="filter" onChange={filterFunction}/>
        </div>
    );
}

export default Filter;

Filter.propTypes={
    filterFunction: PropTypes.func.isRequired,
}