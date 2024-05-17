import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
	// Aqui trabalharemos uma animação de transição de tela.

	// Primeiro de tudo vamos definir nossas variaveis, que serão initialState, animateState e exitState

	// Agora vamos adicionar uma key, essa chave tem que ser unica para cada rota, porque todos os filhos do
	// AnimatePresence precisa de uma key unica, isso para que ele entenda quando cada elemento entra e sai do DOM

	// Aqui eu vou utilizar o react router dom para fazer isso, mas sinta-se a vontade para usar a biblioteca que
	// voce preferir

	const location = useLocation();

	// Repare que as coisas vão ficar um pouco diferentes agora. Para que essa animação funcione em todas as telas
	// precisamos envolver nosso index de rotas com esse component que estamos criando agora.

	// Assim, dizendo para o codigo que todas as rotas vão ter acesso a esse tipo de animação

	// Voltando pra parte de css

	// Vamos colocar um transition pra deixar mais smooth nossa animação

	// Uma das propriedades do css que a gente vai usar pra fazer essa animação maneira é o clip-path, voce pode usar
	// esse generator aqui pra ficar mais facil:

	// https://bennettfeely.com/clippy/

	// no nosso caso a gente quer que a nossa animação de entrada ocorra da esquerda pra direita: clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'

	// no nosso animateState vamos usar: polygon(0 0, 100% 0, 100% 100%, 0% 100%)

	// e no nosso exit vamos usar uma animação como se fosse as cortinas fechando: polygon(50% 0, 50% 0, 50% 100%, 50% 100%)

	// O background mais claro é pra que deja pra ver a animação acontecendo.

	// Não se esqueça de colocar o children como valor ali, porque voce vai envolver todas as suas rotas (elementos)
	// dentro desse component aqui

	// Basicamente é isso, essa é uma das muitas animações que voce pode fazer, então sinta-se a vontade para fazer
	// coisas mais bonitas e melhores

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="pt-ctr"
				key={location.pathname}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
				}}
				variants={{
					initialState: {
						opacity: 1,
						clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
						backgroundColor: '#070707',
					},
					animateState: {
						opacity: 1,
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
						backgroundColor: '#212121',
					},
					exitState: {
						opacity: 1,
						clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
						backgroundColor: '#070707',
					},
				}}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
