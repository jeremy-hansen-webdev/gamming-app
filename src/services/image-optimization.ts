export const optimizeImage = (url: string, height: number, width: number) => {
  if (!url) return '';
  const target = 'media/';
  const index = url.indexOf(target);
  if (index === -1) return url;
  return `${url.slice(0, index + target.length)}crop/${height}/${width}/${url.slice(index + target.length)}`;
};
