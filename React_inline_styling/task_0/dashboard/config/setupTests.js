import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'regenerator-runtime/runtime'; // Ensure compatibility with async functions if used in tests

Enzyme.configure({ adapter: new Adapter() });