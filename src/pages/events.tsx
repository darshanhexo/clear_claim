import { GetServerSideProps, NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchBar from '@/components/common/SearchBar';
import EventList from '@/components/tap-events/EventList';
import TapEventHero from '@/components/tap-events/TapEventHero';
import SortBy from '@/components/tap-events/SortBy';
import Routes from '@/utils/routes';
import CourseService from '@/services/course';
import TapService from '@/services/tap-events';
import { Course } from '@/services/course/types';
import { TapEventPageInformation, TapEvent } from '@/services/tap-events/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Events: NextPage<EventsProps> = ({ tapEventPageInfo, eventList, courseList }) => {
	const router = useRouter();
	const [q, setQ] = useState(null);

	useEffect(() => {
		router.push(Routes.events(undefined, q), undefined, { scroll: false })
	}, [q]);

	return (
		<div>
			<Navbar
				courseList={courseList}
			/>

			{/* Hero */}
			<TapEventHero
				headline={tapEventPageInfo.headline}
				headlineBold={tapEventPageInfo.headlineBold}
				subHeadline={tapEventPageInfo.subHeadline}
				heroImage={tapEventPageInfo.heroImage}
			/>

			<div className="flex flex-col gap-4 md:flex-row-reverse justify-between lg:place-items-center xl:w-76 mx-auto mb-4 md:mb-20">
				{/* SearchBar */}
				<SearchBar
					onChange={(e) => setQ(e.target.value)}
				/>

				{/* Categories */}
				<SortBy categoryList={[{ id: '1', slug: 'asd', title: 'TitleCat' }]} />
			</div>

			{/* Events list */}
			<EventList
				eventList={eventList}
			/>

			{/* Footer */}
			<Footer />
		</div>
	);
}

type EventsProps = {
	tapEventPageInfo: TapEventPageInformation;
	eventList: TapEvent[];
	courseList: Course[];
}

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query
}: Record<string, any>) => {
	const tapEventPageInfo = await TapService.getTapEventPageInformation(locale, '*');
	const eventList = await TapService.getTapEventList(locale, '*', { start: query?.start, limit: 4, _q: query?._q });
	const courseList = await CourseService.getCourseList(locale, '*');

	return {
		props: {
			tapEventPageInfo: {
				...tapEventPageInfo?.data?.attributes,
				heroImage: tapEventPageInfo.data.attributes.heroImage?.data.attributes,
			},
			courseList: courseList.data.map((course) => ({
				...course.attributes,
				id: course.id,
			})),
			eventList: eventList.data.map((event) => ({
				...event.attributes,
				id: event.id,
				eventImage: event.attributes.eventImage?.data.attributes,
			})),
			...(await serverSideTranslations(locale, ['common', 'home']))
		}
	};
};

export default Events;