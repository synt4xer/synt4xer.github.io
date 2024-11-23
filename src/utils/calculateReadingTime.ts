export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute: number = 200; // Average reading speed
  const words: number = text.split(/\s+/).length; // Split text into words
  const minutes: number = Math.ceil(words / wordsPerMinute); // Round up to the nearest minute
  return minutes;
};
