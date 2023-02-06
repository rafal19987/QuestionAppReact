import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
`
