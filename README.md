
# **stripe_api_integration_wrapper**

A simple and flexible wrapper for integrating Stripe's API into your Node.js application, providing functionalities like payment intent creation, subscription management, and more. This package is designed to help developers seamlessly interact with Stripe’s payment and subscription services using Node.js.


---

## **Project Overview**

The `stripe_api_integration_wrapper` is a Node.js-based wrapper around the Stripe API that facilitates easy integration for payment processing and subscription management. This project simplifies working with Stripe by encapsulating the API logic in reusable functions and making it easier to handle payments and subscriptions in a secure and scalable way.

---

## **Features**
- **Payment Intent Creation**: Allows you to create a payment intent with customizable amounts and currencies.
- **Subscription Management**: Handles the creation of subscriptions based on a customer ID and price ID.
- **Error Handling**: Includes basic error handling to ensure smooth integration.
- **dotenv Support**: Configuration of environment variables (e.g., Stripe API keys) using `dotenv`.
- **Express.js Integration**: Works seamlessly with Express.js for easy API endpoint creation.

---

## **Requirements**
- **Node.js**: >= v14.x.x
- **npm** (Node Package Manager)
- **Stripe account**: You will need to create a Stripe account to use the API keys.

---

## **Installation**

Follow these steps to install and set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pawvan/stripe_api_integration_wrapper.git
   cd stripe_api_integration_wrapper
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** at the root of the project and add your Stripe API keys:
   ```plaintext
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_PUBLIC_KEY=your-stripe-public-key
   PORT=3000
   ```

---

## **Configuration**

You need to configure the following environment variables:

- `STRIPE_SECRET_KEY`: Your Stripe Secret Key (can be found in your Stripe dashboard).
- `STRIPE_PUBLIC_KEY`: Your Stripe Public Key (can also be found in your Stripe dashboard).
- `PORT`: Port on which the application will run (default is 3000).

---

## **Usage**

This project is structured to work with Express.js. You can use the provided routes for creating payment intents and subscriptions.

1. **Start the server**:
   ```bash
   npm start
   ```

2. **API Endpoints**:
   - **Create Payment Intent**:
     - Endpoint: `POST /api/payments/create`
     - Body: `{ "amount": 1000, "currency": "usd" }`
     - Response: Returns the `clientSecret` of the created payment intent.
   
   - **Create Subscription**:
     - Endpoint: `POST /api/subscription/create`
     - Body: `{ "customerId": "customer_id", "priceId": "price_id" }`
     - Response: Returns the subscription object.

---

## **API Reference**

### **POST /api/payments/create**

Creates a payment intent with a specified amount and currency.

#### Request Body:
```json
{
  "amount": 1000,
  "currency": "usd"
}
```

#### Response:
```json
{
  "clientSecret": "pi_1Ie2dHFpdhJkOgw77Wx..."
}
```

### **POST /api/subscription/create**

Creates a subscription for a customer based on a specified customer ID and price ID.

#### Request Body:
```json
{
  "customerId": "cus_JG9U9m4lr78fay",
  "priceId": "price_1Ie2dHFpdhJkOgw77Wx..."
}
```

#### Response:
```json
{
  "id": "sub_1Ie2eHFpdhJkOgw77Wx...",
  "customer": "cus_JG9U9m4lr78fay",
  "items": [
    {
      "price": {
        "id": "price_1Ie2dHFpdhJkOgw77Wx..."
      }
    }
  ]
}
```

---

## **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

If you have any questions or feedback about this project, feel free to reach out:
- **Email**: pawanpediredla@gmail.com
- **GitHub**: [github.com/yourusername/stripe_api_integration_wrapper](https://github.com/pawvan/stripe_api_integration_wrapper)
---
