import { useRef } from 'react';
import imgNoBg from '../../assets/image-bottom.png';
import imgWithBg from '../../assets/image-full.png';
import { useScroll, useTransform, motion } from 'framer-motion';

const RolagemEmCamadas = () => {
	// Neste exemplo, faremos um component de paralax baseado na rolagem.

	// Simplificando, é um componente que seus elementos vão se mover de forma diferentes durante a rolagem do scroll.

	// Aqui eu comecei importano 2 imagens, uma é a imagem inteira e a outra imagem é um recorte das montanhas da primeira imagem.

	// O que quero fazer aqui é que quando o usuario comece a scrollar, O titulo vai sumindo pra dentro da montanha.

	// Repare que temos um z-index de 0 na imagem completa, um zindex de 10 no titulo e um zindex de 20 nas montanhas recortadas, tendo assim
	// Imagem > titulo > montanha.

	// Feito isso, começaremos a usar a logica por tras disso para fazer funcionar.

	// Primeiro, importaremos o useReff, para que tenhamos uma referencia do elemento que vai ativar a logica de scrollagem.

	const ref = useRef(null);

	// Depois vamos chamar a função scrollYProgress do hook useScroll

	const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

	// Repare que o primeiro argumento é um target (alvo), esse target é o elemento em ref.
	// O segundo argumento é o offset

	// Ele vai ser responsavel por definir o ponto inicial e final da rolagem

	// 'start start' significa que o ponto de início da rolagem é 0%. O primeiro 'start' indica o início da página,
	// o segundo 'start' indica que esse é o ponto de referência para o início do cálculo do progresso da rolagem.

	// 'end start' significa que o fim da rolagem será considerado como 100% do progresso da rolagem. 'End' indica o final da página,
	// enquanto 'start' indica novamente que é o ponto de referência para o cálculo do progresso da rolagem.

	//--------

	// Tendo o valor do progresso de rolagem, vamos usar o hook useTransform para fazer mudanças no nosso elemento. Como pode ver abaixo, as variaveis
	// usam 3 valores como parametro, o primeiro vai ser o valor do progresso do scroll, o segundo valor vai ser do calculo e o terceiro valor vai ser
	// as mudanças que vamos fazer no nosso codigo.

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	// Repare que eu uso a variavel no style da div, eu colo y = backgroundY

	// o primeiro parametro vai ter um valor de 0% a 100% da rolagem, o segundo valor indica as divisões dos calculos, basicamente aqui é um valor de 0-100,
	// mas relacionado a estilização. Então, quando scrollY tiver em 10%, nosso 2° parametro vai valer 0.1 e a estilização vai valer 0.1 (10%) dos valores
	// entre 0 e 100%.

	// O terceiro parametro é a estilização.

	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);

	// Aqui eu repito progresso, porem ao inves de Y = 100%, aqui eu quero que o h1 suba ainda mais (300%)

	//------

	// Exemplo de como seria uma variavel que fosse trocar a cor da fonte baseado no scroll

	const titleColor = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], ['white', 'red', 'red', 'white']);

	// Repare que ai que coloquei que quando o scroll tiver entre 50% e 75%, nossa fonte vai ser vermelha.

	// É isto, a explicação acaba aqui :)

	return (
		<>
			<div className="plxctr" ref={ref}>
				<motion.h1 style={{ zIndex: 10, y: textY }}>PARALLAX</motion.h1>

				<motion.img style={{ zIndex: 0, y: backgroundY }} src={imgWithBg} />
				<motion.img style={{ zIndex: 20 }} src={imgNoBg} />
			</div>

			<div className="lorem">
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
				<div>
					Lorem ipsum dolor sit amet. Est iste ducimus quo reiciendis eius et accusantium quia id
					assumenda magnam qui officiis nihil est quos harum. Et fugit quae ut necessitatibus dolores ut
					molestiae facilis 33 iusto minus. Qui voluptatibus consectetur id sequi esse ut quos
					laudantium. Et doloremque neque qui dolores ipsum et dolor tempore qui temporibus eaque.
				</div>
			</div>
		</>
	);
};

export default RolagemEmCamadas;
