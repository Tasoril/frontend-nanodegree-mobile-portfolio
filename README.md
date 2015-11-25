## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

========================================
==     How to Run This Application    ==
========================================
 - Open index.html in any web browser.
 - You can navigate to the pizza.html page by clicking on the last item in the list of profile items entitled "Cam's Pizzeria"

========================================
==      Optimizations Performed       ==
========================================
index.html PageSpeed Optimization:
 - Achieved score of 99 for both mobile and desktop.
 - 1 point deduction for cache time on Google Analytics, which cannot be addressed without creating a local copy of the Google Analytics script, which is not recommended.

Pizza.html 60FPS Scrolling:
 - style.css:
  - Added "will-change: transform;" to ".mover"'s CSS.
 - main.js:
  - Moved scrollTop and length calculations out of the for loop.
  - Swapped querySelectorAll with getElementsByClassName for performance increase.
  - Moved all possible portions of the calculations out of the for loop.
  - Created an array and for loop for the five possible values of the previously constantly recalculated "(i % 5)"
  - Switched to .style.transform instead of .style.left to remove layout and paint requirements for each frame.
  - Added comments to each line indicating what it does.

Pizza.html Resize Pizza Optimization:
 - main.js
  - Merged data from changeSliderLabel and sizeSwitcher into a single switch.
  - Removed determineDx function.
  - Removed changePizzaSizes function as it was now the only function in the resizePizzas variable. The function now runs linearly with no internal functions.
  - Swapped querySelectorAll with getElementsByClassName for performance increase.
  - Swapped all querySelectorAll references in the for loop to the "randomPizzas" variable.
  - Created "randomPizzasCount" to cache the length of the "randomPizzas" array to prevent recalcuation in the for header.
  - Switched to using straight % in the style.width command instead of the overly complex and unnecessary "dx" value.

========================================
==        Exceeds Expectations        ==
========================================
Critical Rendering Path for index.html:
 - Achieved score of 99 for both mobile and desktop.
  - Note that index.html has an inline stylesheet instead of a linked stylesheet because of the difference in pagespeed results (91 mobile/97 desktop)
   - In a real production website, I would weigh the advantages and disadvantages, and would likely use PHP to load the CSS which would appear inline client-side, but would have the advantages that a linked CSS document provides. (require_once("style/css.js");) and would evaluate the performance implications of that decision at that time.

Build Tools:
 - I used GULP as a tool to not only minify the js and css and optimize (compress) images, but I also found that there are plugins for JShint and CSSlint which validate CSS styles and JS code for issues or non-optimal settings. I have included my gulpfile.js and package.json in the root directory to display what I used to work on site optimization for index.html and which plugins.
  - I did NOT minify the CSS or JS for the pizza.html page as those are being evaluated as a part of this project.
  - Original files for all minified/compressed files can be found in the "preMinified" folder. The minified/compressed files are in the source locations, with copies in the "minified" folder. The "node_modules" folder has been excluded from the repo.