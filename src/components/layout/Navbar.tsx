import Logo from '@/components/common/Logo';
import MobileViewNavbar from '@/components/layout/MobileViewNavbar';
import styles from '@/components/layout/Navbar.module.scss';
import JoinNowButton from '@/components/common/button/JoinNowButton';
import {
	NavItem,
	navItems
} from '@/data/staticData';
import Text from '@/elements/Text';
import Colors from '@/styles/colors';
import { TextVariant } from '@/utils/stylePropTypes';
import { Popover } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import Button from '@/elements/Button';
/*
 * TODO: Navbar toggle view breakpoint issue investigation
 * Ideally we need `md` as view toggle break-point
 * Experienced some issues in view on `ipad-sized` devices when view toggle break-point was `md`
 * To tackle that issue view toggle break-point is set to `lg`
 * To change break-point - change all `lg:` prefixed classes to `md:` prefixed here and in MobileViewNavbar component
 */
const Navbar: React.FC<NavbarProps> = ({ invertColors }) => {
	const { t } = useTranslation();
	const router = useRouter();
	const [navbarAwake, setNavbarAwake] = useState(false);
	const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

	const scrollHandler = (): void => {
		const scrollTop = document.documentElement.scrollTop;
		const navbar = document.querySelector('#navbar');

		if (
			scrollTop > 150 &&
			!navbar.classList.contains(styles.navbarScrolled)
		) {
			navbar.classList.add(styles.navbarScrolled);
		}
		if (
			scrollTop < 150 &&
			navbar.classList.contains(styles.navbarScrolled)
		) {
			navbar.classList.remove(styles.navbarScrolled);
		}
		if (scrollTop > 350 && !navbar.classList.contains(styles.navbarAwake)) {
			setNavbarAwake(true);
			navbar.classList.add(styles.navbarAwake);
		}
		if (scrollTop < 350 && navbar.classList.contains(styles.navbarAwake)) {
			setNavbarAwake(false);
			navbar.classList.remove(styles.navbarAwake);
		}
	};

	// const contactNumberWithIcon = (): ReactElement => {
	// 	return (
	// 		<div className='hidden lg:flex justify-end gap-3 mb-3'>
	// 			<HiPhone
	// 				className='text-secondary'
	// 				size={24}
	// 				aria-hidden='true'
	// 			/>
	// 			<Text
	// 				span={true}
	// 				fontWeight='font-bold'
	// 				variant={invertColors ? 'text-primary' : 'text-white'}
	// 			>
	// 				{contactNumber}
	// 			</Text>
	// 		</div>
	// 	);
	// };

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	const logoVariant = (): 'white' | 'blue' => {
		if (invertColors) {
			return 'blue';
		}
		return navbarAwake ? 'blue' : 'white';
	};

	const hamburgerIconColor = (): string => {
		return Colors.primary;
	};

	const navItemVariant = (navItem: NavItem): TextVariant => {
		if (router.pathname.includes(navItem.link)) {
			return 'text-secondary';
		}
		else if (invertColors) {
			return 'text-primary';
		}
		return navbarAwake ? 'text-primary' : 'text-white';
	};

	const toggleNavbar = () => {
		if (isMobileNavbarVisible) {
			setIsMobileNavbarVisible(false);
		} else {
			setIsMobileNavbarVisible(true);
		}
	};

	return (
		<div className={styles.navbar}>
			<div className='w-screen grid place-items-center bg-light'>
				{!isMobileNavbarVisible && (


					<div className='px-5 mt-5 mb-5 w-full mdxl:w-76'>
						<div className='flex justify-between items-center'>
							{/* Desktop Screen Logo */}
							<div className='flex-shrink-0'>
								<Link href={'/'}>
									<Logo />
								</Link>
							</div>

							{/* Hamburger Icon */}
							<div className='-my-2 lg:hidden'>
								<div
									className='rounded-md p-2 inline-flex items-center justify-center
									hover:text-gray-500 focus:outline-none'
									onClick={toggleNavbar}
								>
									<span className='sr-only'>
										{t('openMenu')}
									</span>
									<HiMenu
										size={24}
										color={hamburgerIconColor()}
										aria-hidden='true'
									/>
								</div>
							</div>

							<Popover.Group
								as='nav'
								className='hidden lg:flex space-x-16 text-secondary'
							>
								{navItems.map((item, index) => {
									return (
										<Link
											key={index}
											href={item.link}
											target={item.target}
										>
											<Text
												className={`text-secondary ${item.className && item.className}`}
												fontWeight='font-medium'
												cursor='cursor-pointer'
											>
												{item.title}
											</Text>
										</Link>
									);
								})}

							</Popover.Group>
							<div className='hidden lg:flex items-center justify-end'>
								<JoinNowButton className='w-full' />
							</div>
						</div>
					</div>
				)}
				<MobileViewNavbar
					activate={isMobileNavbarVisible}
					navbarItems={navItems}
					toggleNav={toggleNavbar}
				/>
			</div>
		</div>
	);
};

type NavbarProps = {
	invertColors?: boolean
}

Navbar.defaultProps = {
	invertColors: false
};

export default Navbar;
