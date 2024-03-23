import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import tw from 'twrnc';

const Task = (props) => {
  const [buttonStyles, setButtonStyles] = useState(
      tw`items-center p-[1px] w-6 h-6 border-[3px] rounded-full`);

  useEffect(() => {
    props.finish &&
    setButtonStyles(
        tw`items-center p-[1px] w-6 h-6 border-[3px] rounded-full bg-[#9491FF]`);
  }, []);

  return (
      <View
          style={tw`bg-white rounded-xl my-[2.5px] flex flex-row py-[1.875rem] px-[1.875rem]`}>
        <View>
          <TouchableOpacity style={buttonStyles}></TouchableOpacity>
        </View>
          <Text style={tw`px-[1.875rem] text-[1.5rem]`}>{props.task}</Text>
      </View>
  );
};

export default Task;