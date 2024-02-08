'use server';

import { addDoc } from 'firebase/firestore';
import { contactSchema } from './contactSchema';
import { userRef } from '@/firebase.config';

export const sendData = async (data: FormData) => {
	try {
		const newData = {
			email: data.get('email'),
			name: data.get('name'),
			message: data.get('message'),
		};

		let contactData = contactSchema.safeParse(newData);
		if (!contactData.success) {
			return {
				success: false,
				error: contactData.error.errors[0].message,
			};
		}
		let res = await addDoc(userRef, contactData.data);
		console.log(res);

		return {
			success: true,
			data: contactData.data,
		};
	} catch (error) {
		console.log('error is ', error);
		if (error instanceof Error) {
			return {
				success: false,
				error: error.message,
			};
		}
	}
};
