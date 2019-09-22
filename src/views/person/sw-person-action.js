import { axios_fetch } from '../../services/service-request';

export function _List(url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: 'LIST',
                payload: resp
            }),
            (err)=> ({
                type: 'ERROR',
                payload: err
            }))
        .catch( (err) => ({
            type: 'ERROR',
            payload: err
        }) )
    );
};

export function _List_StarShip(url) {
    return (
        axios_fetch('', url)
        .then(
            (resp) => ({
                type: 'LIST_STARSHIP',
                payload: resp
            }),
            (err)=> ({
                type: 'ERROR',
                payload: err
            }))
        .catch( (err) => ({
            type: 'ERROR',
            payload: err
        }) )
    );
};