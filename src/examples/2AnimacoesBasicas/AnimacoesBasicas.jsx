import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimacoesBasicas = () => {
	const [example1, setExample1] = React.useState(false);
	const [example2, setExample2] = React.useState(false);
	const [example3, setExample3] = React.useState(false);
	const [example4, setExample4] = React.useState(false);
	const [example5, setExample5] = React.useState(false);
	const [example6, setExample6] = React.useState(false);

	const navigate = useNavigate();

	// Bem, apos a breve apresentação do motion component, vamos começar com animações basicas

	// Antes de fazermos isso, temos que ter uma breve introdução das props novas que vamos usar. São elas:

	// Initial, animate, exit

	// Com seus nomes super intuitivos, voce ja pode imaginar o que cada uma é responsavel.

	// Initial vai ser o valor inicial que o elemento vai ter
	// Animate vai ser os valores de animação que voce quer passar

	// Veja o exemplo 1

	//----------------------------------------------------------------------------------------------

	// Perceba que as props são usadas da mesma forma que o css inline do react, o "style={{}}"

	// Se voce esta familiarizado com o uso de animações/keyframes do css, voce deve utilizar a propriedade
	// "transition". Aqui ela tambem é usada, porem de uma forma um pouco diferente

	// Veja o Exemplo 2

	// A sintaxe é um pouco diferente do css normal, mas ainda é super intuitiva

	//----------------------------------------------------------------------------------------------

	// Continuando no nosso topico, perceba que faltou 1 das props iniciais, o exit

	// O exit vai ocorrer antes do component ser desmontado. O que significa que antes dele sumir da tela
	// Ele vai executar o que estiver passado dentro dele

	// Veja o exemplo 3

	//----------------------------------------------------------------------------------------------

	// Bem, voce deve ter voltado aqui (espero) e eu tenho certeza de que voce pensou "ue, mas eu não vi diferença nenhuma"
	// E voce esta certo. Isso se deve ao fato de que para usarmos a propriedade "exit" nos temos que envolvelo em um component
	// Chamado <AnimatePresence/>. Ele vai ser responsavel por possibilitar que algo aconteça antes do component ser desmontado
	// Então, se voce não envolver o componente que tem o "exit" em um "AnimatePresence", a props "exit" não ira funcionar

	// Veja o exemplo 4

	// Veja que agora antes do component sumir ele faz uma serie de ações (que voce vai definir)

	// !!!!!!!!!!!
	// Isso é fora topico, mas fique atento que mudamos a forma de usar o estado do isVisible, provavelmente voce que está lendo
	// Ja sabe disso, porem, o que aconteceu ali foi que isVisible envolve toda a div nos exemplos anteriores.
	// Cuidado pra não envolver o AnimatePresence tambem.

	//----------------------------------------------------------------------------------------------

	// Para finalizar, quero mostrar a ultima coisa das animações basicas do framer motion. Atualmente em nossas animações, nos
	// temos apenas 3 valores, o valor inicial, o valor normal e o valor antes de fechar. Porem, e se na animação eu quisesse
	// passar varios valores, por exemplo, o cubo vai pra frente, depois volta, depois vai denovo.

	// Bem, e se eu te falar que é muito facil fazer isso? Basta ao inves de passarmos por exemplo 'y: 50', no passaremos os valores
	// dentro de um array, assim:

	// y: [50, -50, 100, -150, 0]

	// Então, quando eu defino Y com esse valor, eu to falando que durante a minha animação, ele vai percorrer todos esses valores.
	// Porem, para que isso funcione de forma suave, ao inves de ser uma flickada monstruosa, nos teremos que alterar nosso transition
	// adicionaremos o valor 'times'.

	// Times tambem vai ser um array e times vai ser uma representação fracionaria dos valores que definimos durante a animação. Então,
	// No nosso exemplo, passamos Y com 5 valores, então teremos que passar 5 valores em 'times' tambem, cada valor dentro do array
	// representa uma porcentagem do tempo de animação que vai levar:

	// Veja o Exemplo 5

	//----------------------------------------------------------------------------------------------

	// Existe mais uma coisa que seria interessante aprender aqui nesse topico. Repare que quando o elemento termina de desmontar
	// O componente que segura ele (invisivel, mas voce pode ver ele pelo botao e titulo), simplesmente some de uma forma muito
	// Bruta. Para concertar isso, temos uma propriedade que podemos passar chamada 'layout'.

	// Veja o Exemplo 6

	// Adicione 'layout' no elemento que precisa se reajustar de forma suave (o botão e o h1, nesse caso) e de forma automatica
	// o framer motion vai resolver isso pra voce

	return (
		<div className="bsc-anmt">
			<button onClick={() => navigate('/')}>Test</button>
			<div className="example2">
				<button
					onClick={() => setExample1(!example1)}
					style={{ width: '6rem', height: '2rem', marginBottom: '1rem' }}
				>
					Show / Hide
				</button>
				<h1>Exemplo 1</h1>

				{example1 && (
					<motion.div
						className="card" // Estilização
						initial={{ rotate: '0deg' }} // Valor inicial
						animate={{ rotate: '180deg' }} // O que a animação vai fazer
					></motion.div>
				)}

				{example1 && (
					<motion.div
						className="card" // Estilização
						initial={{ opacity: 0 }} // Começa invisivel
						animate={{ opacity: 1 }} // Fica visivel
					></motion.div>
				)}
			</div>

			<div className="example2">
				<button
					onClick={() => setExample2(!example2)}
					style={{ width: '6rem', height: '2rem', marginBottom: '1rem' }}
				>
					Show / Hide
				</button>
				<h1>Exemplo 2</h1>

				{example2 && (
					<motion.div
						className="card"
						initial={{ rotate: '0deg' }}
						animate={{ rotate: '180deg' }}
						transition={{
							duration: 0.5, // Duração da animação
							ease: 'easeInOut', // Modo de animação
						}}
					></motion.div>
				)}

				{example2 && (
					<motion.div
						className="card"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: 0.5, // Tempos em segundo
							ease: 'easeInOut', // Modo de animação
						}}
					></motion.div>
				)}
			</div>

			<div className="example2">
				<button
					onClick={() => setExample3(!example3)}
					style={{ width: '6rem', height: '2rem', marginBottom: '1rem' }}
				>
					Show / Hide
				</button>
				<h1>Exemplo 3</h1>

				{example3 && (
					<motion.div
						className="card"
						initial={{ rotate: '0deg' }}
						animate={{ rotate: '180deg' }}
						exit={{ rotate: '0deg' }} // Valores do que ele vai fazer antes de sumir
						transition={{
							duration: 0.5, // Duração da animação
							ease: 'easeInOut', // Modo de animação
						}}
					></motion.div>
				)}
			</div>

			<div className="example2">
				<button
					onClick={() => setExample4(!example4)}
					style={{ width: '6rem', height: '2rem', marginBottom: '1rem' }}
				>
					Show / Hide
				</button>
				<h1>Exemplo 4</h1>

				{/*Elemento que precisa envolver a motion.div para que o exit funcione */}
				<AnimatePresence>
					{example4 && (
						<motion.div
							className="card"
							initial={{ rotate: '0deg' }}
							animate={{ rotate: '180deg' }}
							exit={{ rotate: '0deg', backgroundColor: 'green' }} // Valores do que ele vai fazer antes de sumir
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
							}}
						></motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="example2">
				<h1>Exemplo 5</h1>

				<button className="exp-btn" onClick={() => setExample5(!example5)}>
					Show / Hide
				</button>

				<AnimatePresence mode="">
					{example5 && (
						<motion.div
							className="card"
							initial={{ scale: 0 }}
							animate={{ scale: 1, y: [0, 200, -200, -200, 0] }}
							exit={{ scale: 0 }}
							transition={{
								duration: 1,
								ease: 'easeInOut',
								times: [0, 0.25, 0.5, 0.75, 1],
							}}
						></motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="example2">
				<motion.h1 layout>Exemplo 6</motion.h1>

				<motion.button layout className="exp-btn" onClick={() => setExample6(!example6)}>
					Show / Hide
				</motion.button>

				<AnimatePresence mode="">
					{example6 && (
						<motion.div
							className="card"
							initial={{ rotate: '0deg', scale: 0 }}
							animate={{ rotate: '180deg', scale: 1 }}
							exit={{ rotate: '0deg', scale: 0 }}
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
							}}
						></motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default AnimacoesBasicas;
