import React from 'react';
import style from './projects.module.css';
import { Icon } from '@ricons/utils';
import { BookOpen, Code, CheckCircle } from '@ricons/fa';

const titles = {
	title: '跳转',
	subtitle: '不才明主弃，多病故人疏。',
};

const iconComponents = {
	Blog: BookOpen,
	Code: Code,
	Check: CheckCircle,
};

const projects = [
	{
		name: "ichiyo's Blog",
		description: '我的个人博客',
		link: 'https://blog.ichiyo.in/',
		icon: 'Blog',
	},
	{
		name: 'ICHIYO STATUS',
		description: '用于检测各种服务的状态',
		link: 'https://status.ichiyo.in/',
		icon: 'Check',
	},
];

const Projects: React.FC = () => {
	return (
		<>
			<div id={style.projects}>
				<section className={style.container}>
					<div className={style.intro}>
						<h2>{titles.title}</h2>
						<p>{titles.subtitle}</p>
					</div>

					<ul className={style.projectList}>
						{projects.map((project, index) => {
							const IconComponent = iconComponents[project.icon as keyof typeof iconComponents];

							if (!IconComponent) {
								console.warn(`Icon component not found for icon name: ${project.icon}`);
								return null;
							}

							return (
								<a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className={style.project}>
									<div className={style.logo}>
										<Icon size="48">
											<IconComponent aria-label={project.name} />
										</Icon>
									</div>
									<div className={style.details}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
									</div>
									<div className={style.empty}></div>
								</a>
							);
						})}
					</ul>
				</section>
			</div>
		</>
	);
};

export default Projects;
