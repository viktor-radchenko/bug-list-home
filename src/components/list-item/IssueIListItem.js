import './IssueListItem.css';

const IssueListItem = ({ item, updateIssue }) => {
  return (
    <li className={`issue-item ${item.priority ? item.priority : ''}`}>
      <div className='item-id'>{item.id}</div>
      <div className='item-title'>{item.title}</div>
      <div className='item-priority'>
        <select name='prority' value={item.priority} onChange={(e) => updateIssue(item.id, e.target.value)}>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select>
      </div>
    </li>
  );
};

export default IssueListItem;
