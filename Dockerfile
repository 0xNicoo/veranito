FROM golang:1.24-alpine

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN mkdir -p uploads

RUN go build -o app

EXPOSE 8080

CMD ["./app"]
