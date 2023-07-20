# FullStack SaaS AI Platform

- This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe integration
- About the site - the user can access various AI services(which can reply them back with the corresponding reqs) such as the conversation service like chat GPT4.
- Image generation service, Video generation Service, Music Generation Service, and then the code services.
- The Free tier users can have the access to post only 5 requests, if if exceeds more than 5 requests then the user has to pay/ upgrade to the pro version
- and the payment (fake/test) is provided by the stripe.
- once the user is upgraded to the pro service he will ve the option to manage his subscription, he can be able to unsubscribe from the pro upgrade.(with the stripe/s customer billing portal/test link)
- and i will be using clerk for the authentication.
- and mostly for the ui components, i used "shadcn"

## Customer support

- for the customer support/ live chat we re gon to use the crisp

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites (Dependencies)

- `npx create-next-app@latest ai-saas --typescript --tailwind --eslint` start the app
- and then to run the shadcn -ui to init command to setup the project `npx shadcn-ui@latest init` and the (base color is slate), it will also install other dependencies like lucide react icons.
- then to install the individual components from the shadcn ui..
- `npx shadcn-ui@latest add button sheet card form input avatar select progress dialog badge`
- clerk for the authentication `npm i @clerk/nextjs` then mount our app with the clerk provider. and then add the middleware.ts (refer the code from the clerk documentation)
- then create our signup and the signin routes /sign-up/[[...sign-up]]/page.tsx.
- and similarly for the the signin .. /sign-in/[[...sign-in]]/page.tsx
- `npm i @hookform/resolvers` and `npm i react-hook-form` for the form field fetching and validations(zod)
- `npm i openai` - our conversation, code and the image generation uses the openai api.
- `npm i react-markdown` for the code page component, when i fetch the code (res) from the api, wanna show the code in the react markdown, just so its easier to read.
- `npm i replicate` AI api for the music and the video generation.
- prisma `npm i -D prisma` and then `npx prisma init` to generate the schema
- and then the prisma client `npm i @prisma/client` for querying the db
- then to push the schema into the database `npx prisma db push` and `npx prisma generate` is gon to add this model into the node modules to get the types.
- to start the prisma studio, (which is optional) `npx prisma studio`
- to cleare the db ```npx prisma migrate reset```
- zustand `npm i zustand` for the state management, and we can use this for the keep track of the counter (and when it exceeds the free tier limit, we can open the modal to upgrade for the premium subscription) especially for the global state of our pro modal
- react hot toast ```npm i react-hot-toast``` for notifications
- crisp chatbot's sdk ```npm i crisp-sdk-web```, and wrap this crisp-provider comp around the app's body
- typewriter effect ```npm i typewriter-effect``` for the landing page typing effect.
  **Node version 18.x.x**

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Replicate AI

- we will be using Replicate AI for the music and the video services.
- `npm i replicate`
- and to fetch the music from the replicate api, we will be using their "riffusion" model.
- and for the video services, we will be using zeroscope/anotherjesse model

## prisma ORM

- to manage the user and the subscriptions.
- and for the db, the db provider will be MySql from planet scale.
