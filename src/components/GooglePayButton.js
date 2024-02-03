import React, { useEffect, useRef } from 'react';

const GooglePayButton = () => {
  const googlePayRef = useRef(null);

  useEffect(() => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Use 'TEST' for testing and 'PRODUCTION' for real transactions
    });

    const button = paymentsClient.createButton({
      onClick: () => handlePayment(),
    });

    googlePayRef.current.appendChild(button);

    async function handlePayment() {
      const paymentDataRequest = getPaymentDataRequest();
      paymentDataRequest.transactionInfo = getTransactionInfo();

      paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData) {
        // Handle successful payment here
        console.log('Payment successful', paymentData);
      }).catch(function(err) {
        // Handle payment errors here
        console.error('Payment failed', err);
      });
    }
  }, []);

  function getPaymentDataRequest() {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example', // Replace with your payment gateway
            gatewayMerchantId: 'exampleGatewayMerchantId', // Replace with your gateway merchant ID
          },
        },
      }],
      merchantInfo: {
        merchantId: '12345678901234567890', // Replace with your merchant ID
        merchantName: 'Example Merchant'
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '1.00',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    };
  }

  function getTransactionInfo() {
    return {
      totalPriceStatus: 'FINAL',
      totalPrice: '1.00',
      currencyCode: 'USD',
      countryCode: 'US',
    };
  }

  return <div ref={googlePayRef}></div>;
};

export default GooglePayButton;
