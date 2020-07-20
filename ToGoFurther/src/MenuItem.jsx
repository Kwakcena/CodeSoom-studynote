import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default MenuItem;
