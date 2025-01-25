import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime/runtime'; // Optional if you use async/await in tests

Enzyme.configure({ adapter: new Adapter() });