import 'dotenv/config'
import express from 'express'
import { Octokit } from "@octokit/core"
import wordwrap  from "wordwrap"
async function main() {

        async function justRead() {
          try {
            var recent = await request.get('https://www.googleapis.com/books/v1/users/${googleBooksUID}/bookshelves/4/volumes?&key=${googleBooksKey}');
            var recent = await request.get(`https://www.googleapis.com/books/v1/users/${googleBooksUID}/bookshelves/4/volumes?&key=${googleBooksKey}`);
            await delay();
            return recent.body;
          } catch(error) {
async function main() {

        async function currentlyRead() {
          try {
            var current = await request.get('https://www.googleapis.com/books/v1/users/${googleBooksUID}/bookshelves/3/volumes?&key=${googleBooksKey}');
            var current = await request.get(`https://www.googleapis.com/books/v1/users/${googleBooksUID}/bookshelves/3/volumes?&key=${googleBooksKey}`);
            await delay();
            return current.body;
          } catch(error) {
            return null;
          }
        }
        (async function(){
          let justFinished = await justRead();
          let justFinishedTitle = justFinished.items[0].volumeInfo.title;
          let justFinishedauthor = justFinished.items[0].volumeInfo.authors;
          const justReadTitle = justFinishedTitle;
          const justReadAuthor = justFinishedauthor.toString();
          let currentReading = await currentlyRead();
          let currentReadingTitle = currentReading.items[0].volumeInfo.title;
          let currentReadingAuthor = currentReading.items[0].volumeInfo.authors;
          const currentTitle = currentReadingTitle;
          const currentAuthor = currentReadingAuthor.toString();
          console.log(justReadTitle);
          console.log(justReadAuthor);
        const currentlyReading = justReadTitle && justReadAuthor
            ? `Recently Finished: ${justReadTitle.split(':'[0])} \n By ${justReadAuthor}\n`
