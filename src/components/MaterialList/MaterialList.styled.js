import styled from 'styled-components';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Num = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
`;
