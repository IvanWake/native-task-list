import {View, Text} from 'react-native';
import tw from 'twrnc';
import Task from './Task';

const TaskList = () => {
  const tasks = [
    {
      taskText: 'Умыться',
      isFinish: true,
    },
    {
      taskText: 'Поесть',
      isFinish: false,
    },
    {
      taskText: 'Погулять',
      isFinish: false,
    },
  ];
  return (
      <View>
        <Text style={tw`text-[3rem] text-white`}>My tasks</Text>
        {
          tasks.map((task) => (
              <Task task={task.taskText} finish={task.isFinish}/>
          ))
        }
      </View>
  );
};

export default TaskList;