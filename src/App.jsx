import React, {useState} from 'react'
import todoTask from './components/todoTask';
import { Checkbox, Space, Button, Card, Modal, Input } from 'antd';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    const newId = Date.now();
    if (inputValue.trim() !== '') { // Prevent adding empty strings
      setItems([...items, {id: newId,inputValue}]);
      setInputValue(''); // Clear the input field
    }
  };
  const handleRemoveItem = (id) => {
    // Create a new array by filtering out the item with the matching ID
    const newItems = items.filter(item => item.id !== id);

    // Update the state with the new array
    setItems(newItems);
  };
  
  return (
    <>
      <Space style={{padding: '30px'}} direction='vertical' block size='small'> 
        <p style={{color: 'black'}}>once you've completed a task just click the button of the task you completed and it will be removed</p>
        <h3 style= {{color: 'Black'}}>Task List</h3>

        <Space.Compact direction='vertical' block size='small'>
      
          {items.map((item, index) => (
            <Button style={{Paddingtop: '10px'}} type="primary" onClick={() => handleRemoveItem(item.id)}>{item.inputValue}</Button>
          ))}
        </Space.Compact>
        <Space.Compact direction='horizontal'>
          <Button style={{Paddingtop: '10px'}} type="primary" onClick={showModal}>New Task</Button>
        </Space.Compact>
        <Modal title="New Task" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Space.Compact block size="middle">
            <Input style={{width: 'calc(100% - 200px)'}} defaultValue="new Task" value={inputValue} onChange={handleInputChange}/>
            <Button type="primary" onClick={handleAddItem} >Submit</Button>
          </Space.Compact>
        </Modal>
      </Space>
      
    </>
  );
};

export default App