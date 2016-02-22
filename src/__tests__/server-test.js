import test from 'ava';
import express from 'express';
import request from 'supertest-as-promised';
import server from '../../build/server';

const app = new express().use(server);
const get = (...args) => request(app).get(...args);

test('/', t => {
  return get('/').expect(200);
});
