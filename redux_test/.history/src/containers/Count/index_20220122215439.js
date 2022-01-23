import CountUI from '../../component/Count'
import store from '../../redux/store'
//import connect to connect UI component and redux
import{connect} from 'react-redux'

export default connect()(CountUI)


