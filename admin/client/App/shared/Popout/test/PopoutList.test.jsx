import React from 'react';
import { shallow } from 'enzyme';
import demand from 'must';
import PopoutList from '../PopoutList';

describe('<PopoutList />', () => {
	it('should render a div', () => {
		const component = shallow(<PopoutList />);
		demand(component.find('div').length).eql(1);
	});

	it('should have a class of PopoutList', () => {
		const component = shallow(<PopoutList />);
		demand(component.find('div').prop('className')).eql('PopoutList');
	});

	it('should render its children', () => {
		const children = (<h1>Hello World!</h1>);
		const component = shallow(
			<PopoutList>{children}</PopoutList>
		);

		demand(component.contains(children)).true();
	});
});
