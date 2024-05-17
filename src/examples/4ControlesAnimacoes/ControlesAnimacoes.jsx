import { motion, useAnimationControls } from 'framer-motion';

const ControlesAnimacoes = () => {
	// Até aqui trabalhamos com o basico do framer motion. Percebe-se que em nossos exercicios anteriores, nos apenas fizemos
	// animações que ocorrem de forma automatica ou quando interagimos com o objeto animado em si. Mas, e se quisermos fazer
	// que uma animação seja ativada por uma ação em outro lugar?

	// Veja bem, em nossos outros exercicios, nos tinhamos um botão para mostrar ou ocultar nossos elementos, mas o que ele
	// basicamente fazia era um ternario de verificação, pra mostrar ou não o elemento. O que nos queremos agora é um ativador
	// de verdade, um que vai acionar uma animação em outro lugar.

	// Para isso, vamos começar a usar algumas propriedades novas.

	// A primeira dela é a 'variants', como o nome pre-supõe, 'variants' vai ser uma variavel que vai armazenar valores pré
	// definidos para nosso elemento. Então, ao inves de passarmos toda a animação dentro do initial, animate ou exit, nos
	// nos vamos passar variaveis. Isso vai servir para deixar o codigo mais limpo e legivel.

	// Veja o Exemplo 1

	// Repare que agora nos temos a propriedade 'variants' e nela estamos armazenando os valores que queremos executar
	// Para usar essas variaveis, como voce pode chamar o nome delas aonde voce quiser usa-las, então ali, pra deixar mais
	// didatico, eu fiz as variaveis initial (que vai ser o valor inicial), flip (a animação de flipagem que eu quero executar)
	// e banana (lembre-se que variaveis tem nomes arbitrarios).

	//-----------------------------------------------------------------------------------------------

	// Voce deve estar se perguntando, "Mas Paulo, muito legal as variaveis, mas e aquele negocio de ativar a animação de outro lugar?"
	// Bem, eu tinha que explicar as variaveis antes se não voce ia ficar perdido. Mas sim, partindo pra essa parte em especifico.
	// Pra fazer isso, nos vamos utilizar mais um recurso do framer motion, nos utilizamos o useAnimationControls

	const controls = useAnimationControls();

	// Esse hook vai ser responsavel por nos dar controle sobre uma determinada variavel, então por exemplo, nos queremos que
	// o button ative essa animaçao em especifico, certo? Então nos vamos fazer assim:

	const handleClickStart = () => {
		controls.start('flip');
	};

	const handleClickStop = () => {
		controls.stop('flip');
	};

	// Passe essa variavel aonde voce quer que seja ativada no seu codigo, no nosso caso no button.

	// Porem, se voce fizer somente isso, não irá funcionar. Vamos fazer uma escada aqui do que ira acontecer.

	// Importamos o controls, definimos que ele vai 'startar' (comecar) a variavel flip, colocamos dentro de uma função,
	// passamos uma função pro button e teoricamente ja esta pronto, correto? Não.

	// Voce não esta falando que animação esse controls esta controlando. Repare que no exemplo 2 nos trocamos o valor de
	// animate, ao inves de chamarmos animate='nome da variavel', agora chamamos animate={controls}.

	// Assim, definimos que aquela animação tem o valor de controls, o valor de controls é o hook, usamos esse hook dentro da
	// função de onClick, permitindo assim ativarmos a animação através do onClick.

	// Veja Exemplo 2

	return (
		<div>
			<div className="bsc-anmt">
				<div className="example2">
					<button className="exp-btn">Flip</button>

					<motion.div
						className="card"
						transition={{ duration: 2, ease: 'easeInOut', times: [0.25, 0.5, 0.75, 1] }}
						variants={{
							initial: { rotate: '0deg' },
							flip: { rotate: ['180deg', '90deg', '360deg', '0deg'] },
							banana: { backgroundColor: 'red' },
						}}
						initial="initial"
						animate="flip"
						exit="banana"
					/>
				</div>

				<div className="example2">
					<h1>Exemplo 2</h1>
					<div>
						{/* button que vai receber a função */}
						<button onClick={handleClickStart} className="exp-btn">
							Flip
						</button>
						<button onClick={handleClickStop} className="exp-btn">
							Stop
						</button>
					</div>

					<motion.div
						className="card"
						transition={{ duration: 2, ease: 'easeInOut', times: [0.25, 0.5, 0.75, 1] }}
						variants={{
							initial: { rotate: '0deg' },
							flip: { rotate: ['180deg', '90deg', '360deg', '0deg'] },
							banana: { backgroundColor: 'red' },
						}}
						initial="initial"
						animate={controls} // Trocando o valor para controls
						exit="banana"
					/>
				</div>
			</div>
		</div>
	);
};

export default ControlesAnimacoes;
