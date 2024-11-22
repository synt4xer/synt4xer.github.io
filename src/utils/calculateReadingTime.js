export function calculateReadingTime(text) {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length; // Split text into words
  const minutes = Math.ceil(words / wordsPerMinute); // Round up to the nearest minute
  return minutes;
}
