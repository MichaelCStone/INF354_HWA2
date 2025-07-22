import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  // private users = [
  //   {
  //     email: "mikestone2002@gmail.com",
  //     password: "example@123"
  //   }
  // ];

  // login(email: string, password: string): boolean 
  // {
  //   return this.users.some(user => user.email === email && user.password === password)
  // }

  // signup(email: string, password: string): boolean
  // {
  //   const userExists = this.users.some(user => user.email === email);

  //   if (userExists)
  //   {
  //     return false;
  //   }

  //   this.users.push({ email, password });
  //   return true;
  // }

  constructor() 
  {
    if (!localStorage.getItem('users')) 
    {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }

  login(email: string, password: string): boolean 
  {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some((user: any) => user.email === email && user.password === password);
  }

  signup(email: string, password: string): boolean 
  {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: any) => user.email === email);

    if (userExists) 
    {
      return false;
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
}
