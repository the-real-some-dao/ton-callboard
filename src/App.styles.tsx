import styled from '@emotion/styled';

export const AppRoot = styled('div')(({ theme }: any) => ({
  width: '100%',
  backgroundColor: theme.background ?? '#000015',
}));