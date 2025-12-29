export const getBasePath = () => {
  return '/';
};

export const getImagePath = (src: string) => {
  if (src.startsWith('http')) return src;
  // Ensure src starts with /
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  return normalizedSrc;
};
