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
    content: [
      {
        type: "paragraph",
        text: "Every Go backend I've shipped starts simple: a handler that reads the request, hits the database, and writes a response. That works fine until the product grows — more endpoints, more business rules, and features like caching, real-time updates, or background processing that don't belong inside a handler function.",
      },
      {
        type: "paragraph",
        text: "The fix that has held up for me is a strict layer boundary, with dependencies pointing in one direction only:",
      },
      {
        type: "code",
        code: `internal/
  handler/     HTTP layer (Fiber routes, request/response mapping)
  usecase/     business logic, orchestrates the work
  repository/  data access, talks to Postgres/Redis/etc.
  domain/      core types + the interfaces everything else depends on`,
      },
      {
        type: "paragraph",
        text: "The rule that makes this pay off: usecases depend on interfaces defined in domain, never on concrete repository structs. A handler calls a usecase; a usecase calls a repository interface. Nothing outer leaks into something inner.",
      },
      {
        type: "code",
        code: `// domain/user.go
type UserRepository interface {
    FindByID(ctx context.Context, id string) (*User, error)
    Save(ctx context.Context, u *User) error
}

// usecase/user.go
type UserUsecase struct {
    repo domain.UserRepository
}

func (uc *UserUsecase) GetProfile(ctx context.Context, id string) (*User, error) {
    return uc.repo.FindByID(ctx, id)
}`,
      },
      {
        type: "paragraph",
        text: "At this point it looks like ceremony for a simple lookup. The value shows up once you need to add something across a layer boundary — caching is the clearest example. Because the usecase only knows about the UserRepository interface, I can wrap the Postgres implementation in a decorator that checks Redis first, and nothing above it changes:",
      },
      {
        type: "code",
        code: `// repository/cached_user.go
type CachedUserRepository struct {
    inner domain.UserRepository
    cache *redis.Client
}

func (r *CachedUserRepository) FindByID(ctx context.Context, id string) (*User, error) {
    if raw, err := r.cache.Get(ctx, "user:"+id).Result(); err == nil {
        return decodeUser(raw), nil
    }
    user, err := r.inner.FindByID(ctx, id)
    if err == nil {
        r.cache.Set(ctx, "user:"+id, encodeUser(user), 5*time.Minute)
    }
    return user, err
}`,
      },
      {
        type: "paragraph",
        text: "Swap CachedUserRepository in where the plain one used to be wired up, and the usecase and handler are completely unaware caching exists. Same story for rate limiting a hot endpoint — it wraps the repository or sits in middleware, not scattered through business logic.",
      },
      {
        type: "paragraph",
        text: "Real-time features get the same treatment. A usecase that changes state — a new comment, a new notification — publishes a domain event through an interface, not through a specific transport:",
      },
      {
        type: "code",
        code: `type EventPublisher interface {
    Publish(ctx context.Context, event DomainEvent)
}`,
      },
      {
        type: "paragraph",
        text: "Whatever sits behind that interface — an in-memory hub pushing Server-Sent Events, a Redis pub/sub fan-out, a WebSocket broadcaster — the usecase layer doesn't know or care. I've swapped the transport under this interface more than once without touching a single usecase.",
      },
      {
        type: "paragraph",
        text: "The same pattern covers background work: an image or video upload triggers a usecase call to a MediaProcessor interface, and the concrete implementation (compress, resize, generate a preview) runs on its own without the HTTP handler waiting on it or knowing how it happens.",
      },
      {
        type: "paragraph",
        text: "The lesson that stuck with me: Clean Architecture isn't about the folder names. It's about making the boundary interfaces the only thing layers know about each other, so caching, real-time delivery, and background processing can be bolted on as the product grows — instead of rewriting the core business logic every time a new cross-cutting concern shows up.",
      },
    ],
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
