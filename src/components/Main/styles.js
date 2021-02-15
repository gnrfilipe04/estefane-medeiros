import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  .frase {
    background-image: url("fundo-frase.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 20rem;
    
    text-align: center;
    color: #505050;
    margin: 5rem 0 5rem 0;

    p {
      padding-top: 5rem;
      max-width: 40rem;
      font-family: "Louis George Café", sans-serif;
      font-size: 2rem;

      margin-bottom: 2rem;
    }

    h1 {
      font-family: "Playfair Display", serif;
    }
  }

  .services {
    display: grid;
    //justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 5rem;

    img {
      width: 10rem;
      height: auto;
    }
    .div-exterior {
      display: flex;
      justify-content: flex-end;
      background: #c37f5e;
      padding: 2rem 5rem 10rem 2rem;
      margin-right: -5rem;

      .exterior {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-individual {
      display: flex;
      justify-content: center;
      background: #cf8d6d;
      padding: 2rem 2rem 2rem 2rem;
      margin-left: 5rem;
      margin-right: 5rem;

      .individual {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-casal {
      display: flex;
      justify-content: flex-start;
      background: #da9f82;
      padding: 2rem 2rem 2rem 5rem;
      margin-left: -5rem;

      .casal {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    h1 {
      font-family: "Playfair Display", serif;
    }

    p {
      padding-top: 2rem;
      max-width: 21rem;
      font-family: "Louis George Café", sans-serif;
      line-height: 1.5rem;

    }
  }

  .detail-gray-1 {
    width: 50rem;
    height: 5rem;

    background: #edeaea;
  }

  .section-sobre {
    display: flex;
    justify-content: space-evenly;
    padding: 5rem 18rem 0 18rem;

    .title-sobre {
      display: flex;
      flex-direction: column;

    }

    h1 {
      font-size: 5.313rem;
      font-family: "Playfair Display", serif;
      color: #cf8d6d;
    }

    .linha {
      width: 15rem;
      height: auto;
    }

    p {
      font-family: "Louis George Café", sans-serif;
      line-height: 1.5rem;

      max-width: 50rem;
      padding: 0rem 0 2rem 0;
      margin-left: 20rem;
    }
  }

  .serie {
    background-image: url('fundo-serie.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    width: 100vw;
    height: 35rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end ;

    color: white;
    

    margin-top: 2rem;
    padding: 0 12rem 0 0;

    h1{
      font-size: 5rem;
      font-family: "Louis George Café", sans-serif;
    }
    p {
      font-size: 1.6rem;
      font-family: "Louis George Café", sans-serif;
    }
    
    button {
      margin-top: 2rem;
      padding: 1rem 5rem 1rem 5rem;
      border: none;
      font-family: "Louis George Café", sans-serif;

      font-size: 1.6rem;
      
    }
  }

  .contact {
    display: flex;
    justify-content: space-between;
    padding: 5rem 18rem 5rem 18rem;

    .title-contact {
      display: block;
      padding: 0 10rem 0 0;

      h1{
        font-size: 5.313rem;
        font-family: 'Playfair Display', serif;
        color: #cf8d6d;
      }
    }

    .linha {
      width: 15rem;
      height: auto;
    }

    .form{
      display: flex;
      flex-direction: column;
      width: 35rem;
      min-width: 15rem;
      
      
        button {
          margin: 0.5rem 0 0 0;
          padding: 1rem 0 1rem 0;
          font-size: 1rem;
          border: none;
          background: #cf8d6d;
          color: white;
          
        }
    }
  }

  @media (max-width: 1024px){

    .section-sobre {
      display: flex;
      justify-content: space-evenly;
      padding: 2rem 10rem 0 10rem;

      .title-sobre {

        h1{
          font-size: 4rem;
        }
      }
    
    }

    .contact {
      display: flex;
      justify-content: space-evenly;
      padding: 0 18rem 5rem 18rem;

      .title-contact{
        h1{
          font-size: 4rem;
        }
      }
    }

    .services {
    display: grid;
    //justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 5rem;

    img {
      width: 10rem;
      height: auto;
    }
    .div-exterior {
      display: flex;
      justify-content: flex-end;
      background: #c37f5e;
      padding: 2rem 5rem 10rem 2rem;
      margin-right: -2rem;

      .exterior {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-individual {
      display: flex;
      justify-content: center;
      background: #cf8d6d;
      padding: 2rem 2rem 2rem 2rem;
      margin-left: 2rem;
      margin-right: 2rem;

      .individual {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-casal {
      display: flex;
      justify-content: flex-start;
      background: #da9f82;
      padding: 2rem 2rem 2rem 5rem;
      margin-left: -2rem;

      .casal {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }
  }
  }

  @media (max-width: 768px){

    .services {

      .div-exterior {
      display: flex;
      justify-content: flex-end;
      background: #c37f5e;
      padding: 2rem 2rem 10rem 2rem;
      margin-right: -1rem;

      .exterior {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-individual {
      display: flex;
      justify-content: center;
      background: #cf8d6d;
      padding: 2rem 2rem 2rem 2rem;
      margin-left: 1rem;
      margin-right: 1rem;

      .individual {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-casal {
      display: flex;
      justify-content: flex-start;
      background: #da9f82;
      padding: 2rem 2rem 2rem 2rem;
      margin-left: -1rem;

      .casal {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }
  } 

  .section-sobre {
    display: flex;
    justify-content: space-between;
    padding: 5rem 5rem 0 5rem;

    .title-sobre {
      display: flex;
      flex-direction: column;

    }

    h1 {
      font-size: 5.313rem;
      font-family: "Playfair Display", serif;
      color: #cf8d6d;
    }

    .linha {
      width: 15rem;
      height: auto;
    }

    p {
      font-family: "Louis George Café", sans-serif;
      line-height: 1.5rem;

      max-width: 50rem;
      padding: 0rem 0 2rem 0;
      margin-left: 0rem;
    }
  } 
    .serie{
      display: flex;
      justify-content: center;
      align-content: space-between;
      padding: 0 5rem 0 0;
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 5rem 5rem 5rem;
      }

  }

 

    @media (max-width: 425px){

      
            
      .contact {
        
        padding: 0 2rem 5rem 2rem;

        .title-contact {

        h1{
          font-size: 4rem;
      
        }
      }

        .form{
          width: 22rem;
        }
      }

      .services {
    display: grid;
    //justify-content: space-between;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    margin-top: 5rem;

    img {
      width: 10rem;
      height: auto;
    }
    .div-exterior {
      display: flex;
      justify-content: flex-end;
      background: #c37f5e;
      padding: 2rem 2rem 10rem 2rem;
      margin: 0 0rem 0 0;

      .exterior {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-individual {
      display: flex;
      justify-content: center;
      background: #cf8d6d;
      padding: 2rem 2rem 10rem 8rem;
      margin: 0 0rem 0 -5rem;
      

      .individual {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
      }
    }

    .div-casal {
      display: flex;
      justify-content: flex-start;
      background: #da9f82;
      padding: 2rem 2rem 10rem 8rem;
      margin:  0 0rem 0 -5rem;

        .casal {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
        }
      }
    }  
  }

  .serie{
    padding: 0 2rem 0 2rem;
  }

  @media (max-width: 375px){

    .contact {
        
        padding: 0 2rem 5rem 2rem;

        .title-contact {

        h1{
          font-size: 4rem;
      
        }
      }

        .form{
          width: 19rem;
        }
      }

  }

  @media (max-width: 320px){
    
    .serie {
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center ;
      padding: 0 2rem 0 2rem;

    h1{
      font-size: 4rem;
      
    }
    p {
      font-size: 1.6rem;
      
    }
  
  }
    

    .frase{
      display: none;
    }

  .contact {
      
      padding: 0 2rem 5rem 2rem;

      .title-contact {

      h1{
        font-size: 3rem;
    
      }
    }

    .form{
      width: 16rem;
    }
  }

}

.section-sobre {
    padding: 0rem 2rem 0 2rem;

    h1 {
      font-size: 4rem;
      font-family: "Playfair Display", serif;
      color: #cf8d6d;
    }

    .linha {
      width: 10rem;
      height: auto;
    }

    p {
      margin-left: 0rem;
    }
  }

`;
