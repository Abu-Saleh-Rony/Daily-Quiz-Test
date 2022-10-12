import React from "react";

const Blog = () => {
    return (
        <div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-20"
            >
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of react router?
                </div>
                <div className="collapse-content">
                    <p>
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-20"
            >
                <div className="collapse-title text-xl font-medium">
                    How does context api works?
                </div>
                <div className="collapse-content">
                    <p>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-20 "
            >
                <div className="collapse-title text-xl font-medium ">
                    What is useRef in react?
                </div>
                <div className="collapse-content">
                    <p>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as
                        a way to access the DOM. If you pass a ref object to React with
                        React will set its .current property to the corresponding DOM node
                        whenever that node changes. However, useRef is useful for more than
                        the ref attribute. Its handy for keeping any mutable value around
                        similar to how youd use instance fields in classes. This works
                        because useRef creates a plain JavaScript object. The only
                        difference between useRef and creating a object yourself is that
                        useRef will give you the same ref object on every render. Keep in
                        mind that useRef doesnt notify you when its content changes.
                        Mutating the .current property doesnt cause a re-render. If you want
                        to run some code when React attaches or detaches a ref to a DOM
                        node, you may want to use a callback ref instead.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
