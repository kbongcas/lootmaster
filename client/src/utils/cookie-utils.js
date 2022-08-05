import Cookies from 'js-cookie';

const removeSessionCookie = () => {
  Cookies.remove('session');
};

const getSessionCookie = () => {
  const sessionCookie = Cookies.get('session');
  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
};

export { getSessionCookie, removeSessionCookie}