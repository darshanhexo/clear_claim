import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import RegistrationService from "@/services/registration";
import SectionHeadline from "@/components/common/SectionHeadline";
import {
	Modal,
	Stack,
	ModalOverlay,
	Radio,
	RadioGroup,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Select
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	fullname: string,
	email: string,
	phone: string,
	graduationYear: string,
	modeOfStudy: ModeOfStudy
};

enum ModeOfStudy {
	ONLINE = 'Online',
	OFFLINE = 'Offline'
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
	const [modeOfStudy, setModeOfStudy] = React.useState<ModeOfStudy>(ModeOfStudy.ONLINE);
	const { register, handleSubmit, setValue, reset } = useForm<Inputs>({
		defaultValues: { modeOfStudy: ModeOfStudy.ONLINE }
	});

	const router = useRouter();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		// @ts-ignore
		(async () => {
			RegistrationService.postRegistrationForm(data)
				.then(() => {
					toast.success('Thank you for registration!');
					router.query.REGISTRATION_SUCCESS = 'true';
					router.push(router);
				})
				.catch(() => {
					toast.error('Something went wrong! Please try again, or contact us.')
				})
				.finally(() => {
					reset();
					onClose();
				})
		})();
	};


	return (
		<>{isOpen && (
			<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-120 z-30 mx-auto bg-white rounded-3xl shadow py-4 '>
				<div />
				<div className='rounded-3xl relative' >
					<button className='absolute right-8 top-8 z-40' onClick={() => { console.log('closing'); onClose() }}><AiOutlineClose size={24} /></button>
					<div >
						<div className="relative overflow-hidden xs:pr-44 pb-100 md:pb-0 py-3 px-8">
							<SectionHeadline
								title='Register Yourself'
								subtitle='Book your Free Seat'
								className='mb-6'
							/>
							<form className='flex flex-col gap-3' action="" id='registration-form' method='POST' onSubmit={handleSubmit(onSubmit)}>
								<FormControl className='mb-6' variant="floating" id="fullname" isRequired >
									<Input className='h-24' placeholder=" " {...register("fullname")} />
									<FormLabel>Name</FormLabel>
								</FormControl>
								<FormControl className='mb-6' variant="floating" id="email" isRequired >
									<Input className='h-24' placeholder=" " type='email' {...register("email")} />
									<FormLabel>Email Id:</FormLabel>
								</FormControl>
								<FormControl className='mb-6' variant="floating" id="phone" isRequired >
									<Input className='h-24' placeholder=" " {...register("phone")} />
									<FormLabel>Phone</FormLabel>
								</FormControl>
								<FormControl className='mb-6' variant="floating" id="graduationYear" isRequired >
									<Select placeholder='Select Graduation Year' {...register("graduationYear")}>
										<option value='2016'>2016</option>
										<option value='2017'>2017</option>
										<option value='2018'>2018</option>
										<option value='2019'>2019</option>
										<option value='2020'>2020</option>
										<option value='2021'>2021</option>
										<option value='2022'>2022</option>
										<option value='2023'>2023</option>
										<option value='2024'>2024</option>
										<option value='2025'>2025</option>
										<option value='2026'>2026</option>
									</Select>
									<FormLabel>Graduation</FormLabel>
								</FormControl>

								<RadioGroup
									className='mb-6'
									onChange={(val) => {
										setModeOfStudy(val as ModeOfStudy);
										setValue('modeOfStudy', val as ModeOfStudy);

									}}
									value={modeOfStudy}
								>
									<p className="text-aphonic">Preferred mode of learning?</p>
									<Stack direction='row'>
										<Radio value='Online'>Online</Radio>
										<Radio value='Offline'>Offline</Radio>
									</Stack>
								</RadioGroup>
								<input type="submit" value="Take me in!" className='w-full bg-tertiary text-white font-medium px-5 py-3 rounded col-span-2' />
							</form>
							<div className="absolute right-16 -bottom-10 md:-right-16 md:-bottom-16 w-44 md:w-64">
								<Image
									src='/img/girl_jump.png'
									width='247'
									height='539'
									alt='Girl Jump'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)}

		</>
	)
};

type RegistrationFormProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default RegistrationForm;