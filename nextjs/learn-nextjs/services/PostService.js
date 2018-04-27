import fetch from 'isomorphic-unfetch';

export function getPosts(){
  return fetch(`https://jsonplaceholder.typicode.com/posts`);
};

export function getPost(postId){
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};

export function getComments(postId){
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
};