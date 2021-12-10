import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/Home'
import BlogPosts from './src/screens/BlogPosts'
import Counter from './src/screens/Counter'
import RandomColors from './src/screens/RandomColors'
import Test from './src/screens/Test'
import TextInput from './src/screens/TextInput'
import TutorialExcercises from './src/screens/TutorialExcercises'

const navigator = createStackNavigator(
  {
    Home,
    BlogPosts,
    Counter,
    RandomColors,
    Test,
    TextInput,
    Tutorial: TutorialExcercises
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator)
