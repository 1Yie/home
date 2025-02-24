import React from 'react';
import Main from './Layout/Main';
import Friends from './Layout/Friends';
import Info from './Layout/Info';

const Links: React.FC = () => {
	return (
		<>
			<Main />
			<Friends />
			<Info />
		</>
	);
};

export default Links;
