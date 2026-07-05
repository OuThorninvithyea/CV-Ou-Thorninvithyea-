export const blogPosts = [
  {
    id: "api-request-flow-go-fiber",
    title: "What I Learned About How API Requests Work",
    date: "2026-07-05",
    readTime: "4 min",
    tags: ["HTTP", "Go", "Fiber", "Backend"],
    excerpt:
      "A practical note from learning Go Fiber: a simple endpoint still has a full request flow behind it, from client to router to handler, service, repository, database, and response.",
    content: [
      {
        type: "paragraph",
        text: "While learning backend development with Go Fiber, I started to understand that an API request is more than just calling an endpoint.",
      },
      {
        type: "paragraph",
        text: "When we write something like:",
      },
      {
        type: "code",
        code: "http://127.0.0.1:3000/login",
      },
      {
        type: "paragraph",
        text: "It has several parts:",
      },
      {
        type: "code",
        code: `http        = protocol
127.0.0.1  = host
3000        = port
/login      = path or route`,
      },
      {
        type: "paragraph",
        text: "The client can be a browser, mobile app, Postman, or curl. That client sends an HTTP request to the server.",
      },
      {
        type: "code",
        code: `POST /login HTTP/1.1
Host: 127.0.0.1:3000
Content-Type: application/json

{
  "username": "ADMIN",
  "password": "admin123"
}`,
      },
      {
        type: "paragraph",
        text: "Then the server sends a response back:",
      },
      {
        type: "code",
        code: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Login success"
}`,
      },
      {
        type: "paragraph",
        text: "In my Go Fiber backend, the request flow looks like this:",
      },
      {
        type: "code",
        code: `Client
-> HTTP request
-> Fiber router
-> Handler
-> Service
-> Repository
-> Database
-> Response`,
      },
      {
        type: "paragraph",
        text: "Each layer has a job. The router matches the URL path and HTTP method. The handler receives the request, validates the input, and returns the response. The service contains the business logic. The repository talks to the database.",
      },
      {
        type: "paragraph",
        text: "Learning this helped me understand that backend development is not only about creating routes. It is about understanding how data moves from the client, through the network, into the server, through the application layers, and back to the client.",
      },
      {
        type: "paragraph",
        text: "The biggest lesson for me:",
      },
      {
        type: "code",
        code: "A simple API endpoint has a full system behind it.",
      },
      {
        type: "paragraph",
        text: "That changed the way I think about backend development.",
      },
    ],
  },
  {
    id: "clean-architecture-go",
    title: "Clean Architecture in Go — A Practical Guide",
    date: "2025-11-20",
    readTime: "8 min",
    tags: ["Go", "Architecture", "Backend"],
    excerpt:
      "How I structure Go projects with Clean Architecture: handlers, usecases, and repositories. Lessons learned from building a production admin API with Fiber and PostgreSQL.",
  },
  {
    id: "jwt-auth-flow",
    title: "JWT Authentication with Refresh Tokens — The Complete Flow",
    date: "2025-10-05",
    readTime: "6 min",
    tags: ["Security", "Backend", "Go"],
    excerpt:
      "Understanding access tokens, refresh tokens, and rotation. Implementing a secure auth flow in Go with Redis for token blacklisting.",
  },
  {
    id: "react-performance",
    title: "React Performance Patterns I Use Daily",
    date: "2025-08-18",
    readTime: "5 min",
    tags: ["React", "Frontend", "Performance"],
    excerpt:
      "Memoization, lazy loading, virtual scrolling, and state colocation. Practical techniques that improved my app performance and reduced re-renders.",
  },
  {
    id: "docker-workflow",
    title: "Docker for Full-Stack Development — My Workflow",
    date: "2025-06-30",
    readTime: "7 min",
    tags: ["Docker", "DevOps", "Backend"],
    excerpt:
      "How Docker simplified my development workflow: multi-service setups, consistent environments, and painless deployments for Go + React projects.",
  },
  {
    id: "websocket-realtime",
    title: "Building Real-Time Features with WebSockets in Go",
    date: "2025-05-12",
    readTime: "6 min",
    tags: ["Go", "WebSocket", "Backend"],
    excerpt:
      "From polling to push: implementing real-time notifications and live dashboards with WebSocket in a Fiber-based Go backend.",
  },
];
