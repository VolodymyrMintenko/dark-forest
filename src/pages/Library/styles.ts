import image from '@/assets/images/login-background.jpeg';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.65) 42%, rgba(0, 0, 0, 0.51) 70%, hsla(0, 0%, 100%, 0)), linear-gradient(180deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), url(${image})`,
  },
} as const;

export default styles;
