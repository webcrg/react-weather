export function getLocaleDate(rawDate: number) {
  return new Date(rawDate * 1000).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
  });
}

export function getLocaleTime(rawDate: number) {
  return new Date(rawDate * 1000).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function firstCharAt(str: string) {
  return str[0].toUpperCase() + str.toLowerCase().slice(1, str.length);
}

export function createId(idLength = 10) {
  let id = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < idLength; i += 1) {
    const randomCharIndex = Math.floor(Math.random() * possible.length);
    id += possible.charAt(randomCharIndex);
  }

  return id;
}
