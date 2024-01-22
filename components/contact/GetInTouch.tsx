'use client';

import { FormEvent, useRef } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';

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
			className='flex flex-col gap-6 mt-4'
			onSubmit={handleSubmit}>
			<input
				type='text'
				ref={nameRef}
				className={`p-2 bg-inherit border-b border-light-400 text-light-400  focus-within:ring-0 focus:outline-none`}
				placeholder='john doe'
				autoComplete='given-name'
			/>
			<input
				type='email'
				ref={emailRef}
				className={`p-2 bg-inherit border-b border-light-400 text-light-400 focus-within:ring-0 focus:outline-none`}
				placeholder='johndoe@gmail.com'
				autoComplete='email'
			/>
			<textarea
				ref={messageRef}
				className={`p-2 bg-inherit border-b border-light-400 text-light-400 focus-within:ring-0 focus:outline-none`}
				placeholder='Message'
			/>

			<Button variant={'outline'}>send message</Button>
		</form>
	);
};

export default GetInTouch;
