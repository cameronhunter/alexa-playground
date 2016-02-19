import test from 'ava';
import express from 'express';
import request from 'supertest-as-promised';
import server from '../server';

const app = new express().use(server);
const get = (...args) => request(app).get(...args);

test('/', t => {
  return get('/').expect(200).then(({ text }) => t.ok(/Hello World!/.test(text)));
});

test('/:name', t => {
  return get('/React').expect(200).then(({ text }) => t.ok(/Hello React!/.test(text)));
});
