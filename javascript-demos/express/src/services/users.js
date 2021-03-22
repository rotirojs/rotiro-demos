import { RotiroErrorResponse } from 'rotiro';

let nextId = 0;
const users = {};

export async function addUser(name, age) {
  if (!name || typeof age !== 'number' || age < 1) {
    throw new Error('422');
  }

  nextId++;
  const user = {
    id: nextId,
    name,
    age
  };
  users[user.id] = user;
  return user;
}

export async function getUser(userId) {
  const user = users[userId];
  if (user) {
    return user;
  }

  throw new Error('404');
}

export async function getUsers() {
  return Object.values(users);
}

export async function deleteUser(userId) {
  if (users[userId]) {
    delete users[userId];
    return userId;
  }

  throw new RotiroErrorResponse('User not found', 404);
}

export async function search(query) {
  const searchResults = [];
  const searchParam = (query || '').toLowerCase();
  if (searchParam.length === 0) {
    return searchResults;
  }

  for (const user of Object.values(users)) {
    const name = user.name.toLowerCase();
    if (name.indexOf(searchParam) > -1) {
      searchResults.push(user);
    }
  }

  return searchResults;
}

export async function updateUser(userId, payload) {
  const user = await getUser(userId);
  let updated = false;
  Object.keys(payload).forEach(key => {
    if (typeof user[key] !== 'undefined') {
      user[key] = payload[key];
      updated = true;
    }
  });
  return user;
}

export async function populateUsers() {
  for (const user of newUsers) {
    await addUser(user.name, user.age);
  }
  return Object.values(users);
}

const newUsers = [
  { name: 'Bob', age: 19 },
  { name: 'James', age: 75 },
  { name: 'Georgina', age: 31 },
  { name: 'Margret', age: 55 },
  { name: 'Terry', age: 26 },
  { name: 'Frank', age: 46 },
  { name: 'Sarah', age: 25 },
  { name: 'Tom', age: 67 },
  { name: 'Charles', age: 34 },
  { name: 'Charlotte', age: 53 },
  { name: 'Emily', age: 18 },
  { name: 'Roger', age: 42 },
  { name: 'Jane', age: 21 }
];
