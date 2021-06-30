const config = {
  STRIPE_KEY: "pk_test_51J74OtHmjCJ5ysRlACH7NOc2RX8L0V6OvqRXOxM40o8HFLUV69DjcmFiD5kCToc8iaIKqQEdznssNE9wZhPXq7KH005f2yGz3M",
  
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-approovy",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://k36bpit6zb.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JJ8z33yt6",
    APP_CLIENT_ID: "31tp2skg80747nvj1vqg2g81oi",
    IDENTITY_POOL_ID: "us-east-1:ae0f6e9b-5678-4070-8b8e-8c3fdd7bdad6",
  },
};

export default config;