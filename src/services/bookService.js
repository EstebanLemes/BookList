import api from '@config/api';

export const getBookList = () =>
    api.get('/api/faqs').then((response) => {
        if(response.ok) {
            console.warn('Service: ', response.data)
            return response.data;
        }
        return;
    });