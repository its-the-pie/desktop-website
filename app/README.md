Yasmin Farley


 
Any added installations necessary to run the program

- Should be just Node.js, https://docs.npmjs.com/downloading-and-installing-node-js-and-npm?ref=meilisearch-blog
 
A summary of your program

- This is a portfolio website, modeled after a desktop! 
- The tabs open, grow, shrink, and close. 
- They can be personalized in color and text/content, and many contain text/images.
- There is a functioning clock in the bottom left corner.
- The tabs are draggable, as well as the desktop icons.
- The desktop icons need to be double-clicked, but the menu icons only need to be single clicked to work.
- The about tab features a text carousel, and the baking tab features and image carousel.
 
Which language your program starts in, and which other language(s) it uses

- It starts in Next.js (tsx pages), contains Tailwind CSS (within the tsx, anywhere it says "className"), plain css (globals.css), and Javascript (js) 
 
How you use each language in the program and why the language is a good choice for that use / How the languages are connected (i.e. which one calls which, and where in your code)


- Next.js is used for the HTML elements and the framework of the site; it is nicer to use and more expandable than HTML. It pairs beautifully with Tailwind, which is used hand-in-hand to stylize the Next.js elements. The Tailwind is called within the HTML (Next.js) elements, using className=''. 
- Javascript is used for the clock component. It was the best way I could find to get the date and time and easily integrate it into my Next.js elements. It is used as a component; so it is created in a seperate file, and the imported into page.tsx as a Clock component.
- Most of the Next.js functions are in the components file. These each serve a purpose that either is reused (like the icons) or not easy to integrate straight into page.tsx (like the clock component). Next.js components are fantastic for reuse; you can see in the page.tsx file that I have created so many DesktopIcon and MenuIcon components, as well as many Tab components. Next.js lets me reuse code without needing to copy/paste.
 
 
Any known bugs at time of submission

- There is a "hydration error" that does not actually cause any issues with the program, but does display a warning. This is because I display the clock time in military time, whereas the program expects 12-hour.
 
Future work (how you could expand the program with more time)

- I intend to add further functionality to the other tabs, like creating a working file system and photo gallery. I also intend to just add more text and info that can help with using this as a portfolio website in the future :)
 
Citations for any code not written by you or the instructor

- https://javascriptdebugged.com/build-a-simple-next-js-interactive-web-based-digital-clock/
- https://stackoverflow.com/questions/55056513/vertical-align-with-tailwind-css-across-full-screen-div
- www.npmjs.com/package/react-draggable
- https://stackoverflow.com/questions/77778063/get-current-date-in-the-server-side-of-Next.js-13
- https://stackoverflow.com/questions/72472717/different-css-based-on-url

 
The grade you think you have earned, based on the grading rubric below, with justi
fi
cation
Complexity: 40 points. While I do not have user input, the program does have lots of user interaction, and lots of added elements that I think add the program's complexity.
Languages: 10+ points. I used 3 main languages (Tailwind, Next.js, js) and I do think I used them well. I hope they are different enough for more than 10 points, but it is true that they all work so fluidly that the distinctions are kind of invisible.
Choice of Language: 20 points. I truly believe I chose languages that make sense for my program, and show their strengths.
Command Line Arguments: ? points. Data is passed between languages and files (imports; namely Clock.js) but this is not done through CLI.
Comments: 0 pts :) They are pretty good I think! Hopefully with the classnames and component names that are in page.tsx, it will be clear what is what.
