import { useState, useEffect } from 'react';
import Filter from './components/filter/Filter';

import IssueList from './components/list/List';
import NewItemForm from './components/new-item-form';

import issueList from './issueListSource';

const App = () => {
  const [supportList, setSupportList] = useState(() => [...issueList]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterBy, setFilterBy] = useState('all');

  const updateIssue = (id, priority) => {
    let updatedSupportList = supportList.map((i) => {
      if (i.id === id) return { ...i, priority: priority };
      return i;
    });
    setSupportList(updatedSupportList);
  };

  const handlePriorityFilter = (e) => {
    console.log('Switching to', e.target.value);
    setFilterBy(e.target.value);
  };

  const handleItemAdd = (title) => {
    const maxId = supportList.reduce((max, item) => (item.id > max ? item.id : max), supportList[0].id);
    const newIssue = {
      id: maxId + 1,
      title,
      priority: 'low',
      resolved: false,
    };
    setSupportList((prev) => [...prev, newIssue]);
  };

  useEffect(() => {
    if (filterBy === 'all') {
      setFilteredList([...supportList]);
    } else {
      console.log(filterBy);
      let updatedSupportList = supportList.filter((i) => i.priority === filterBy);
      setFilteredList(updatedSupportList);
    }
  }, [filterBy, supportList]);

  return (
    <div>
      <h1>Issue tracker</h1>
      <div>
        <Filter filterBy={filterBy} />
        <NewItemForm handleItemAdd={handleItemAdd} handlePriorityFilter={handlePriorityFilter} />
      </div>
      <IssueList items={filteredList} updateIssue={updateIssue} />
    </div>
  );
};

export default App;
