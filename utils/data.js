import { bookData } from './bookData.js';

export const addFormData = (data) => {
	console.log(data);
	bookData.push(...data);
};

export const getFormData = () => {
	return bookData;
};
