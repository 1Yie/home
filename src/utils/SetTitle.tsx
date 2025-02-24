/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const DefaultElement = ({ element: Component, meta }: any) => {
	//这个组件接受两个参数，第一个为路由中本来就要用的组件，第二个是自定义标题。
	useEffect(() => {
		if (meta.title) {
			document.title = `${meta.title}`;
		} else {
			document.title = '载入中...';
		}
	}, [meta]);
	return <Component />;
};

export default DefaultElement;
