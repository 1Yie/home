import React from 'react';
import style from './404.module.css';

const NotFoundPage: React.FC = () => {
	return (
		<>
			<div className={style.Error404}>
				<section id={style.error}>
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<p>The page you are looking for does not exist.</p>
					<a href="/">Go Back to Homepage</a>
				</section>
			</div>
		</>
	);
};

export default NotFoundPage;
