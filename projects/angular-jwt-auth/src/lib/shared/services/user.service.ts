import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {API_URL} from '../../urls';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post(`${API_URL}/users/register`, user);
  }

  getAll(): Observable<any[]> {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/users/` + id);
  }

  update(user: User) {
    return this.http.put(`${API_URL}/users/` + user.id, user);
  }

  remove(id: number) {
    return this.http.delete(`${API_URL}/users/` + id);
  }
}
