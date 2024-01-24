'use server';

export const sendData = (data: FormData) => {
	const newData = {
		email: data.get('email'),
		name: data.get('name'),
		message: data.get('message'),
	};
};
