#  Developer Guide: Discover

In this documentation, we will explore a web application developed with Next.js, a powerful React framework, combined with Tailwind CSS for styling. The purpose of this project is to learn and practice modern web development techniques.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [How to setup as development](#setup-as-development)

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building fast, server-side rendered web applications.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for designing responsive and modern interfaces.

## Setup as development

### Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js
- NPM

### Installation

**1. Install the dependencies:** 

Running the following command in your terminal:

```bash
npm install
```

**2. Set Environment Variables:**

Create a '.env' file in the root directory and configure the following variables:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<Your google maps platform API Key>
```

In google maps platform, you need to enable the following APIs:

- Places API (New)
- Maps Embed API

[Google Maps Platform](https://developers.google.com/maps/gmp-get-started)

**3. Run the development server:**

```bash
npm run dev
```