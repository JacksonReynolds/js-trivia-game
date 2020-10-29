# JavaScript Trivia Game Project

## Overview

This is the repository for my JavaScript Trivia Game project for Flatiron School. This is a frontend single page application where a user can test their trivia skills on some trivia question I got from [Open Trivia Databse](https://opentdb.com/api_config.php). The questions range from easy to hard, with points alloted accordingly. The user can play as many times as they want, and their score will be added to the database. If they reach a relatively high score, their score will be included in the HiScore table shown at the end of each game. Enjoy

## Pre-requisites

Make sure that you have installed bundler. You can check this by running `gem install bundler` from your root directory in the terminal.

## Install

Once you have cloned this repository, cd into the backend directory from the app parent directory and run `bundler install`. After that, run `rake db:migrate`, `rake db:seed` to make sure the database is set up. This will seed the database with the questions, as well as a record of past all-star users that will populate the HiScore table.

## Running the App

In the terminal, start the rails server (`rails s`). Then, navigate to the frontend directory in the parent directory of the app. Form there you can open `index.html` in your broswer to access the app!

## Contributors Guide

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

Jackson Reynolds - [GitHub](https://github.com/JacksonReynolds)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

