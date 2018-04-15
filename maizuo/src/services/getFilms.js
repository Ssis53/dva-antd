import request from '../utils/request';

export function getFilmsInfo() {
  return request('/v4/api/film/now-playing?__t=1519466096528&page=1&count=5', {method: 'get'} );
}
