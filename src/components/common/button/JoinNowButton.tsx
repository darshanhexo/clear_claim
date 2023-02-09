import React from "react";
import Text from '@/elements/Text';
import Button from '@/elements/Button';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/react';
import RegistrationForm from '@/components/common/RegistrationForm';

const JoinNowButton: React.FC<JoinNowButtonProps> = ({ className }) => {
	const { t } = useTranslation();
	const classNameList = className ? className.split(' ') : [];
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Button
			buttonStyleClass='outlineButton'
			variant='bg-transparent'
			rounded='rounded-sm'
			className={classNames('px-5 py-3 grow', ...classNameList)}
		>
			<Text
				variant='text-secondary'
				fontSize='text-lg'
				fontWeight='font-medium'
			>
				{t('Join Now for FREE')}
			</Text>
			<RegistrationForm
				isOpen={isOpen}
				onClose={onClose}
			/>
		</Button>
	)
};

type JoinNowButtonProps = {
	className?: string;
};

export default JoinNowButton;