function getBasePath(url: string) {
  const sanitized = url.startsWith("/") ? url.slice(1) : url;

  return `${import.meta.env.BASE_URL}${sanitized}`;
}

export default getBasePath;
