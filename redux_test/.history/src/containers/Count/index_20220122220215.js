import CountUI from '../../component/Count'
//import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'
//use connect to create and export a container component for Count
export default connect()(CountUI)


