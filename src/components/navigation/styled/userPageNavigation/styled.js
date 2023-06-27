import styled from '@emotion/styled';

const theme = {
  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  btn: {
    marginLeft: '20px',
    backgroundColor: 'rgb(8, 87, 246)',
    border: '1px solid #000000',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '20px',
    height: '30px',
    lineHeight: '20px',
    maxWidth: '100px',
    cursor: 'pointer',
    hoverBackgroundColor: 'rgb(51, 255, 0)',
    hoverColor: '#066edec4',
    hoverBorder: '1px solid rgb(51, 255, 0)',
    hoverScale: 'scale(1.15)',
    hoverBoxShadow: '0px 4px 6px #6db804c4',
  },
};

export const StyledDiv = styled.div`
  display: ${() => theme.div.display};
  justify-content: ${() => theme.div.justifyContent};
  align-items: ${() => theme.div.alignItems};
  max-width: ${() => theme.div.maxWidth};
  margin: ${() => theme.div.margin};
`;

export const StyledBtn = styled.button`
  margin-left: ${() => theme.btn.marginLeft};
  background-color: ${() => theme.btn.backgroundColor};
  border: ${() => theme.btn.border};
  border-radius: ${() => theme.btn.borderRadius};
  color: ${() => theme.btn.color};
  font-size: ${() => theme.btn.fontSize};
  height: ${() => theme.btn.height};
  line-height: ${() => theme.btn.lineHeight};
  max-width: ${() => theme.btn.maxWidth};
  cursor: ${() => theme.btn.cursor};

  &:hover,
  &:focus {
    color: ${() => theme.btn.hoverColor};
    background-color: ${() => theme.btn.hoverBackgroundColor};
    border: ${() => theme.btn.hoverBorder};
    transform: ${() => theme.btn.hoverScale};
    box-shadow: ${() => theme.btn.hoverBoxShadow};
  }
`;
