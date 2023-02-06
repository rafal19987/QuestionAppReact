import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.red};
`

export const Question = styled.div`
  margin-top: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  max-height: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-weight: 700;
`

export const Answer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 60%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`
