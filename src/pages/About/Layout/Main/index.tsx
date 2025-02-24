import React from 'react';
import style from './main.module.scss';

const Main: React.FC = () => {
	return (
		<>
			<div className={style.aboutContainer}>
				<section id={style.about}>
					<h1>About Me</h1>
				</section>
			</div>
			<div className={style.space}>
				<section id={style.spaceConent}></section>
			</div>
		</>
	);
};

export default Main;
