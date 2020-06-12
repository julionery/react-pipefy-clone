import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  opacity: ${props => props.done ? 0.6 : 1 };

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    min-height: 42px;

    h2 {
      font-wight: 500;
      font-size: 15px;
      padding: 0 10px;
      margin-bottom: 6px;
    }
    
    .pp-cards-count {
      display: flex;
      color: #748396;
      font: 500 12px Roboto, sans-serif;
      padding: 0px 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }

`;
