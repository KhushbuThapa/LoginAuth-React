export const getJwt = () => {
    return 'Bearer ' + localStorage.getItem('jwt_token');
};