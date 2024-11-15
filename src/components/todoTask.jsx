import { Checkbox } from "antd";

const todoTask = ({Title = 'Task 1'}) => {
  return (
    <div> 
        <Checkbox style={{paddingLeft: '10px'}}> {Title} </Checkbox>
    </div>
  ); 
    
};
export default todoTask;

