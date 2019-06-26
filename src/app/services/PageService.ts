import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

    constructor() {
        const pageUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId/pages/:pageId";
    }

    findPageById(websiteId, pageId) {
    const findPageUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId/pages/:pageId"
        .replace(":websiteId", websiteId).replace(":pageId", pageId);
    return fetch(findPageUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(page => {
        return page.json();
        })
        .then(pageData => {
        console.log(pageData);
        return pageData
        });
    }

    createPage(websiteId, page) {
        const createUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId/pages/:pageId"
            .replace(":websiteId", websiteId);
        return fetch(createUrl, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(page),
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

    updatePage(websiteId, pageId, page) {
        const editUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId/pages/:pageId"
            .replace(":websiteId", websiteId).replace(":pageId", pageId);
        return fetch(editUrl, {
            credentials: 'include',
            method: 'PUT',
            body: JSON.stringify(page),
            headers: {
            'content-type': 'application/json'
            }
        })
        .then(response => {return response.json()})
    }

    deletePage (websiteId, pageId) {
        const deletePageUrl = "https://wb-su19-dwelch-server-node.herokuapp.com/api/websites/:websiteId/pages/:pageId"
        .replace(":websiteId", websiteId).replace(":pageId", pageId);
        return fetch(deletePageUrl, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            }
        })
            .then(response => {return response.json()})
    }
}
