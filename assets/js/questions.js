var quizType = ["JavaScript", "HTML", "CSS"]; //Score list titles

var questions = [
[   //JavaScript quiz
    {
        title: "What is the correct javaScript syntax to write 'hello'?",
        choices: ["println('hello')", "document.write('hello')", "$(write).content('hello')", "document.write = 'hello'"],
        answer: "document.write('hello')",
    },
    {
        title: "As a developer I can write the javaScript internally in the ______ tag.",
        choices: ["<js>", "<javaScript>", "<body>", "<script>"],
        answer: "<script>",
    },
    {
        title: "Using _____ statement is how you test for a specific condition.",
        choices: ["For", "While", "If", "Switch"],
        answer: "If",
    },
    {
        title: "Is it possible to nest functions in javaScript?",
        choices: ["True", "False", "Only in certain situations"],
        answer: "True",
    },
    {
        title: "What is meant by 'this' keyword in javaScript?",
        choices: ["It refers to the current object", "It is a variable which contains a value", "It referes to the previous object", "None of the above"],
        answer: "It refers current object",
    },
    {
        title: "As I veiw a page containing a javaScript program, which machine actually executes the script?",
        choices: ["A server based where the code was written", "The web server", "The machine running the web browser", "All of the above"],
        answer: "The machine running the web browser",
    }
],  
[   //Html quiz
    {
        title: "What does the <h1> element in HTML define?",
        choices: ["Hyperlink", "Headings", "Article 1", "Here"],
        answer: "Headings",
    },
    {
        title: "Which of the following defines an address for an <a> tag.",
        choices: ["hlink", "src", "rel", "href"],
        answer: "href",
    },
    {
        title: "When a developer wants to display a webpage within a webpage the use ______.",
        choices: ["classes", "div element", "src array", "iframes"],
        answer: "iframes",
    },
    {
        title: "One way to create a line break is by using <hr>, what is another way?",
        choices: ["<br>", "<line-break>", "<' '>", "<border>"],
        answer: "<br>",
    },
    {
        title: "HTML stands for?",
        choices: ["High Text Markup Language", "Hyper Text Markdown Language", "Hyper Test Markup Language", "None of the above"],
        answer: "None of the above",
    },
    {
        title: "How can you open a link in a new browser?",
        choices: ["<a href = 'url'target='new'>", "<a href = 'url'target='_blank'>", "<a href = 'url'.new>", "<a href = 'url'target='new_tab'>"],
        answer: "<a href = 'url'target='_blank'>",
    }
],  
[   //Css quiz
    {
        title: "If a developer wants to define a style for an unique element, which css selector will they use?",
        choices: ["id", "element.value", "querySelector()", "class"],
        answer: "id",
    },
    {
        title: "When wanting to wrap a block of text around an image, which css property will be used?",
        choices: ["text-align: wrap", "align", "push.text", "float"],
        answer: "float",
    },
    {
        title: "_____ is used to create a green dotted border around an image.",
        choices: ["outline-style", "border-style", "content.border()", "border-decoration"],
        answer: "border-style",
    },
    {
        title: "Which element is used in the <head> section if an external style sheet is being used?",
        choices: ["<link>", "<src>", "<css>", "<relative file path>"],
        answer: "<link>",
    },
    {
        title: "As a developer, it is always essential to write comments along with CSS code, which of the following allows that?",
        choices: ["//a comment", "<!--a comment--!>", "/a comment/", "/*a comment*/"],
        answer: "/*a comment*/",
    },
    {
        title: "Which CSS property is used to control the text of an element?",
        choices: ["font-style.size", "font-size", "text-size", ".size="],
        answer: "font-size",
    }
]
];

var placeHolders = [ //Placeholder array
    "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems. JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server. This means JavaScript functions can run after a webpage has loaded without communicating with the server. For example, a JavaScript function may check a web form before it is submitted to make sure all the required fields have been filled out. The JavaScript code can produce an error message before any information is actually transmitted to the server. Like server-side scripting languages, such as PHP and ASP, JavaScript code can be inserted anywhere within the HTML of a webpage. However, only the output of server-side code is displayed in the HTML, while JavaScript code remains fully visible in the source of the webpage. It can also be referenced in a separate .JS file, which may also be viewed in a browser. - https://techterms.com/definition/javaScript", //javaScript definition -- techterms.com

    "Stands for 'Hypertext Markup Language.' HTML is the language used to create webpages. 'Hypertext' refers to the hyperlinks that an HTML page may contain. 'Markup language' refers to the way tags are used to define the page layout and elements within the page.The web has gone through many changes over the past few decades, but HTML has always been the fundamental language used to develop webpages. Interestingly, while websites have become more advanced and interactive, HTML has actually gotten simpler. If you compare the source of an HTML5 page with a similar page written in HTML 4.01 or XHTML 1.0, the HTML5 page would probably contain less code. This is because modern HTML relies on cascading style sheets or JavaScript to format nearly all the elements within a page. - https://techterms.com/definition/html", //Html definition -- techterms.com

    "Stands for 'Cascading Style Sheet.' Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML. CSS helps Web developers create a uniform look across several pages of a Web site. Instead of defining the style of each table and each block of text within a page's HTML, commonly used styles need to be defined only once in a CSS document. Once the style is defined in cascading style sheet, it can be used by any page that references the CSS file. Plus, CSS makes it easy to change styles across several pages at once. For example, a Web developer may want to increase the default text size from 10pt to 12pt for fifty pages of a Web site. If the pages all reference the same style sheet, the text size only needs to be changed on the style sheet and all the pages will show the larger text. While CSS is great for creating text styles, it is helpful for formatting other aspects of Web page layout as well. For example, CSS can be used to define the cell padding of table cells, the style, thickness, and color of a table's border, and the padding around images or other objects. CSS gives Web developers more exact control over how Web pages will look than HTML does. This is why most Web pages today incorporate cascading style sheets. - https://techterms.com/definition/css", //CSS definition -- techterms.com
]