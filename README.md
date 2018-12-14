# 2018 Fall Javascript 2 project

You need to finish building the "past toDos" page.

The goal of the page is to give the user of the app summary information about
the toDo items they have done in the past.

## How to complete this project

First, [fork](https://help.github.com/articles/fork-a-repo/) this repo.

Note that we only have a few things in this repo. One css, one html file, and
one js file. I have already populated all of these with some boilerplate for
you.

In class we never had a separate .js file, and always relied on using scripts
inside the .html file - both styles work, but splitting it out can often be
cleaner.

In the .js file you will notice I added some sample/fake data. I then wrote a
few functions that go ahead and add some of the fake data to the page. For the
project you just need to modify these functions to add additional detail to the
page. 

For each new feature below, work on the feature, and make a commit either once
you have finsihed the feature, or if you get stuck. Feel free to reach out in
slack if you get stuck

Once you have a commit for each feature, make sure to push all your work to your
forked repo, and then send that forked repo (the url) to me. 

## New Features

Currently the only thing displayed for each day is the date. Note that I have
used cards to wrap each to do item - [cards](https://getbootstrap.com/docs/4.1/components/card/) are a nice layout item where we can
add lots of content

Remember from the root of the project (i.e if you type pwd the last thing you
should see is 2018-fall-javascript-2-project, and if you ls you should see
package.json, past.css etc...) all you need to do is type `npm start` and you
will then have a server that is synced with your browser. From there start
editing the files with vscode.

### Show Details

By default we do not want to show any detailed information about the toDos for a
particular day, but the user should be able to request to see more

Add a button to each of the days that when clicked adds details for that
particular day. Not that the pastToDos array has a toDos key that has an array
of the toDos for that day.

### Show Top Priority for a given day

For each day figure out which priorityTag was the most common and display that.
For 2019-12-01 that was Family for example.

### Show percent complete of todos for a particular day

For each todo items we want to show the percent complete for that paricular day
with a progress bar

### Show globally the percent complete for all past to dos

We should also show the percent complete for all past days with a progress bar.

To accomplish this there is a very powerful method on arrays called flatMap

I've added the below to the bottom of past.js, open the console and look at
what it is logging (hint, if you use map instead of flatMap, you would be
getting an array of arrays)

```
console.log(pastToDos.flatMap(toDo => toDo.toDos))
console.log(pastToDos.flatMap(toDo => toDo.toDos.map(x => x.done)))
```

