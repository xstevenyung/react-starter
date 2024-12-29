FROM denoland/deno:2.1.4
COPY . /app/
WORKDIR /app
RUN deno install
RUN deno task build

CMD ["deno", "task", "start"]