import React from "react";
import Image from "next/image";

import Text from '@/elements/Text';
import Button from '@/elements/Button';
import StatSection from '@/components/common/Stat';
import HumanRiver from '@/components/index/HumanRiver';
import WorkshopButton from '@/components/common/button/WorkshopButton';

import { useTranslation } from 'next-i18next';

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ headline, subHeadline, studentsTrained, workshopsConducted, placementDrives, nextBatchDate }) => {
	const { t } = useTranslation();
	return (
		<div
			style={{
				background:
					'url(/img/home/homeHeroBg.png) no-repeat top left',
				backgroundSize: '100% 100%',
				backgroundPosition: 'top left'
			}}
		>
			<div className='grid gap-2 mdxl:w-76 grid-cols-1 lg:grid-cols-2 mx-auto mb-12 md:mb-32'>
				<div className='flex flex-col md:pt-20 px-5 mb-7'>
					<h1 className='text-3xl md:text-hero font-semibold text-primary mb-3 md:mb-5'>
						{headline}
						<br />
						{/* Simplify Employment! */}
					</h1>
					<p className='text-aphonic mb-4 md:mb-10'>
						{subHeadline}
						{/* India’s first AR-based learning institue. */}
						<br />
						{/* One-Stop Destination to skill - reskill yourself. */}
					</p>
					<div className='flex mb-3 md:mb-10'>
						<div className="w-50">
							<WorkshopButton />
						</div>
						<Button
							buttonStyleClass='textButton'
							variant='bg-transparent'
							rounded='rounded-sm'
							className='flex px-5 py-3 gap-3 place-items-center hidden lg-block'
						>
							<Image
								src='/img/home/play.png'
								height={32}
								width={32}
								alt='play'
								className=''
							/>
							<Text
								variant='text-secondary'
								fontSize='text-lg'
								fontWeight='font-medium'
							>
								{t('Watch a demo video')}
							</Text>
						</Button>
					</div>
					<div className='flex place-items-center gap-3 text-xs md:text-base'>
						<p
							className='text-primary font-medium'
						>
							&gt; Next batch starts
						</p>
						<p
							className='text-tertiary font-bold'
						>
							{nextBatchDate && new Date(nextBatchDate).toDateString()}
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<div
						className='imgContainer'
						style={{ height: '30rem', width: '30rem', alignSelf: 'flex-end' }}
					>
						<HumanRiver />
					</div>
					<div className='trust flex flex-col place-items-center -mt-10 pt-7 z-10 bg-light'>
						<div className='flex gap-2' style={{ alignItems: 'flex-end' }}>
							<Text
								className='text-primary text-2xl md:text-3xl'
							>
								Trusted by
							</Text>
							<Text
								className='text-tertiary text-2xl'
								fontWeight='font-bold'
							>
								{studentsTrained}+
							</Text>
							<Text
								className='text-primary text-2xl md:text-3xl'
							>
								students
							</Text>
						</div>
						<Text className='text-primary'>all over India</Text>
					</div>
				</div>
			</div>
			{/* Stats */}
			<StatSection
				studentsTrained={studentsTrained}
				workshopsConducted={workshopsConducted}
				placementDrives={placementDrives}
			/>
		</div>
	)
};

type HomeHeroSectionProps = {
	headline: string;
	subHeadline: string;
	studentsTrained: number;
	workshopsConducted: number;
	nextBatchDate: Date;
	placementDrives: number;
};

export default HomeHeroSection;