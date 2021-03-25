import { RotiroError } from 'rotiro';
import { RotiroErrorCode } from 'rotiro/lib/errors/error-codes';

let nextId = 0;
const users: Record<string, User> = {};

export interface User {
  id: string;
  name: string;
  age: number;
}

export async function addUser(name: string, age: number): Promise<User> {
  if (!name || age < 1) {
    throw new RotiroError(
      'Invalid user data',
      RotiroErrorCode.OriginalRequestNotValid
    );
  }

  nextId++;
  const user: User = {
    id: nextId.toString(),
    name,
    age
  };
  users[user.id] = user;
  return user;
}

export async function getUser(userId: string): Promise<User> {
  const user = users[userId];
  if (user) {
    return user;
  }
  throw new RotiroError('User not found', RotiroErrorCode.PathNotFound);
}

export async function getUsers(): Promise<User[]> {
  return Object.values(users);
}

export async function deleteUser(userId: string): Promise<string> {
  if (users[userId]) {
    delete users[userId];
    return userId;
  }

  throw new RotiroError('User not found', RotiroErrorCode.PathNotFound);
}

export async function search(query: string): Promise<User[]> {
  const searchResults: User[] = [];
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

export async function updateUser(userId: string, payload: any): Promise<User> {
  const user: User = await getUser(userId);

  Object.keys(payload).forEach(key => {
    if (typeof (user as any)[key] !== 'undefined') {
      (user as any)[key] = payload[key];
    }
  });

  return user;
}

export async function populateUsers(): Promise<User[]> {
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
