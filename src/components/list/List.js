import IssueListItem from '../list-item/IssueIListItem';

const IssueList = ({ items, updateIssue }) => {
  return (
    <ul>
      {items.map((item) => (
        <IssueListItem
          key={item.id}
          item={item}
          updateIssue={updateIssue}
        />
      ))}
    </ul>
  );
};

export default IssueList;
