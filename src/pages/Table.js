import React from "react";
import ReactDOM from "react-dom";
import CRUDTable, { Fields, Field, Pagination, CreateForm, UpdateForm,
    DeleteForm } from "react-crud-table";
// Component's Base CSS
import "./Table.css";
import axios from 'axios';

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

let tasks = [
  {
    id: 1,
    title: "Create an example",
    description: "Create an example of how to use the component"
  },
  {
    id: 2,
    title: "Improve",
    description: "Improve the component!"
  },
  {
    id: 3,
    title: "Create a pagination example",
    description: "Yeah!! It will be created."
  },
  {
    id: 4,
    title: "Sing a song",
    description: "La, la, laaaa"
  },
  {
    id: 5,
    title: "Write something",
    description: "Something"
  }
];

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};
const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};
const getAllUsers = () => {
  // if(state.email.length && state.password.length) {
      // props.showError(null);
      // const payload={
      //     "nickname": state.nickname,
      //     "email":state.email,
      //     "password":state.password,
      // }
      axios.get('http://localhost:8080/users')
          .then(function (response) {
              if(response.status === 200){
                console.log(response)
              //     setState(prevState => ({
              //         ...prevState,
              //         'successMessage' : 'Registration successful. Redirecting to home page..'
              //     }))
              //     // localStorage.setItem(ACCESS_TOKEN_NAME,response.data);
              //     redirectToHome();
              //     props.showError(null)
              // } else{
              //     props.showError("Some error ocurred");
              // }
              }
            })
          // .catch(function (error) {
          //     console.log(error);
          // });    
  // } else {
  //     props.showError('Please enter valid username and password')    
  }

let count = getAllUsers();
const service = {
  fetchItems: payload => {
    const { activePage, itemsPerPage } = payload.pagination;
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    let result = Array.from(tasks);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result.slice(start, end));
  },
  fetchTotal: payload => {
    return Promise.resolve(getAllUsers);
  }
};


const Example = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Present of Team"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" hideInCreateForm />
        <Field name="title" label="Title" placeholder="Title" />
        <Field name="description" label="Description" />
      </Fields>
      <CreateForm
        title="Task Creation"
        message="Create a new task!"
        trigger="Create Task"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Please, provide task's title";
          }

          if (!values.description) {
            errors.description = "Please, provide task's description";
          }

          return errors;
        }}
      />
      <UpdateForm
        title="Task Update Process"
        message="Update task"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={values => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.title) {
            errors.title = "Please, provide task's title";
          }

          if (!values.description) {
            errors.description = "Please, provide task's description";
          }

          return errors;
        }}
      />

      <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete the task?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={values => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
      <Pagination
        itemsPerPage={2}
        fetchTotalOfItems={payload => service.fetchTotal(payload)}
      />
    </CRUDTable>
  </div>
);

export default Example;
