import styled from 'styled-components';

export const Name = styled.span`
  margin-right: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  width: 100%;
  border-bottom: 1px solid #000;

  li:last-child {
    justify-content: flex-end;
  }
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};

  button:last-child {
    margin-left: ${p => p.theme.space[3]}px;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
`;

export const ModalText = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-style: italic;
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button:last-child {
    margin-left: ${p => p.theme.space[3]}px;
  }
`;
