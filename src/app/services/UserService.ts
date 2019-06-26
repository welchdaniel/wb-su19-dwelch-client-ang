import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {
        const userUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/users";
    }

    findUserByCredentials(un: String, pw: String) {
      return fetch("https://wb-su19-dwelch-server-node.herokuapp.com/api/users/login", {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
          username: un,
          password: pw
        }),
        headers: {
            'content-type': 'application/json'
        }
      })
        .then(user => {
          return user.json();
        })
        .then(userData => {
          console.log(userData);
          return userData
        });
    }

    findUserById(id: String) {
    return fetch("https://wb-su19-dwelch-server-node.herokuapp.com/api/users/" + id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(user => {
        return user.json();
        })
        .then(userData => {
        console.log(userData);
        return userData
        });
    }

    findUserByUsername(un: String) {
    console.log(un)
    return fetch("https://wb-su19-dwelch-server-node.herokuapp.com/api/users/register", {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
        username: un
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(user => {
        return user.json();
        })
        .then(userData => {
        console.log(userData);
        return userData
        });
    }


    createUser(user) {
        const createUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/users";
        return fetch(createUrl, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
        })
        .then(res => {
            return res;
        })
        .then(resData => {
            return resData;
        });
    }

    updateUser(userId, user) {
      const editProfileUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/users/:userId".replace(":userId", userId);
      return fetch(editProfileUrl, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {return response.json()})
    }

    deleteUser (userId) {
      const deleteUserUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/users/:userId".replace(":userId", userId);
      return fetch(deleteUserUrl, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {return response.json()})
    }
}
