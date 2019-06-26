import { Injectable } from '@angular/core';

@Injectable()
export class WebsiteService {

    constructor() {
        const websiteUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites";
    }

    findAllWebsites() {
        return fetch("https://wb-su19-dwelch-server-node.herokuapp.com/api/websites", {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(website => {
            return website.json();
            })
            .then(websiteData => {
            console.log(websiteData);
            return websiteData
            });
    }

    findWebsiteById(id: String) {
    return fetch("https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/" + id, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(website => {
        return website.json();
        })
        .then(websiteData => {
        console.log(websiteData);
        return websiteData
        });
    }

    createWebsite(website) {
        const createUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites";
        return fetch(createUrl, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(website),
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

    updateWebsite(websiteId, website) {
      const editProfileUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId".replace(":websiteId", websiteId);
      return fetch(editProfileUrl, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(website),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {return response.json()})
    }

    deleteWebsite (websiteId) {
      const deleteWebsiteUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId".replace(":websiteId", websiteId);
      return fetch(deleteWebsiteUrl, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => {return response.json()})
    }
}
