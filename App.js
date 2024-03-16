import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc'
import TaskList from './components/Task/TaskList';

const App = () => {
  return (
    <View style={tw`px-5 py-[3.75rem] bg-[#C0BFFF] h-full w-full`}>
      <StatusBar style="auto" />
      <TaskList />
    </View>
  );
}

export default App;
