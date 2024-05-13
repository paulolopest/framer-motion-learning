import { motion, MotionConfig } from 'framer-motion';

const GestosBasicos = () => {
	// Aqui vamos trabalhar gestos basicos
	// O primeiro que vamos trabalhar vai ser o whileTap, ele é o onClick do JS. Assim como as animações basicas, essas
	// props tambem vão acionar estilizações proprias.

	// Veja o exemplo 1

	//------------------------------------------------------------------------------------

	// O segundo é o whileHover. Como o nome sugere, as ações serão disparadas quando o usuario passar o mouse por cima

	// Veja o exemplo 2

	//------------------------------------------------------------------------------------

	// "A Paulo, mas toda vez que fizermos um component novo teremos que passar essa configurações tudo denovo?"
	// Não! No framer motion existe um component chamado 'MotionConfig', ele serve como um index de estilização. Ele armazena
	// todos os valores e passa pros filhos dele

	// Veja o exemplo 3 no codigo

	// Repare que são diferentes, mas ao serem englobados por MotionConfig herdam as propriedades dele.

	return (
		<div className="bsc-anmt">
			<div className="example2">
				<h1>Exemplo 1</h1>
				<motion.button
					className="exp-btn"
					whileTap={{ scale: 0.9, backgroundColor: 'green', color: 'white', rotate: '5deg' }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					Click me
				</motion.button>
			</div>

			<div className="example2">
				<h1>Exemplo 2</h1>
				<motion.button
					className="exp-btn"
					whileHover={{ scale: 0.9, backgroundColor: 'green', color: 'white', rotate: '5deg' }}
					transition={{ duration: 0.2, ease: 'easeInOut' }}
				>
					Hover me
				</motion.button>
			</div>

			<div className="example2">
				<h1>Exemplo 1</h1>

				<MotionConfig transition={{ duration: 0.2, ease: 'easeInOut' }}>
					<motion.button
						className="exp-btn"
						whileTap={{ scale: 0.9, backgroundColor: 'green', color: 'white', rotate: '-5deg' }}
					>
						Click me
					</motion.button>

					<motion.button
						className="exp-btn"
						whileTap={{ scale: 0.9, backgroundColor: 'red', color: 'white', rotate: '5deg' }}
					>
						Click não
					</motion.button>
				</MotionConfig>
			</div>
		</div>
	);
};

export default GestosBasicos;
