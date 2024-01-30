'use client';

import { FormEvent, useRef } from 'react';
import axios from 'axios';
// import { Button } from '../ui/button';
import { sendData } from '@/api/sendData';
import { Input, Textarea, Button } from '@material-tailwind/react';
import { UserIcon, MailIcon } from 'lucide-react';

const GetInTouch = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		let name = nameRef.current?.value;
		let message = messageRef.current?.value;
		let email = emailRef.current?.value;
		console.log({ name, message, email });
		const res = await axios.post('/api/contact', { email, name, message });
		if (res.status == 200) {
			console.log(res);
		}
	};

	return (
		<form
			className='flex flex-col flex-1 gap-6 mt-4 w-full max-w-sm self-center'
			action={sendData}>
			<Input
				crossOrigin={'anonymous'}
				className={`p-2 placeholder-slate-50/50`}
				label='Name'
				placeholder='john doe'
				icon={<UserIcon className='w-5 h-5' />}
				color='teal'
			/>
			<Input
				crossOrigin={'anonymous'}
				label='Email'
				placeholder='johndoe@gmail.com'
				icon={<MailIcon className='w-5 h-5' />}
				color='teal'
			/>
			<Textarea
				label='Message'
				color='teal'
			/>
			<Button
				placeholder={'send'}
				color='teal'
				>
				send message
			</Button>
		</form>
	);
};

export default GetInTouch;
