import React from "react";

const Blog = () => {
  return (
    <div>
      <h3>
        1: what's the differences between uncontrolled and controlled
        components?
      </h3>
      <p>
        Answer:Uncontrolled components manage their own state internally,
        without any intervention from the parent component. The value of the
        component is held in the component's own local state, which can be
        accessed and updated directly by the userControlled components, on the
        other hand, rely on their parent components to manage and update their
        state. The parent component passes down a value as a prop, and the child
        component uses this value to render its state. Whenever the user
        interacts with the component, the parent component is responsible for
        updating the state of the component
      </p>

      <h3>2.How to validate React props using PropTypes?</h3>
      <p>
        Answer:React provides a built-in utility called PropTypes to validate
        the props passed to a component. PropTypes is a type checking library
        that helps ensure the correctness of data types passed to a component.
        It allows developers to specify the data type of each prop and whether
        it is required or not.
      </p>
      <h3>3.what's the difference between nodejs and express js?</h3>
      <p>
        Answer:Node.js is a server-side JavaScript runtime environment that
        allows developers to build scalable, high-performance
        applications.Express.js, on the other hand, is a minimalist and flexible
        web application framework for Node.js. It provides a set of robust
        features to help build web applications and APIs quickly and easily.
        Express.js is built on top of Node.js, and it adds a layer of
        abstractions that simplify the development process
      </p>
      <h3>4.What is a custom hook, and why will you create a custom hook</h3>
      <p>
        Answer:A custom hook is a reusable function that contains stateful logic
        and can be shared between components in a React application. It allows
        developers to extract stateful logic from components and abstract it
        into a separate function, making the code more modular and easier to
        maintain. custom hooks allow developers to write more modular and
        reusable code, reducing the amount of repetitive code and making the
        codebase more maintainable.
      </p>
    </div>
  );
};

export default Blog;
