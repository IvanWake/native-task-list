import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc'
import Task from './Task';

const TaskList = () => {
  return (
      <View>
        <Text style={tw`text-[3rem] text-white`}>My tasks</Text>
          <Task />
          <Task />
          <Task />
      </View>
  );
}


export default TaskList;