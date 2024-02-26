import { urlParseIdRegExp } from '../regexps/regexps';

export const getIdURL = (url) => {
  if (!url) {
    return null;
  }

  const match = url.match(urlParseIdRegExp);

  if (match && match.length > 0) {
    const id = match[1];
    return id;
  }

  return null;
};
