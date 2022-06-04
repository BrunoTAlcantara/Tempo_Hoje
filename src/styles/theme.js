import day from '../imgs/day.png';
import rain from '../imgs/rain.jpg';
import night from '../imgs/newnight.jpg';
import lua from '../imgs/lua.png';
import sol from '../imgs/sol.png';

export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#f4b61a',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
    weight: {
      bold: '700',
      semiBold: '600',
      regular: '500',
      thin: '400',
    },
  },
  imgs: {
    night: night,
    day: day,
    rain: rain,
    sun: sol,
    moon: lua,
  },
};
