# YATECH TEST CHALLENGE

**\*Requirements : NodeJS v16.16.0, MySQL, Expresso, Sequelize**

# 1. INSTALLATION

1. Clone repository `git clone https://github.com/ahmadaait/yatech-challenge.git`
2. Go to api directory `cd api`
3. Install dependency using `npm install`
4. Create a new database or execute test-yatech.sql file on root directory
5. Setup .env file
6. Run migration using `npx sequelize-cli db:seed:all`
7. Run seeder using `npx sequelize-cli db:migrate`
8. Start server using `npm run dev`

# 2. API DOCS

**\* You can import postman environment and collection on postman-docs directory or try manual using list available endpoints**

## Endpoints

List of available endpoints:

- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `POST /v1/auth/refresh`
- `GET /v1/users`
- `GET /v1/users/:id`
- `GET /v1/books`
- `GET /v1/books/:id`
- `POST /v1/books`
- `PUT /v1/books/:id`
- `DELETE /v1/books/:id`

## 1. POST /v1/auth/register

Request:

- body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

## 2. POST /v1/auth/login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

## 3. POST /v1/auth/refresh

Request:

- headers:

```json
{
  "Authorization": "Bearer {{token}}"
}
```

## 4. GET /v1/users

Response:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Demo User",
      "email": "demouser@gmail.com",
      "createdAt": "2023-09-27T00:18:39.000Z",
      "updatedAt": "2023-09-27T00:18:39.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10,
  "totalPages": 1
}
```

## 5. GET /v1/users/:id

Response:

```json
{
  "id": 1,
  "name": "Demo User",
  "email": "demouser@gmail.com",
  "createdAt": "2023-09-27T00:18:39.000Z",
  "updatedAt": "2023-09-27T00:18:39.000Z"
}
```

## 6. GET /v1/books

Request:

- headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

Response:

```json
{
  "data": [
    {
      "id": 1,
      "code": "BOOK.1",
      "title": "Buku 1",
      "description": "lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "createdAt": "2023-09-27T00:18:39.000Z",
      "updatedAt": "2023-09-27T00:18:39.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "pageSize": 10,
  "totalPages": 1
}
```

## 7. GET /v1/books/:id

Request:

- headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

Response:

```json
{
  "id": 1,
  "code": "BOOK.1",
  "title": "Buku 1",
  "description": "lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "createdAt": "2023-09-27T00:18:39.000Z",
  "updatedAt": "2023-09-27T00:18:39.000Z"
}
```

## 8. POST /v1/books

Request:

- headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

- body

```json
{
  "title": "string",
  "description": "string"
}
```

## 9. PUT /v1/books/:id

Request:

- headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```

- body

```json
{
  "title": "string",
  "description": "string"
}
```

## 10. DELETE /v1/books/:id

Request:

- headers

```json
{
  "Authorization": "Bearer {{token}}"
}
```
