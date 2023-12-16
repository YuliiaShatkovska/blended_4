import { Field, Form, Formik } from "formik";

const FormikSearch = () => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {/* {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <input
            id="query"
            name="query"
            type="query"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.query}
          />
          <button type="submit">Submit</button>
        </form>
      )} */}

      <Form>
        <Field type="query" name="query" placeholder="Query" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikSearch;
