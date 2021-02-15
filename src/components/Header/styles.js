import styled from 'styled-components';

export const Container = styled.div`

  
  padding: 0rem 15rem 0rem 15rem;

  .header-top {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    
    
  }

  .logo {
    
    padding: 2rem 20rem 48rem 5rem;
    background: #EDEAEA;

    img {
      width: 12rem;
      height: auto;
      
    }
  }

  nav ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
 
    a{
      padding: 0.7rem;
      font-family: 'Louis George Café', sans-serif;
    }
  }


  .nav-social {
    display: flex;
    align-items: center;
    padding: 4rem 0 0 0;

    nav {
      display: flex;
      justify-content: flex-end;
      width: 36rem;

    } 

    .social-icons {
        display: flex;

        img {
          width: 50px;
          height: auto;
        }
      } 
  }
 

    .banner-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      margin-top: -46rem;

    .estefane-img{
      width: 33rem;
      height: 42rem;
      margin: 0 2rem 0 0rem;

      background: #E0BCB3;
 
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: 5.313rem;
      color: #cf8d6d;

      margin-top: -10rem;
    }

    .text-banner {
      text-align: left;
      

      .linha{
        width: 15rem;
        height: auto;
      }

      p {
        max-width: 30rem;
        font-family: 'Louis George Café', sans-serif;
        font-size: 1rem;

        line-height: 1.5rem;
      }
    }
  }
  
  @media(max-width: 1320px){
    
   .nav-social{

    nav{
      width: 20rem;
    }
   }

   .text-banner{
     padding: 0 2rem 0 2rem;
   }

   .banner-content {

    .estefane-img{
      width: 33rem;
      height: auto;
      margin: 0 0rem 0 10rem;

      background: #E0BCB3;
 
    }
   }
  }

  @media(max-width: 1440px){


    .nav-social {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 2rem 0 0 0;

      .social-icons {
        order: -1;
        
      }
    }
  }

  @media(max-width: 1189px){
    .nav-social {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 2rem 0 0 0;

      .social-icons {
        order: -1;
        
      }
    }
  }

  @media(max-width: 1024px){
    
    .nav-social{

     nav{
       width: 18rem;
     }
    }
   }

   @media (max-width: 768px){

    .logo {
      padding: 2rem 15rem 40rem 5rem;
      background: #EDEAEA;

    img {
      width: 10rem;
      height: auto;
      
    }
  }

   .banner-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
         
      margin: -40rem 0 0 0;;

      .text-banner{
        padding: 13rem 0 0 0;
        width: 60vw;
      }

    h1{
      font-size: 4rem;
    }

    .estefane-img {
      width: 28rem;
      margin: 0rem;
    }
   }

    .nav-social{

      padding: 3.5rem 0 0 0;

      nav {
        display: none;
      }
    }
  }

  @media (max-width: 425px){

    .logo {
    
      padding: 2rem 5rem 40rem 2rem;
      background: #EDEAEA;

    img {
      width: 12rem;
      height: auto;
      
    }
  }

  .banner-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      margin-top: -40rem;

    .estefane-img{
      width: 25rem;
      height: auto;
      margin: 0 2rem 0 0rem;

      background: #E0BCB3;
 
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: 5.313rem;
      color: #cf8d6d;

      margin-top: -10rem;
    }

    .text-banner {
      text-align: left;
      

      .linha{
        width: 15rem;
        height: auto;
      }

      p {
        max-width: 30rem;
        font-family: 'Louis George Café', sans-serif;
        font-size: 1rem;

        line-height: 1.5rem;
      }
    }
  }

}
`;
