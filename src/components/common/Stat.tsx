import React from "react";
import Image from "next/image";

const Stat: React.FC<StatProps> = ({ studentsTrained, workshopsConducted, placementDrives }) => {
	return (
		<div className='mdxl:w-76 shadow rounded mx-5 md:mx-auto py-8 md:-mt-20 mb-8 md:mb-20 bg-white flex flex-col justify-center items-center md:flex-row md:justify-evenly'>
			<div className='flex flex-col justify-center items-center pb-7 mb-7 md:mb-0  border-primary2 border-b md:border-0 md:border-r h-30 md:h-20 w-64 md:w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>{studentsTrained}</span>
					<Image
						src='/img/stat-stroke-1.png'
						width={146}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Students Trained</p>
			</div>
			<div className='flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3 pb-7 mb-7 md:mb-0 border-primary2 border-b md:border-0 md:border-r'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>{workshopsConducted}</span>
					<Image
						src='/img/stat-stroke-2.png'
						width={88}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Workshops Conducted</p>
			</div>
			<div className='flex flex-col justify-center items-center h-30 md:h-20 w-64 md:w-1/3'>
				<p className='text-5xl text-primary font-semibold relative'>
					<span className="relative z-10 mb-4" style={{ letterSpacing: 0 }}>{placementDrives}</span>
					<Image
						src='/img/stat-stroke-3.png'
						width={146}
						height={17}
						alt='Stroke'
						className='absolute top-13 left-2'
					/>
				</p>
				<p className='text-xl text-primary3 font-normal z-10'>Placement Drives</p>
			</div>

		</div>
	)
};

type StatProps = {
	studentsTrained: number;
	workshopsConducted: number;
	placementDrives: number;
};

export default Stat;