import React from "react";
import Image from "next/image";
import Col from '@/components/core/Col';
import Grid3 from '@/components/core/Grid3';
import Title from '@/components/core/Title';
import Container from '@/components/core/Container';
import ColSpan2 from '@/components/core/ColSpan2';
import SectionHeadline from "@/components/core/SectionHeadline";
import CourseUsp from "@/components/course/CourseUsp";
import { useTranslation } from 'next-i18next';

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = () => {
	const { t } = useTranslation();

	return (
		<Container className='mb-24'>
			<Grid3>
				<ColSpan2>
					<Title
						text='About Course'
						className='mb-8'
					/>
					<p className="aphonic mr-12">
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
						Tap Academy offers 90 days Intensive certification training program exclusively for Final year Students & Tech Graduates. In this course, you will learn the concepts, languages, and frameworks required to develop a complete web application in simple and visualized videos using Augmented Reality technology.
					</p>
				</ColSpan2>
				<Col>
					<CourseUsp />
				</Col>
			</Grid3>
		</Container>
	)
};

type CourseOverviewSectionProps = {};

export default CourseOverviewSection;