const Filter = ({ filterBy, handlePriorityFilter }) => {
  return (
    <>
      Priority:
      <select name='showItems' value={filterBy} onChange={handlePriorityFilter}>
        <option value='all'>all</option>
        <option value='low'>low</option>
        <option value='medium'>medium</option>
        <option value='high'>high</option>
      </select>
    </>
  );
};

export default Filter;
