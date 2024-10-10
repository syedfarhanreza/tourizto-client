# TOURIZTO

## Live link - [TOURIZTO](https://tourizto-client.vercel.app//)

## 🔗 Server side repository - [TOURIZTO-server](https://tourizto-server.vercel.app/)

## Admin Access 
- user: admin@tourizto.com
- password: admin

## Introduction

TOURIZTO is a Next.js-based community hub designed for travel enthusiasts, enabling users to connect, share, and explore a wealth of global travel insights. This platform creates a vibrant social environment where individuals can contribute personal travel stories, exchange valuable tips, and engage in discussions with fellow travelers.

With user authentication and customizable profiles, members can follow others, save favorite posts, and curate a personalized travel experience. Additionally, TOURIZTO offers access to premium content through a seamless payment integration, unlocking exclusive travel guides, tips, and insider knowledge.

By merging user-generated content with rich travel information, TOURIZTO empowers users to make well-informed travel decisions, discover hidden gems around the world, and enhance their travel adventures. Whether exploring new destinations or connecting with like-minded travelers, this platform aims to make every trip a memorable experience.

## Features

- API debouncing for the search functionality to reduce the number of API calls
- Service comparison
- Upcoming booking countdown

## Technology Stack

- Frontend: Next.js
- Language: TypeScript
- UI: Shadcn and Tailwind CSS
- State Management: Redux Toolkit & Redux Query

## Getting Started

To get started with the project, follow these instructions:

### Prerequisites

Make sure you have the following software installed on your machine:

- Git
- Node.js (v20.9.0 recommended)
- yarn or any package installer

### Cloning the Repository

Clone the project repository with the following command:

```
git clone https://github.com/syedfarhanreza/tourizto-client.git

```

### Installing Dependencies

After cloning the project, open the terminal, navigate to the project folder, and run: `yarn install`

```
yarn install

```

### Setting Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB credentials:

```
VITE_BASE_API=https://tourizto-server.vercel.app/api/v1
```

### Running the Project

Once you have set up the environment variables, you can run the project locally.

```
yarn run dev

```

### Accessing the Project

```
http://localhost:5173
```
