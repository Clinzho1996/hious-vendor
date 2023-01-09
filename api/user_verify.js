/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import ApiManagerReset from './ApiManagerVerify';

export const user_verify = async data => {
  try {
    const result = await ApiManagerReset('/vendor_auth/verify_vendor.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};
