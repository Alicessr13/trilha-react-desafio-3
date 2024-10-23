import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

export const TitleRegister = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

export const SubtitleRegister = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
