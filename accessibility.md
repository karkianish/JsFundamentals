https://app.pluralsight.com/library/courses/developing-websites-accessibility-getting-started/table-of-contents
## Empathy

### there are many people in the world with disabilities. they should not be left out from taking advantage of the web. as a developer, it is your responsibility to make sure if your target audience could include such population, your content should be consumable for them. Empathize! Imagine being blind and not being able to consume the content via your screen reader. Imagine not being able to use mouse to point and click. Create for them too!

## Designing with Accessibility in mind

### color and  accessibility
- red green deficiency: where red and green appear similary. some people cant even see any color. *do not rely on just a color to convey a message*
- low end devices may not able to distinguish colors that are close. so it would be safer to chose color with **higher contrast** rather than the similar ones
- how to tell what a color blind person experiences? there is a chrome extension "i want to see like the color blind" that can simulate color blind experience

### touch targets
- if you have touch targets (of course you do if your web app can be viewed in mobile/tablets), make them larger than finger tips. dont 
  place two targets so close that there is chance of accidentally hitting the unintended one. larger the better! space the touch points appropriately.

### icons
- icons are cool and looks elegant, but does the icons you are using universally convey the meaning you are trying to convey. many of your targeted audiences may not even understand the meaning of the icons you are using. words are clear and unambiguous and understood by greater population than icons.
- also what about for the visually impaired users? if you havent taken measures to provide description for the icons, they will simply be read as link - which entirely misses out on the meaning the icon was trying to convey
- use icons that are unambiguous and understood by majority of your audience. add text next to icons to make it clear for the non sighted users.
  
### accessibility and motion
- when using animations/transitions/parallax effects/flashing be mindful that features like those can create motion sickness, dizziness, and seizures in severe cases.
- keep it simple as much as possible. fight for simplicity! fight for clarity and ease of use!
- add toggle button that disables all animations in the page

### typography 
- use font size that are large but not obnoxiously large. range of 16px-20px is considered sweet spot. however, use relative units (ems, rems, %) to set font size so that they can grow and shrink as necessary.
- **contrast** is important for clarity. ensure your heading and a paragraph has enough contrast to be easily distinguished. similarly, bold/italic text should easily stand out from normal text. 
- dont make your line length too long or too short. aparently, line length of around 66 chars is considered ideal based on this video.
- line heights - 125% of text height is considered optimal. *whats the css prop for this?*
- avoid *justifying* text. they create 'river of white space' which makes it harder to read. depending on the text flow (right to left or left to right), use right/left justified


## Developing Accessible Navigation and Content

### semantic html
- use right tag for the job. even if you dont have css, the page should still be able to render in a logical order. it may not look pretty but it should still be functional.
- why? because assistive technologies like screen readers relies on these tags to navigate and consume the content.
- html heading tags h1 - h6
    - provide the document outline
    - provide navigation targets for screen readers
    - must be used in a meaningful order 
      - there should only be a single h1 tag in a page. it should provide title for the main content.
      - no heading level should be skipped (why?) i.e. h1 must preceed h2, h2 before h3, h3 before h4 and so on. h5 should never be a direct child of any other tag besides h4. same with all other h# tags

### accessible keyboard controls
- browsers by default have focus and active control indicator. do not remove them. they are important for screen reader. 
  - using `display: none` will disable outline, so be careful when using that
- you can customize the outline style by targetting `*: focus{ outline: dashed... your style}`

### css and accessibility
- css heirarchy => `default browser styles` gets overridden by `external css` gets overridden by `embedded style sheets` gets overridden by `inline styles` gets overridden by `end user config settings`
- users may want to change the font, font size, colors used in your app, so your app should be flexible enough to respect and react to those user changes. eg. if you use `px` to set the font size, when user chooses to view text in large size, your font will retain whatever `px` you assigned. therefore, it is better to use `relative units` like `rem`, `em`, and `%`.
- **if you are using only css to give meaning to your content, it may appear fine to the sighted users, but for the users using assistive technology, your content wont convey the meaning and adds to the user's frustration. therefore, use proper semantic markup.

### links
- use meaningful texts to represent a link. eg. instead of just sayin 'read more...', say 'read more about cheetahs in Africa..'
 
## Accessible Form Design

### Forms
- clearly mark the `required` fields, `input requirements` on the `initial load` to save user time and mental burden. Dont display them only after the user submits and gets validation errors. do not use just the colors or icons to indicate `required` as a user could be color blind or may not recognize the icon. use words/text.
- every `input` field must have an accompanying `label`. user `for` attribute on a `label` to tie to a input. do not just rely on `placeholder` text to convey meaning.
- as much as you can, use `native form controls` (like button, select, textarea, radio-button) over building your own because they come with accessibility features built in.
- ARIA - Accessible Rich Internet Applications

## Accessible Images and Media
- use `alt` attribute to provide a _short_ description of the content of the image. avoid redundant phrases like 'this is an image of' etc
- for `complex images` like bar graph, charts, infograph etc where describing in one/two sentences would be difficult, use `<figure>` markup, include a short description of the image using `alt` attribute, then use `figure-caption` to provide greater details
- for video/audio - provide captions. and if you want to get to the next level, provide captions