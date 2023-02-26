/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill'
import 'raf/polyfill'

import { shallow, render, mount, configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
