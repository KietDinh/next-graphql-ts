## Env
- DATABASE_URL=
- DIRECT_URL=
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
- CLERK_SECRET_KEY=
- NEXT_PUBLIC_CLERK_SIGN_IN_URL=
- NEXT_PUBLIC_CLERK_SIGN_UP_URL=
- NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
- NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Notes

### Generals

Parenthesis around the folder in app router: doesn't get added to the segment in the route. Won't be a new route but a way to group pages together that have similar UI

Sign in/ Sign out folder: catch all routes? 

Client Component can't use hooks or async

### Zod

Schema generator

### Langchain

LangChain gives you one standard interface for many use cases instead of using SDK of different model (ChatGPT, Claude,...)

### Clerk

Identity as a Service

### PlanetScale

Serverless SQL database

### Prisma

npx prisma db push: sync schema

npx prisma format: code-format the schema.prisma

npx prisma studio: ssms for prisma