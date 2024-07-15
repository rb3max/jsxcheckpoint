import React from 'react'

const Cards = () => {
  return (
    <div><div className='cards'>
    <div className='card'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"/>
      <h1>Javascript</h1>
      <p>JavaScript is a versatile, high-level programming language primarily used for enhancing the interactivity and functionality of websites. As a core technology of the World Wide Web, it enables developers to create dynamic content, control multimedia, animate images, and much more. JavaScript is executed in the browser, making it an essential tool for client-side development. With the advent of Node.js, JavaScript has also become popular on the server side, allowing for a unified language across both front-end and back-end development. Its extensive ecosystem, powered by libraries and frameworks like React, Angular, and Vue.js, makes JavaScript a cornerstone of modern web development.</p> 
    </div>
    <div className='card'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png"/>
      <h1>python</h1>
      <p>Python is a high-level, interpreted programming language known for its readability and simplicity. It was designed with an emphasis on code readability, allowing developers to express concepts in fewer lines of code compared to languages like C++ or Java. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It is widely used in various domains such as web development, data science, artificial intelligence, scientific computing, and automation. Its extensive standard library and the availability of numerous third-party modules make Python a powerful tool for both beginners and experienced developers. The language's versatility and ease of learning have contributed to its rapid adoption in academia, industry, and among hobbyists.</p> 
    </div>
    <div className='card'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/640px-C_Sharp_Logo_2023.svg.png"/>
      <h1>c#</h1>
      <p>C# (pronounced C-sharp) is a modern, object-oriented programming language developed by Microsoft as part of its .NET initiative. It is designed to be simple, efficient, and type-safe, offering a balance between the high-level productivity of languages like Python and the performance capabilities of languages like C++. C# is widely used for developing Windows applications, web services, and enterprise software, particularly in environments that rely on the Microsoft ecosystem. Its syntax is similar to other C-style languages, making it relatively easy to learn for those familiar with languages like C, C++, or Java. The language's robustness, coupled with the powerful .NET framework, allows developers to build scalable and secure applications across various platforms, including Windows, web, and mobile.</p> 
    </div>

  </div></div>
  )
}

export default Cards