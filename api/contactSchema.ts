import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, { message: 'please enter a valid name' }),
	email: z.string().email('please enter a valid email').min(1),
	message: z.string().min(1),
});
