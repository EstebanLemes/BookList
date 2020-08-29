import api from '@config/api';

export const getBookList = () =>
    api.get('https://book-container.herokuapp.com/api/faqs').then((response) => {
        if(response.ok) {
            return response.data;
        }
        return;
    });