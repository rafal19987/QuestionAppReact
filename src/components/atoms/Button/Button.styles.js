import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 8%;
  width: 80%;
  border: none;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 900;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`
