/**
 * Declare App options
 */
export const AppOptions = {
  patterns: {
    number:   /^[0-9]*$/,
    decimal:  /^(\d+\.?\d*|\.\d+)$/,
    email:    /^[+-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]{2,6}$/,
    url:      /^(https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/,
    phone:    /^[0-9]*$/,
  },
  suggestions: {
    size: '10'
  }
};
