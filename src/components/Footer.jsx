const Footer = () => {
	const sections = [
		{
			title: 'Comprar e Saber Mais',
			links: [
				'iPhone 17 Pro',
				'iPhone 17 Pro Max',
				'Comparar modelos',
				'acessórios',
			],
		},
		{
			title: 'Especificações',
			links: ['Características técnicas', 'Câmera', 'Bateria', 'Display'],
		},
		{
			title: 'Suporte',
			links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 26', 'Contato'],
		},
		{
			title: 'Apple',
			links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras'],
		},
	];

	const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

	return (
		<footer className='bg-gray-900 border-t border-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
				{/* Seções de links */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12'>
					{sections.map((section) => (
						<div key={section.title} className='mb-6 sm:mb-0'>
							<h4 className='font-semibold text-white text-base sm:text-lg mb-3 sm:mb-4'>
								{section.title}
							</h4>
							<ul className='space-y-2 text-gray-400 text-sm sm:text-base'>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<a
											href='#'
											className='hover:text-white transition-colors duration-200 cursor-pointer block py-1'
											aria-label={link}
										>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Divider e informações inferiores */}
				<div className='border-t border-gray-800 pt-6 sm:pt-8'>
					<div className='flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6'>
						{/* Copyright */}
						<p className='text-gray-400 text-sm text-center lg:text-left order-2 lg:order-1'>
							Copyright © 2025 Apple Inc. Todos os direitos reservados.
						</p>

						{/* Links do rodapé */}
						<div className='flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2 mb-4 lg:mb-0'>
							{buttonLinks.map((text, index) => (
								<a
									key={index}
									href='#'
									className='text-gray-400 hover:text-white text-sm transition-colors duration-200'
									aria-label={text}
								>
									{text}
								</a>
							))}
						</div>
					</div>

					{/* Nota educacional */}
					<p className='text-gray-500 text-xs sm:text-sm text-center mt-6 sm:mt-8'>
						Site criado para fins educacionais - Aula no YouTube
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
