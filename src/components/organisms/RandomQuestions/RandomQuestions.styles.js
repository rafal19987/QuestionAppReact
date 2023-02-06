import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 95vh;
  width: 90vw;
  background-color: ${({ theme }) => theme.colors.white};
`
