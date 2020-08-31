let displayResult = document.getElementById("quotes");
let displayAuthor = document.getElementById("author");
let myButton = document.getElementById("myBtn");
myButton.addEventListener(`click`, changeQuote);

function changeQuote() {
let quotes = [

    {
  
      quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
  
      authour: "Eleanor Roosevelt",
  
    },
  
    {
  
      quote:
  
        "Happiness is not something ready made. It comes from your own actions.",
  
      authour: "Dalai Lama",
  
    },
  
    {
  
      quote: "Whatever you are, be a good one.",
  
      authour: "Abraham Lincoln",
  
    },

    {
        quote: "Don’t be afraid to give up the good to go for the great." ,
        author: "John D. Rockefeller",
    },

    {
        quote: "People who wonder if the glass is half empty or full miss the point. The glass is refillable.",
        author: "Unknown",
    },

    {
        quote: "Just another Magic Monday",
        author: "Unknown",
    },

    {
        quote: "One day or day one. You decide." ,
        author: "Unknown",
    },

    {
        quote: "It’s Monday… time to motivate and make dreams and goals happen. Let’s go!",
        author: "Heather Stillufsen"
    },

    {
        quote: "It was a Monday and they walked on a tightrope to the sun.",
        author: "Marcus Zusak"
    },

    {
        quote: "Goodbye blue Monday." ,
        author: "Kurt Vonnegut"
    },

    {
        quote: "So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more-positive partnership " ,
        author: "Julio-Alexi Genao"
    },

    {
        quote: "When life gives you Monday, dip it in glitter and sparkle all day." ,
        author: "Ella Woodword"
    },

    {
        quote: "No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.” " ,
        author: "Jaymin Shah"
    },

    {
        quote: "Things may come to those who wait, but only the things left by those who hustle." ,
        author: "Abraham Lincoln"
    },  
    
    {
        quote: "Everything comes to him who hustles while he waits." ,
        author: "Thomas Edison"
    },

    {
        quote: "Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him. " ,
        author: "K’wan"
    },

    {
        quote: "Invest in your dreams. Grind now. Shine later." ,
        author: "Unknown"
    },

    {
        quote: "Hustlers don’t sleep, they nap." ,
        author: "Unknown"
    },

    {
        quote: "Greatness only comes before hustle in the dictionary" ,
        author: "Ross Simmonds"
    },

    {
        quote: "Without hustle, talent will only carry you so far." ,
        author: "Gary Vaynerchuk"
    },

    {
        quote: "Work like there is someone working twenty four hours a day to take it away from you." ,
        author: "Mark Cuban"
    },

    {
        quote: "Hustle in silence and let your success make the noise" ,
        author: "Unknown"
    },

    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." ,
        author: "Aristotle"
    },
    
    {
        quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on." ,
        author: "Sheryl Sandberg"
    },

    {
        quote: "I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough." ,
        author: "Marissa Mayer"
    },

    {
        quote: "If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced." ,
        author: "Vincent Van Gogh"
    },

    {
        quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world." ,
        author: "Anne Frank"
    },

    {
        quote: "Some people want it to happen, some wish it would happen, others make it happen." ,
        author: "Michael Jordan"
    },

    {
        quote: "Great things are done by a series of small things brought together" ,
        author: "Vincent Van Gogh"
    },

    {
        quote: "If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears." ,
        author: "Simon Sinek"
    },

    {
        quote: "Very often, a change of self is needed more than a change of scene." ,
        author: "A.C. Benson"
    },

    {
        quote: "Leaders can let you fail and yet not let you be a failure" ,
        author: "Stanley McChrystal"
    },

    {
        quote: "It’s not the load that breaks you down, it’s the way you carry it." ,
        author: "Lou Holtz"
    }
  
  ];

let num = Math.floor(Math.random() * quotes.length);
let myQuote = quotes[num];
displayResult.innerHTML =`"${myQuote.quote}"`;
displayAuthor.innerHTML = myQuote.author;

}