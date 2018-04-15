import request from '../utils/request';

export function getSwiperPic() {
  return request('/v4/api/billboard/home?__t=1519465484854', {method: 'get'} );
}
