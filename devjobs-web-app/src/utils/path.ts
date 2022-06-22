function getBasePath(url: string) {
  return `${import.meta.env.BASE_URL}/${url}`;
}

export default getBasePath;
