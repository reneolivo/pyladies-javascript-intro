//SOURCE:
//http://www.buzzfeed.com/lukewarm/can-you-identify-celebrities-when-they-dont-have-1jz08

var quizQuestions = [
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/7/tmp/webdr04/2883095af9b1d7ff9fadb99c4e4cad74-7.jpg',
    answers: [
      { correct: false, answer: 'Dave Franco' },
      { correct: false, answer: 'Ryan Reynolds' },
      { correct: true, answer: 'Zac Efron' },
      { correct: false, answer: 'Joseph Gordon-Levitt' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/10/tmp/webdr03/833ed0c761e87fc9e9fa271f8fa63e66-3.jpg',
    answers: [
      { correct: true, answer: 'Cara Delevingne' },
      { correct: false, answer: 'Jennifer Lawrence' },
      { correct: false, answer: 'Natalie Portman' },
      { correct: false, answer: 'Jennifer Aniston' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/10/tmp/webdr06/4eb46097803b2a57f7d70ed15255594a-0.jpg',
    answers: [
      { correct: false, answer: 'Idris Elba' },
      { correct: true, answer: 'Jamie Foxx' },
      { correct: false, answer: 'Craig David' },
      { correct: false, answer: 'Will Smith' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/10/tmp/webdr07/3a804e0651323274955ca8ff364ec8c9-0.jpg',
    answers: [
      { correct: false, answer: 'Katie Melua' },
      { correct: false, answer: 'Beyonce' },
      { correct: true, answer: 'Alicia Keys' },
      { correct: false, answer: 'Shania Twain' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/10/tmp/webdr12/b5ddb1add2406b30fe7da62150993f4c-0.jpg',
    answers: [
      { correct: true, answer: 'Tom Hardy' },
      { correct: false, answer: 'Ryan Gosling' },
      { correct: false, answer: 'Jake Gyllenhaal' },
      { correct: false, answer: 'Russell Crowe' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/10/tmp/webdr02/2b56f3004c4869000abdeaf3115086e8-1.jpg',
    answers: [
      { correct: false, answer: 'Meryl Streep' },
      { correct: false, answer: 'Helen Mirren' },
      { correct: false, answer: 'Julie Andrews' },
      { correct: true, answer: 'Hillary Clinton' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/11/tmp/webdr12/cbf41aabf8fa4ca61cc2b34021bf3311-5.jpg',
    answers: [
      { correct: true, answer: 'David Beckham' },
      { correct: false, answer: 'Ben Affleck' },
      { correct: false, answer: 'Justin Timberlake' },
      { correct: false, answer: 'Robert Downey Jr.' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/13/tmp/webdr08/7cd9526f35d7f2ea150d4a1dc0f370b7-4.jpg',
    answers: [
      { correct: false, answer: 'Kim Kardashian' },
      { correct: false, answer: 'Mila Kunis' },
      { correct: false, answer: 'Scarlett Johansson' },
      { correct: false, answer: 'Demi Lovato' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/14/tmp/webdr06/9bb05f6d833fc704a0b89fe2d88a3cb2-11.jpg',
    answers: [
      { correct: false, answer: 'Ethan Hawke' },
      { correct: false, answer: 'Channing Tatum' },
      { correct: false, answer: 'Chris Pratt' },
      { correct: false, answer: 'Matt Damon' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/14/tmp/webdr02/ba143a071e1331486c9dee90baaf6bf9-1.jpg',
    answers: [
      { correct: false, answer: 'Jessica Biel' },
      { correct: false, answer: 'Olivia Wilde' },
      { correct: true, answer: 'Jessica Alba' },
      { correct: false, answer: 'Rachel Bilson' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/14/tmp/webdr03/90763e57d15cbff51afec064fc6b129b-3.jpg',
    answers: [
      { correct: false, answer: 'John Legend' },
      { correct: false, answer: 'Kanye West' },
      { correct: true, answer: 'Chris Brown' },
      { correct: false, answer: 'Jay-Z' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/15/tmp/webdr13/5fcc25d3877f7ef72438246662a73c68-4.jpg',
    answers: [
      { correct: false, answer: 'Emma Watson' },
      { correct: true, answer: 'Keira Knightley' },
      { correct: false, answer: 'Vanessa Hudgens' },
      { correct: false, answer: 'Anna Kendrick' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/16/tmp/webdr05/28f8a0602a6d7db9d6dcde68ee630fa7-0.jpg',
    answers: [
      { correct: true, answer: 'Robert De Niro' },
      { correct: false, answer: 'Michael Douglas' },
      { correct: false, answer: 'George Clooney' },
      { correct: false, answer: 'Matt Le Blanc' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/16/tmp/webdr06/cb2b1abba80c7c38c19a2ac54592b55f-1.jpg',
    answers: [
      { correct: false, answer: 'Katy Perry' },
      { correct: false, answer: 'Zooey Deschanel' },
      { correct: true, answer: 'Emily Blunt' },
      { correct: false, answer: 'Drew Barrymore' }
    ]
  },
  {
    image: 'http://s3-ak.buzzfeed.com/static/2015-09/27/16/tmp/webdr09/9b9b99be3df527d8ace908825be9c190-1.jpg',
    answers: [
      { correct: false, answer: 'Michael Jordan' },
      { correct: false, answer: 'Michael Johnson' },
      { correct: true, answer: 'Denzel Washington' },
      { correct: false, answer: 'Samuel L. Jackson' }
    ]
  }
];
