import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, { //its saying like || '' instead we can use !
  apiVersion: "2022-11-15",
  typescript: true,
});
