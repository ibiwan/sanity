// React.createElement(component as any, props) (same as JSX)
<Formik component={ContactForm} />;

// (render as any)(props)
<Formik render={props => <ContactForm {...props} />} />

// (children as any)(props)
// or, if not function, 
// React.Children.only(children)
<Formik children={props => <ContactForm {...props} />} />

const ContactForm = 
({
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
}) => (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
        />
        {errors.name &&
            <div>
            {errors.name}
            </div>
        }
        <button type="submit">Submit</button>
    </form>
);
