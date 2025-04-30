import express from 'express';

function register(app: express.Application): void {
  app.use(express.json());
}

export default register;
