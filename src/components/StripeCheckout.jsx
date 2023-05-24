import styled from 'styled-components';

const CheckoutForm = () => {
  return <h1>hi from checkout</h1>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
