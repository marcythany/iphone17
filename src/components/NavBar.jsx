import { Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ href: '#design', label: 'Design' },
		{ href: '#camera', label: 'Câmera' },
		{ href: '#performance', label: 'Performance' },
		{ href: '#cores', label: 'Cores' },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		// Bloqueia scroll quando menu está aberto
		document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
	};

	const handleNavClick = () => {
		setIsMenuOpen(false);
		document.body.style.overflow = 'unset';
	};

	return (
		<>
			<nav className='fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-gray-800/50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16 sm:h-20'>
						{/* Logo ou nome do produto */}
						<a
							href='#'
							className='text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200'
							aria-label='iPhone 17 Pro - Página inicial'
						>
							iPhone 17 Pro
						</a>

						{/* Links de navegação - Desktop */}
						<div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className='text-gray-300 hover:text-white font-medium text-sm lg:text-base transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300'
								>
									{link.label}
								</a>
							))}
							<button
								className='bg-blue-600 hover:bg-blue-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30 ml-2'
								onClick={() => console.log('Comprar clicado')}
								aria-label='Comprar iPhone 17 Pro'
							>
								Comprar
							</button>
						</div>

						{/* Botão do menu hamburguer - Mobile */}
						<button
							className='md:hidden text-gray-300 hover:text-white p-2 transition-colors duration-200'
							onClick={toggleMenu}
							aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ?
								<X className='w-6 h-6' />
							:	<Menu className='w-6 h-6' />}
						</button>
					</div>
				</div>
			</nav>

			{/* Menu Mobile Overlay */}
			{isMenuOpen && (
				<>
					{/* Backdrop */}
					<div
						className='fixed inset-0 bg-black/50 z-40 md:hidden'
						onClick={toggleMenu}
						aria-hidden='true'
					/>

					{/* Menu Mobile */}
					<div className='fixed inset-x-0 top-16 bg-gray-900/95 backdrop-blur-xl z-40 md:hidden animate-slideDown'>
						<div className='px-4 py-6 space-y-1'>
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className='block py-4 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg text-lg font-medium transition-all duration-200'
									onClick={handleNavClick}
								>
									{link.label}
								</a>
							))}
							<button
								className='w-full mt-4 bg-blue-600 hover:bg-blue-700 py-4 px-6 rounded-full text-white font-medium text-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2'
								onClick={() => {
									console.log('Comprar clicado');
									handleNavClick();
								}}
								aria-label='Comprar iPhone 17 Pro'
							>
								<ShoppingBag className='w-5 h-5' />
								Comprar
							</button>

							{/* Informação adicional */}
							<div className='mt-8 pt-6 border-t border-gray-800'>
								<p className='text-gray-400 text-sm text-center'>
									iPhone 17 Pro | Tecnologia de ponta
								</p>
							</div>
						</div>
					</div>
				</>
			)}

			{/* Espaçamento para compensar a navbar fixa */}
			<div className='h-16 sm:h-20'></div>
		</>
	);
};

export default Navbar;
