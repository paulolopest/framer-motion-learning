import React from 'react';
import { motion, useInView } from 'framer-motion';

const AnimacoesPontoDeVista = () => {
	const [example1, setExample1] = React.useState(false);
	const [example2, setExample2] = React.useState(false);

	// Nesse topico nos vamos aprender sobre "coisas que acontecem quando elementos aparecem na nossa tela" (desculpa o nome)

	// No framer motion, nos temos uma propriedade que se chama whileInView (enquanto estiver em vista), que assim como o
	// whileTap e whileHover tambem vai disparar uma ação quando seu pré requesito for cumprido, nesse caso, quando o elemento
	// aparecer na tela.

	// Então se voce passar na sua motion.div 'whileInView:{{opacity: 1}}' ele vai mostrar pra voce o elemento somente quando
	// ele for avistado

	// Veja o exemplo 1

	// Repare que nosso elemento so é visto enquanto esta em vista da nossa tela.

	//--------------------------------------------------------------------------------------------------

	// Existe outro modo de fazer isso tambem.

	// Para fazer isso, vamos ter que fazer alguns pre-requesitos, então preste bastante atenção.

	// O nosso codigo não consegue de forma natural, saber quando que nos estamos vendo aquele elemento ou não, então, por isso
	// nos iremos utilizar o hook 'useRef' do proprio react:

	const ref = React.useRef(null);

	// O useRef será responsavel por criar nossa referencia no codigo.

	// O elemento que colocaremos a referencia sera o elemento que nos queremos usar como referencia para aquilo aconteça

	// Veja o exemplo 2

	// Apos setarmos nossa referencia, nos agora vamos usar um outro hook do framer motion, o useInView

	const isInView = useInView(ref);

	// Essa variavel que criamos aqui retorna um boolean, esse boolean literalmente vai retorna true ou false dependendo
	// se aquele elemento está ou não no campo de visão.

	// Baseado nisso, nos podemos criar varias coisas, como uma função de use effect:

	React.useEffect(() => {
		console.log('Is in view?', isInView);
	}, [isInView]);

	// Fica ao seu criterio o que vai fazer com essa informação, mas agora saiba que voce tem ela.

	return (
		<div className="bsc-anmt">
			<div className="example3">
				<div>
					<h1>Exemplo 1 (scroll)</h1>

					<button onClick={() => setExample1(!example1)} className="exp-btn">
						Show / Hide
					</button>
				</div>

				{example1 && (
					<motion.div
						className="card2"
						initial={{ x: 500 }}
						whileInView={{ rotate: ['180deg', '90deg', '360deg', '0deg'], x: 0 }} // Executar quando estiver em vista
						transition={{ duration: 2, times: [0, 0.33, 0.66, 1] }}
					/>
				)}
			</div>

			<div className="example3">
				<div>
					<h1>Exemplo 2 (scroll)</h1>

					<button onClick={() => setExample2(!example2)} className="exp-btn">
						Show / Hide
					</button>
				</div>

				<div style={{ position: 'relative', top: '30rem' }}></div>

				{example2 && (
					<motion.div
						ref={ref} // Nossa referencia
						className="card2"
						transition={{ duration: 2 }}
					/>
				)}
			</div>
		</div>
	);
};

export default AnimacoesPontoDeVista;
