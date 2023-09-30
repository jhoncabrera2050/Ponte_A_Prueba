import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgSql,
	imgJava,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
	imgPython,
	imgJavaScript,
	imgSqlserver,
	imgDocker,
	imgNet
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.javascript}
				src={imgJavaScript}
				alt={`Categoría ${categories.javascript}`}
				gradientColor=' from-purple-500 to-pink-50'
			/>
			<CategoryCard
				category={categories.java}
				src={imgJava}
				alt={`Categoría ${categories.java}`}
				gradientColor='from-lime-400 to-teal-70'
			/>
			<CategoryCard
				category={categories.python}
				src={imgPython}
				alt={`Categoría ${categories.python}`}
				gradientColor='from-lime-400 to-teal-70'
			/>
			{/* Category Link Filosofia */}
			<CategoryCard
				category={categories.sqlserver}
				src={imgSqlserver}
				alt={`Categoría ${categories.sqlserver}`}
				gradientColor='from-red-400 to-zinc-40'
			/>
			{/* Category Link Geografia */}
			<CategoryCard
				category={categories.docker}
				src={imgDocker}
				alt={`Categoría ${categories.docker}`}
				gradientColor='from-cyan-200 to-lime-20'
			/>
			{/* Category Link Historia */}
			<CategoryCard
				category={categories.net}
				src={imgNet}
				alt={`Categoría ${categories.net}`}
				gradientColor='from-sky-300 to-indigo-90'
			/>
			{/* Category Link Literatura */}
			{/* Category Link Tecnologia */}

		</div>
	);
};
