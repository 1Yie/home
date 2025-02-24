import React from 'react';
import style from './main.module.scss';

const titles = {
	title: '存活于二十一世纪互联网的边缘',
	subtitle: '欢迎访问寒舍',
};

const Main: React.FC = () => {
	return (
		<div className={style.main}>
			<section id={style.container}>
				<div className={style.content}>
					<h1>{titles.title}</h1>
					<p>{titles.subtitle}</p>
				</div>
			</section>
		</div>
	);
};

export default Main;
