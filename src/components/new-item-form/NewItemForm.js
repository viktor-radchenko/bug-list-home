import { useState } from 'react';

export const NewItemForm = ({ handleItemAdd }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.itemName.value;
    if (title === '') return;
    handleItemAdd(title);
    setName('');
  };

  return (
    <form className='form controls__new-item' onSubmit={handleSubmit}>
      <div className='form__inner'>
        <label className='form__label' htmlFor='itemName'>
          <span className='sr-only'>Add new issue</span>
        </label>
        <input
          className='form__input'
          placeholder='Type item name'
          type='text'
          id='itemName'
          name='itemName'
          onChange={handleChange}
          value={name}
        />
      </div>
      
      <button className='btn form__btn ' type='submit'>+</button>
    </form>
  );
};
