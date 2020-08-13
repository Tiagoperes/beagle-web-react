/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

// Link.react.test.js
import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import TextArea, { TextAreaInterface } from '../../components/TextArea'

let wrapper: any
const beagleTextAreaMockProps: TextAreaInterface = {
  value: 'Testing',
  name: 'Testing',
  disabled: false,
  readonly: false,
  className:'test-class',
  onChange: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn(),
}

configure({ adapter: new Adapter() })
beforeAll(() => {
  wrapper = shallow(<TextArea {...beagleTextAreaMockProps} />)
})

test('Beagle snapshot input', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should call on change handler', () => {
  const props: any = wrapper.props()
  wrapper.simulate('change', { value: 'changed' })
  expect(props.onChange).toHaveBeenCalledTimes(1)
})

test('Should call on focus handler', () => {
  const props: any = wrapper.props()
  wrapper.simulate('focus')
  expect(props.onFocus).toHaveBeenCalledTimes(1)
})

test('Should call on blur handler', () => {
  const props: any = wrapper.props()
  wrapper.simulate('blur')
  expect(props.onBlur).toHaveBeenCalledTimes(1)
})
