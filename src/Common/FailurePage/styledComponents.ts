import styled from 'styled-components';

export const FailureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  background-color: ${({ theme }) => (theme.isDark ? '#161712' : '#f8f8f4')};
  text-align: center;
  padding: 20px;
  
`;

export const FailureImage = styled.img`
  width: 328px;
  @media screen and (max-width:576px){
  width:250px;
  }
`;

export const Heading = styled.h1`
  margin: 10px 0px;
  color: ${({ theme }) => (theme.isDark ? '#ffffff' : '#1e293b')};
  @media screen and (max-width:576px){
  font-size:22px;
  }
`;

export const SubHeading = styled.p`
  font-size: 20px;
  color: ${({ theme }) => (theme.isDark ? '#94a3b8' : '#334155')};
   @media screen and (max-width:576px){
  font-size:18px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => (theme.isDark ? '#94a3b8' : '#475569')};
  margin: 10px 0px;
  
`;
