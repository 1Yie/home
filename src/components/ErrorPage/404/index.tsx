import React from 'react';
import style from './404.module.scss';

const NotFoundPage: React.FC = () => {
	return (
		<>
			<div className={style.Error404}>
				<section id={style.error}>
					<h1>404</h1>
					<h2>找不到页面</h2>
					<p>访问的页面不存在</p>
					<a href="/">返回主页</a>
				</section>
			</div>
		</>
	);
};

export default NotFoundPage;
