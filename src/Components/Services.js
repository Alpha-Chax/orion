import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column d-flex">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 0;


  .container {
    max-width: 120rem;
    margin: auto;
    width:70rem;
    
  }
  
  .grid {
    display: grid;
    gap: 5rem;
  }
  
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    background-color:black;
    color:beige;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-colum-2{
    background-color:black;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    padding:0.5rem;
    color:bisque;
  }

  .icon {
    width: 8rem;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: black;
    color: lightcoral;
  }

  @media (max-width:650px ){
    .container{
      display:none;
    }
  }

`;
export default Services;
