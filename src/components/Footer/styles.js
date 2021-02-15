import styled from 'styled-components';

export const Container = styled.div`

  background:#EDEAEA;
  padding: 0rem 15rem 1rem 15rem;

  .logo {
    width: 20rem;
    height: auto;
  }

  .header-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 5rem;
  }

  .subscribe {
    padding: 2rem 0 0 0;
  }

  .social-icons {
    display: flex;
    justify-content: flex-end;

    img {
     width: 50px;
     height: auto; 
    }

    .facebook-icon{
      width: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 40px;
    }
    .instagram-icon{
      width: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 40px;
    }
    .linkedin-icon{
      width: 30px;
      height: 30px;
      border: 1px solid black;
      border-radius: 40px;
    }
  }

  .input-subscribe {
    display: flex;
    flex-direction:row;
    width: 25rem;
    

    button {
      padding: 0 1rem 0 1rem;
      border: none;
      background: #cf8d6d;
      color: white;
    }
  }

  .footer-efive {
    display: flex;
    justify-content: center;

    h3 {
      font-family: 'Louis George Café', sans-serif;
      font-weight: 400;
    }
  }

  @media (max-width: 768px){
    
    .header-footer {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      padding-bottom: 5rem;
    }
  }
`;
