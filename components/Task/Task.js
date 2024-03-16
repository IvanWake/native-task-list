import { View, Text } from 'react-native';
import tw from 'twrnc'


const Task = () => {
  return (
      <View style={tw`bg-white rounded-xl my-[2.5px] flex flex-wrap`}>
        <View style={tw`bg-black rounded-full p-2`}></View>
        <Text style={tw`text-center`}>Задача</Text>
      </View>
  );
}

export default Task;