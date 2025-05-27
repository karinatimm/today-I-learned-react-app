export const isValidHttpUrl = (str: string): boolean => {
  let url;
  try {
    url = new URL(str);
  } catch {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

export const MAX_LENGTH = 200;
